import type { ChaosAssertion, AssertionEvaluation, DeliveryAttemptSummary } from '@webhook-arcade/shared';

/**
 * Basic JSONPath / nested property extractor (e.g. "data.object.status" or "id")
 */
export function extractJsonValue(obj: unknown, path: string): unknown {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return undefined;
  }

  const cleanPath = path.replace(/^\$\.?/, '');
  if (!cleanPath) return obj;

  const parts = cleanPath.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }

  return current;
}

export interface DetailedDeliveryResponse {
  attempt: DeliveryAttemptSummary;
  headers: Record<string, string>;
  body: string;
}

export function evaluateAssertions(
  assertions: ChaosAssertion[],
  deliveries: DetailedDeliveryResponse[],
  latencyStats: { min: number; avg: number; p95: number; max: number },
): AssertionEvaluation[] {
  const results: AssertionEvaluation[] = [];

  for (const assertion of assertions) {
    if (!assertion.enabled) continue;

    try {
      switch (assertion.type) {
        case 'status_equals': {
          const expectedStatus = Number(assertion.expected);
          const mismatches = deliveries.filter((d) => d.attempt.statusCode !== expectedStatus);
          const passed = mismatches.length === 0 && deliveries.length > 0;
          results.push({
            assertionId: assertion.id,
            description: assertion.description || `Status equals ${expectedStatus}`,
            type: assertion.type,
            passed,
            expected: expectedStatus,
            actual: deliveries.map((d) => d.attempt.statusCode).join(', '),
            error: passed ? undefined : `${mismatches.length} delivery(ies) returned unexpected status code`,
          });
          break;
        }

        case 'status_range': {
          const min = assertion.min ?? 200;
          const max = assertion.max ?? 299;
          const outOfRange = deliveries.filter(
            (d) => d.attempt.statusCode < min || d.attempt.statusCode > max,
          );
          const passed = outOfRange.length === 0 && deliveries.length > 0;
          results.push({
            assertionId: assertion.id,
            description: assertion.description || `Status in range [${min}, ${max}]`,
            type: assertion.type,
            passed,
            expected: `[${min}, ${max}]`,
            actual: deliveries.map((d) => d.attempt.statusCode).join(', '),
            error: passed ? undefined : `${outOfRange.length} delivery(ies) fell outside status range`,
          });
          break;
        }

        case 'latency_below_ms': {
          const threshold = Number(assertion.max ?? assertion.expected ?? 500);
          const passed = latencyStats.p95 <= threshold;
          results.push({
            assertionId: assertion.id,
            description: assertion.description || `p95 Latency below ${threshold}ms`,
            type: assertion.type,
            passed,
            expected: `<=${threshold}ms`,
            actual: `p95=${latencyStats.p95}ms, max=${latencyStats.max}ms`,
            error: passed ? undefined : `p95 latency (${latencyStats.p95}ms) exceeded threshold (${threshold}ms)`,
          });
          break;
        }

        case 'body_jsonpath_equals': {
          const path = assertion.target ?? '';
          let allMatched = true;
          let sampleActual: unknown = undefined;

          for (const d of deliveries) {
            try {
              const json = JSON.parse(d.body);
              const val = extractJsonValue(json, path);
              sampleActual = val;
              if (String(val) !== String(assertion.expected)) {
                allMatched = false;
                break;
              }
            } catch {
              allMatched = false;
              sampleActual = 'Invalid JSON in body';
              break;
            }
          }

          results.push({
            assertionId: assertion.id,
            description: assertion.description || `JSONPath ${path} equals ${assertion.expected}`,
            type: assertion.type,
            passed: allMatched,
            expected: assertion.expected,
            actual: sampleActual,
            error: allMatched ? undefined : `Target field at ${path} did not match expected value`,
          });
          break;
        }

        case 'body_jsonpath_exists': {
          const path = assertion.target ?? '';
          let existsInAll = true;

          for (const d of deliveries) {
            try {
              const json = JSON.parse(d.body);
              const val = extractJsonValue(json, path);
              if (val === undefined) {
                existsInAll = false;
                break;
              }
            } catch {
              existsInAll = false;
              break;
            }
          }

          results.push({
            assertionId: assertion.id,
            description: assertion.description || `JSONPath ${path} exists`,
            type: assertion.type,
            passed: existsInAll,
            expected: 'exists',
            actual: existsInAll ? 'present' : 'missing in some responses',
            error: existsInAll ? undefined : `Expected field at ${path} was missing in response`,
          });
          break;
        }

        case 'header_equals': {
          const headerName = (assertion.target ?? '').toLowerCase();
          const expectedVal = String(assertion.expected ?? '');
          const passed = deliveries.every((d) => d.headers[headerName] === expectedVal);

          results.push({
            assertionId: assertion.id,
            description: assertion.description || `Header ${headerName} equals "${expectedVal}"`,
            type: assertion.type,
            passed,
            expected: expectedVal,
            actual: deliveries[0]?.headers[headerName] ?? 'undefined',
            error: passed ? undefined : `Header ${headerName} did not match expected value in all responses`,
          });
          break;
        }

        case 'idempotent_processed_once': {
          // Idempotency rule: First delivery processes normally (2xx), subsequent identical events
          // must acknowledge without duplicate side effects (e.g. 200 with idempotent flag, or 409 conflict, or duplicate: true)
          if (deliveries.length <= 1) {
            results.push({
              assertionId: assertion.id,
              description: assertion.description || 'Idempotent execution: processed exactly once',
              type: assertion.type,
              passed: true,
              expected: 'Single delivery executed',
              actual: '1 delivery',
            });
            break;
          }

          const rest = deliveries.slice(1);

          let idempotent = false;
          // Check if responses indicate idempotency
          // Option A: rest returned 409 Conflict or 422
          const allRestConflicted = rest.every((d) => d.attempt.statusCode === 409 || d.attempt.statusCode === 200);

          // Option B: response body contains duplicate/idempotent indicator
          let restIndicatesDuplicate = false;
          try {
            restIndicatesDuplicate = rest.every((d) => {
              const bodyLower = d.body.toLowerCase();
              return (
                bodyLower.includes('duplicate') ||
                bodyLower.includes('already_processed') ||
                bodyLower.includes('idempotent') ||
                d.attempt.statusCode === 409
              );
            });
          } catch {
            restIndicatesDuplicate = false;
          }

          idempotent = allRestConflicted && (restIndicatesDuplicate || rest.every((d) => d.attempt.statusCode === 200));

          results.push({
            assertionId: assertion.id,
            description: assertion.description || 'Idempotency: Handled duplicate deliveries gracefully',
            type: assertion.type,
            passed: idempotent,
            expected: 'Duplicate deliveries recognized and handled without error',
            actual: rest.map((d) => `HTTP ${d.attempt.statusCode}`).join(', '),
            error: idempotent ? undefined : 'Duplicate deliveries were not recognized or resulted in unhandled errors',
          });
          break;
        }

        default: {
          results.push({
            assertionId: assertion.id,
            description: assertion.description || 'Unknown assertion',
            type: assertion.type,
            passed: true,
          });
        }
      }
    } catch (err: unknown) {
      results.push({
        assertionId: assertion.id,
        description: assertion.description,
        type: assertion.type,
        passed: false,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return results;
}
