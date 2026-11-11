import { dispatchReplayRequest } from '@webhook-arcade/replay-engine';
import { generateCorruptSignature } from '@webhook-arcade/signatures';
import type {
  CreateScenarioInput,
  ChaosRunReport,
  DeliveryAttemptSummary,
} from '@webhook-arcade/shared';
import { SeededRNG } from './rng.js';
import { evaluateAssertions, type DetailedDeliveryResponse } from './assertions.js';

export interface RunOptions {
  allowLocalhost?: boolean;
  onProgress?: (completed: number, total: number) => void;
}

interface DeliveryTask {
  id: string;
  stepId: string;
  stepType: string;
  destinationUrl: string;
  method: string;
  headers: Record<string, string>;
  body: string;
  delayBeforeMs: number;
}

export async function executeChaosScenario(
  scenario: CreateScenarioInput,
  options: RunOptions = {},
): Promise<ChaosRunReport> {
  const startedAt = new Date().toISOString();
  const startTime = performance.now();
  const rng = new SeededRNG(scenario.rngSeed ?? Date.now());

  const tasks: DeliveryTask[] = [];

  for (const step of scenario.steps) {
    if (!step.enabled) continue;

    const baseHeaders = { ...scenario.baseHeaders };
    let baseBody = scenario.basePayload;

    switch (step.type) {
      case 'duplicate': {
        const count = step.config.duplicateCount ?? 2;
        for (let i = 0; i < count; i++) {
          tasks.push({
            id: `dup_${step.id}_${i + 1}`,
            stepId: step.id,
            stepType: step.type,
            destinationUrl: scenario.destinationUrl,
            method: 'POST',
            headers: { ...baseHeaders, 'x-arcade-attempt': String(i + 1) },
            body: baseBody,
            delayBeforeMs: i === 0 ? 0 : (step.config.delayMs ?? 50),
          });
        }
        break;
      }

      case 'delay': {
        tasks.push({
          id: `del_${step.id}`,
          stepId: step.id,
          stepType: step.type,
          destinationUrl: scenario.destinationUrl,
          method: 'POST',
          headers: baseHeaders,
          body: baseBody,
          delayBeforeMs: step.config.delayMs ?? 1000,
        });
        break;
      }

      case 'burst': {
        const burstCount = Math.min(step.config.burstCount ?? 5, 50); // Safety cap
        for (let i = 0; i < burstCount; i++) {
          tasks.push({
            id: `burst_${step.id}_${i + 1}`,
            stepId: step.id,
            stepType: step.type,
            destinationUrl: scenario.destinationUrl,
            method: 'POST',
            headers: { ...baseHeaders, 'x-arcade-burst-index': String(i + 1) },
            body: baseBody,
            delayBeforeMs: 0,
          });
        }
        break;
      }

      case 'invalid_payload': {
        tasks.push({
          id: `inv_${step.id}`,
          stepId: step.id,
          stepType: step.type,
          destinationUrl: scenario.destinationUrl,
          method: 'POST',
          headers: { ...baseHeaders, 'content-type': 'application/json' },
          body: '{"error": "corrupted_payload_truncated',
          delayBeforeMs: 0,
        });
        break;
      }

      case 'bad_signature': {
        const headersWithBadSig = { ...baseHeaders };
        const sigHeaderKey = step.config.badSignatureKey || 'x-hub-signature-256';
        const currentSig = headersWithBadSig[sigHeaderKey] || 'sha256=1234567890abcdef';
        headersWithBadSig[sigHeaderKey] = generateCorruptSignature(currentSig);

        tasks.push({
          id: `badsig_${step.id}`,
          stepId: step.id,
          stepType: step.type,
          destinationUrl: scenario.destinationUrl,
          method: 'POST',
          headers: headersWithBadSig,
          body: baseBody,
          delayBeforeMs: 0,
        });
        break;
      }

      case 'missing_headers': {
        const headersWithRemovals = { ...baseHeaders };
        const toRemove = step.config.removeHeaders || ['content-type', 'user-agent'];
        for (const rem of toRemove) {
          delete headersWithRemovals[rem.toLowerCase()];
        }

        tasks.push({
          id: `mishead_${step.id}`,
          stepId: step.id,
          stepType: step.type,
          destinationUrl: scenario.destinationUrl,
          method: 'POST',
          headers: headersWithRemovals,
          body: baseBody,
          delayBeforeMs: 0,
        });
        break;
      }

      case 'out_of_order': {
        // Event A then Event B with order gap
        tasks.push({
          id: `ooo_B_${step.id}`,
          stepId: step.id,
          stepType: step.type,
          destinationUrl: scenario.destinationUrl,
          method: 'POST',
          headers: { ...baseHeaders, 'x-event-sequence': '2' },
          body: JSON.stringify({ sequence: 2, action: 'order.fulfilled' }),
          delayBeforeMs: 0,
        });
        tasks.push({
          id: `ooo_A_${step.id}`,
          stepId: step.id,
          stepType: step.type,
          destinationUrl: scenario.destinationUrl,
          method: 'POST',
          headers: { ...baseHeaders, 'x-event-sequence': '1' },
          body: JSON.stringify({ sequence: 1, action: 'order.created' }),
          delayBeforeMs: step.config.orderGapMs ?? 100,
        });
        break;
      }

      case 'random_failure': {
        const failRate = step.config.failureRate ?? 0.5;
        const willFail = rng.next() < failRate;
        const statusCode = willFail ? (step.config.failureStatusCode ?? 500) : 200;

        tasks.push({
          id: `rf_${step.id}`,
          stepId: step.id,
          stepType: step.type,
          destinationUrl: scenario.destinationUrl,
          method: 'POST',
          headers: { ...baseHeaders, 'x-simulate-status': String(statusCode) },
          body: baseBody,
          delayBeforeMs: 0,
        });
        break;
      }
    }
  }

  // If no steps generated tasks, generate at least one base delivery
  if (tasks.length === 0) {
    tasks.push({
      id: 'base_delivery',
      stepId: 'base',
      stepType: 'baseline',
      destinationUrl: scenario.destinationUrl,
      method: 'POST',
      headers: scenario.baseHeaders,
      body: scenario.basePayload,
      delayBeforeMs: 0,
    });
  }

  const detailedDeliveries: DetailedDeliveryResponse[] = [];
  const deliveries: DeliveryAttemptSummary[] = [];

  let completedCount = 0;
  for (const task of tasks) {
    if (task.delayBeforeMs > 0) {
      await new Promise((r) => setTimeout(r, task.delayBeforeMs));
    }

    try {
      const res = await dispatchReplayRequest(task.destinationUrl, {
        method: task.method,
        headers: task.headers,
        body: task.body,
        allowLocalhost: options.allowLocalhost,
        timeoutMs: 10000,
      });

      const attempt: DeliveryAttemptSummary = {
        attemptId: task.id,
        stepId: task.stepId,
        stepType: task.stepType,
        sentAt: new Date().toISOString(),
        statusCode: res.statusCode,
        latencyMs: res.latencyMs,
        success: res.statusCode >= 200 && res.statusCode < 400,
      };

      deliveries.push(attempt);
      detailedDeliveries.push({
        attempt,
        headers: res.headers,
        body: res.body,
      });
    } catch (err: unknown) {
      const attempt: DeliveryAttemptSummary = {
        attemptId: task.id,
        stepId: task.stepId,
        stepType: task.stepType,
        sentAt: new Date().toISOString(),
        statusCode: 0,
        latencyMs: 0,
        success: false,
        errorMessage: err instanceof Error ? err.message : String(err),
      };

      deliveries.push(attempt);
      detailedDeliveries.push({
        attempt,
        headers: {},
        body: '',
      });
    }

    completedCount++;
    options.onProgress?.(completedCount, tasks.length);
  }

  const finishedAt = new Date().toISOString();
  const durationMs = Math.round(performance.now() - startTime);

  // Compute Latency stats
  const validLatencies = deliveries.map((d) => d.latencyMs).filter((l) => l > 0);
  validLatencies.sort((a, b) => a - b);

  const min = validLatencies.length > 0 ? validLatencies[0]! : 0;
  const max = validLatencies.length > 0 ? validLatencies[validLatencies.length - 1]! : 0;
  const avg =
    validLatencies.length > 0
      ? Math.round(validLatencies.reduce((a, b) => a + b, 0) / validLatencies.length)
      : 0;
  const p95Index = Math.min(
    Math.floor(validLatencies.length * 0.95),
    validLatencies.length - 1,
  );
  const p95 = validLatencies.length > 0 ? validLatencies[p95Index]! : 0;

  const latencyStats = { min, avg, p95, max };
  const successfulDeliveries = deliveries.filter((d) => d.success).length;
  const failedDeliveries = deliveries.length - successfulDeliveries;

  // Evaluate assertions
  const assertionResults = evaluateAssertions(
    scenario.assertions,
    detailedDeliveries,
    latencyStats,
  );
  const allPassed = assertionResults.every((a) => a.passed);

  return {
    id: `run_${Date.now()}`,
    scenarioId: 'scenario_' + (scenario.name || 'default'),
    startedAt,
    finishedAt,
    durationMs,
    totalDeliveries: deliveries.length,
    successfulDeliveries,
    failedDeliveries,
    latencyStats,
    deliveries,
    assertions: assertionResults,
    allPassed,
  };
}
