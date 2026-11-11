import type { FastifyInstance } from 'fastify';
import { getPrismaClient } from '@webhook-arcade/database';
import { replayEventSchema } from '@webhook-arcade/shared';
import { dispatchReplayRequest, compareResponses } from '@webhook-arcade/replay-engine';
import { requireAuth } from '../auth.js';

export async function replayRoutes(fastify: FastifyInstance): Promise<void> {
  const db = getPrismaClient() as any;

  // Replay a captured event
  fastify.post('/api/events/:id/replay', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const event = await db.event.findUnique({
      where: { id },
      include: { endpoint: true },
    });

    if (!event || event.endpoint.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Event Not Found' });
    }

    const parsed = replayEventSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const { destinationUrl, overridePayload, overrideHeaders, keptHeaders, method } = parsed.data;

    let originalHeaders: Record<string, string> = {};
    try {
      originalHeaders = JSON.parse(event.headersJson || '{}');
    } catch {
      // ignore
    }

    // Filter headers to keep
    const outboundHeaders: Record<string, string> = {};
    if (keptHeaders && keptHeaders.length > 0) {
      for (const key of keptHeaders) {
        const lower = key.toLowerCase();
        if (originalHeaders[lower] && originalHeaders[lower] !== '[REDACTED]') {
          outboundHeaders[lower] = originalHeaders[lower];
        }
      }
    } else {
      // Keep safe headers by default
      for (const [k, v] of Object.entries(originalHeaders)) {
        if (v !== '[REDACTED]' && k !== 'host' && k !== 'content-length') {
          outboundHeaders[k] = v;
        }
      }
    }

    // Apply header overrides
    if (overrideHeaders) {
      for (const [k, v] of Object.entries(overrideHeaders)) {
        outboundHeaders[k.toLowerCase()] = v;
      }
    }

    outboundHeaders['x-arcade-replayed'] = 'true';
    outboundHeaders['x-arcade-original-id'] = event.id;

    const payloadToSend = overridePayload ?? (event.rawBody ? Buffer.from(event.rawBody).toString('utf8') : '');
    const httpMethod = method || event.method || 'POST';
    const allowLocalhost = process.env.ALLOW_LOCALHOST_TARGETS === 'true';

    try {
      const response = await dispatchReplayRequest(destinationUrl, {
        method: httpMethod,
        headers: outboundHeaders,
        body: payloadToSend,
        allowLocalhost,
        timeoutMs: 10000,
      });

      const comparison = compareResponses(
        {
          statusCode: event.statusCode,
          body: event.rawBody ? Buffer.from(event.rawBody).toString('utf8') : '',
          latencyMs: undefined,
        },
        response,
      );

      // Record delivery attempt
      const delivery = await db.delivery.create({
        data: {
          eventId: event.id,
          destinationUrl,
          method: httpMethod,
          statusCode: response.statusCode,
          latencyMs: response.latencyMs,
          headersJson: JSON.stringify(response.headers),
          responseBody: response.body.substring(0, 50000), // Cap for db
          success: response.statusCode >= 200 && response.statusCode < 400,
        },
      });

      const isSqlite = process.env.USE_SQLITE === 'true' || !process.env.DATABASE_URL?.startsWith('postgresql');

      // Record Replay Job
      await db.replayJob.create({
        data: {
          originalEventId: event.id,
          destinationUrl,
          status: 'completed',
          resultDiff: isSqlite ? JSON.stringify(comparison) : (comparison as any),
          completedAt: new Date(),
        },
      });

      return reply.send({
        success: true,
        deliveryId: delivery.id,
        delivery: {
          id: delivery.id,
          destinationUrl,
          method: httpMethod,
          statusCode: response.statusCode,
          latencyMs: response.latencyMs,
          success: delivery.success,
        },
        comparison,
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);

      // Record failed delivery attempt
      await db.delivery.create({
        data: {
          eventId: event.id,
          destinationUrl,
          method: httpMethod,
          statusCode: 0,
          latencyMs: 0,
          headersJson: JSON.stringify({}),
          responseBody: '',
          success: false,
          errorMessage: errMsg,
        },
      });

      return reply.status(400).send({
        success: false,
        error: 'Replay Failed',
        message: errMsg,
      });
    }
  });

  // Get replay history for an event
  fastify.get('/api/events/:id/replays', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const event = await db.event.findUnique({
      where: { id },
      include: { endpoint: true },
    });

    if (!event || event.endpoint.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Event Not Found' });
    }

    const replays = await db.replayJob.findMany({
      where: { originalEventId: id },
      orderBy: { createdAt: 'desc' },
    });

    return reply.send({ replays });
  });
}

