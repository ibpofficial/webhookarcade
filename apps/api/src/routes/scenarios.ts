import type { FastifyInstance } from 'fastify';
import type { Server as SocketIOServer } from 'socket.io';
import { getPrismaClient } from '@webhook-arcade/database';
import { createScenarioSchema, runScenarioSchema } from '@webhook-arcade/shared';
import { executeChaosScenario } from '@webhook-arcade/chaos-engine';
import { requireAuth } from '../auth.js';

export async function scenarioRoutes(fastify: FastifyInstance, io: SocketIOServer): Promise<void> {
  const db = getPrismaClient() as any;

  // List scenarios
  fastify.get('/api/scenarios', { preHandler: [requireAuth] }, async (req, reply) => {
    const workspaceId = req.workspaceId!;
    const scenarios = await db.scenario.findMany({
      where: { workspaceId },
      include: {
        testRuns: {
          take: 1,
          orderBy: { startedAt: 'desc' },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    const formatted = scenarios.map((sc: any) => ({
      id: sc.id,
      name: sc.name,
      description: sc.description,
      destinationUrl: sc.destinationUrl,
      stepsCount: JSON.parse(sc.stepsJson || '[]').length,
      assertionsCount: JSON.parse(sc.assertionsJson || '[]').length,
      lastRun: sc.testRuns[0]
        ? {
            id: sc.testRuns[0].id,
            startedAt: sc.testRuns[0].startedAt.toISOString(),
            allPassed: sc.testRuns[0].allPassed,
            totalDeliveries: sc.testRuns[0].totalDeliveries,
          }
        : null,
    }));

    return reply.send({ scenarios: formatted });
  });

  // Create scenario
  fastify.post('/api/scenarios', { preHandler: [requireAuth] }, async (req, reply) => {
    const workspaceId = req.workspaceId!;
    const parsed = createScenarioSchema.safeParse({ ...((req.body as object) || {}), workspaceId });
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const { name, description, destinationUrl, basePayload, baseHeaders, steps, assertions, rngSeed } = parsed.data;

    const scenario = await db.scenario.create({
      data: {
        workspaceId,
        name,
        description,
        destinationUrl,
        basePayload,
        baseHeadersJson: JSON.stringify(baseHeaders),
        stepsJson: JSON.stringify(steps),
        assertionsJson: JSON.stringify(assertions),
        rngSeed,
      },
    });

    return reply.status(201).send({ scenario });
  });

  // Get single scenario
  fastify.get('/api/scenarios/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const scenario = await db.scenario.findUnique({
      where: { id },
      include: {
        testRuns: {
          take: 10,
          orderBy: { startedAt: 'desc' },
        },
      },
    });

    if (!scenario || scenario.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Scenario Not Found' });
    }

    return reply.send({
      scenario: {
        ...scenario,
        baseHeaders: JSON.parse(scenario.baseHeadersJson || '{}'),
        steps: JSON.parse(scenario.stepsJson || '[]'),
        assertions: JSON.parse(scenario.assertionsJson || '[]'),
      },
    });
  });

  // Execute Chaos Scenario
  fastify.post('/api/scenarios/:id/run', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const scenario = await db.scenario.findUnique({ where: { id } });
    if (!scenario || scenario.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Scenario Not Found' });
    }

    const parsed = runScenarioSchema.safeParse(req.body || {});
    const targetUrl = parsed.success && parsed.data.destinationUrl ? parsed.data.destinationUrl : scenario.destinationUrl;
    const seed = parsed.success && parsed.data.overrideSeed !== undefined ? parsed.data.overrideSeed : scenario.rngSeed;

    const steps = JSON.parse(scenario.stepsJson || '[]');
    const assertions = JSON.parse(scenario.assertionsJson || '[]');
    const baseHeaders = JSON.parse(scenario.baseHeadersJson || '{}');
    const allowLocalhost = process.env.ALLOW_LOCALHOST_TARGETS === 'true';

    // Broadcast test run initiation
    io.to(`workspace_${workspaceId}`).emit('chaos:started', { scenarioId: scenario.id });

    try {
      const report = await executeChaosScenario(
        {
          workspaceId,
          name: scenario.name,
          destinationUrl: targetUrl,
          basePayload: scenario.basePayload,
          baseHeaders,
          steps,
          assertions,
          rngSeed: seed ?? undefined,
        },
        {
          allowLocalhost,
          onProgress: (completed, total) => {
            io.to(`workspace_${workspaceId}`).emit('chaos:progress', {
              scenarioId: scenario.id,
              completed,
              total,
            });
          },
        },
      );

      // Store TestRun in database
      const testRun = await db.testRun.create({
        data: {
          scenarioId: scenario.id,
          workspaceId,
          startedAt: new Date(report.startedAt),
          finishedAt: new Date(report.finishedAt),
          durationMs: report.durationMs,
          totalDeliveries: report.totalDeliveries,
          successfulDeliveries: report.successfulDeliveries,
          failedDeliveries: report.failedDeliveries,
          latencyMin: report.latencyStats.min,
          latencyAvg: report.latencyStats.avg,
          latencyP95: report.latencyStats.p95,
          latencyMax: report.latencyStats.max,
          allPassed: report.allPassed,
          reportJson: report as any,
          testResults: {
            create: report.assertions.map((a) => ({
              assertionId: a.assertionId,
              assertionType: a.type,
              description: a.description,
              passed: a.passed,
              expected: String(a.expected ?? ''),
              actual: String(a.actual ?? ''),
              errorMessage: a.error,
            })),
          },
        },
      });

      // Broadcast complete report
      io.to(`workspace_${workspaceId}`).emit('chaos:completed', {
        testRunId: testRun.id,
        scenarioId: scenario.id,
        report,
      });

      return reply.send({
        success: true,
        testRunId: testRun.id,
        report,
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      io.to(`workspace_${workspaceId}`).emit('chaos:failed', {
        scenarioId: scenario.id,
        error: errMsg,
      });

      return reply.status(400).send({
        success: false,
        error: 'Execution Failed',
        message: errMsg,
      });
    }
  });

  // Get Test Run Report
  fastify.get('/api/test-runs/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const testRun = await db.testRun.findUnique({
      where: { id },
      include: {
        scenario: true,
        testResults: true,
      },
    });

    if (!testRun || testRun.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Test Run Not Found' });
    }

    return reply.send({ testRun });
  });
}

