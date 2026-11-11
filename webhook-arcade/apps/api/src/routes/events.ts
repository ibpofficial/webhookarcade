import type { FastifyInstance } from 'fastify';
import { getPrismaClient } from '@webhook-arcade/database';
import { listEventsQuerySchema, sendManualEventSchema } from '@webhook-arcade/shared';
import { dispatchReplayRequest } from '@webhook-arcade/replay-engine';
import { requireAuth } from '../auth.js';

export async function eventRoutes(fastify: FastifyInstance): Promise<void> {
  const db = getPrismaClient() as any;

  // List captured events with search and filters
  fastify.get('/api/events', { preHandler: [requireAuth] }, async (req, reply) => {
    const workspaceId = req.workspaceId!;
    const parsed = listEventsQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const { endpointId, method, status, search, limit, cursor } = parsed.data;

    // Ensure requested endpoint belongs to the workspace
    const endpointFilter: any = { workspaceId };
    if (endpointId) {
      endpointFilter.id = endpointId;
    }

    const validEndpoints = await db.endpoint.findMany({
      where: endpointFilter,
      select: { id: true },
    });

    const endpointIds = validEndpoints.map((ep: any) => ep.id);
    if (endpointIds.length === 0) {
      return reply.send({ events: [], nextCursor: null });
    }

    const whereClause: any = {
      endpointId: { in: endpointIds },
    };

    if (method) {
      whereClause.method = method;
    }

    if (status) {
      whereClause.statusCode = status;
    }

    const events = await db.event.findMany({
      where: whereClause,
      take: limit + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: { receivedAt: 'desc' },
      include: {
        _count: {
          select: { deliveries: true },
        },
      },
    });

    let nextCursor: string | null = null;
    if (events.length > limit) {
      const nextItem = events.pop();
      nextCursor = nextItem.id;
    }

    // Filter in-memory for search query if provided (matches method, path, headers, or parsed content)
    let filtered = events;
    if (search && search.trim().length > 0) {
      const s = search.toLowerCase().trim();
      filtered = events.filter((ev: any) => {
        return (
          ev.path.toLowerCase().includes(s) ||
          ev.method.toLowerCase().includes(s) ||
          ev.headersJson.toLowerCase().includes(s) ||
          ev.rawBody.toString('utf8').toLowerCase().includes(s)
        );
      });
    }

    const formatted = filtered.map((ev: any) => {
      let redacted: string[] = [];
      try {
        redacted = JSON.parse(ev.redactedHeaders || '[]');
      } catch {
        // ignore
      }

      return {
        id: ev.id,
        endpointId: ev.endpointId,
        method: ev.method,
        path: ev.path,
        statusCode: ev.statusCode,
        ip: ev.ip,
        sizeBytes: ev.sizeBytes,
        receivedAt: ev.receivedAt.toISOString(),
        isInvalidJson: ev.isInvalidJson,
        redactedHeaders: redacted,
        replaysCount: ev._count?.deliveries || 0,
      };
    });

    return reply.send({ events: formatted, nextCursor });
  });

  // Get single event details
  fastify.get('/api/events/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const event = await db.event.findUnique({
      where: { id },
      include: {
        endpoint: true,
        deliveries: {
          orderBy: { sentAt: 'desc' },
        },
      },
    });

    if (!event || event.endpoint.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Event Not Found' });
    }

    let headers: Record<string, string> = {};
    let query: Record<string, string> = {};
    let redactedKeys: string[] = [];

    try {
      headers = JSON.parse(event.headersJson || '{}');
      query = JSON.parse(event.queryJson || '{}');
      redactedKeys = JSON.parse(event.redactedHeaders || '[]');
    } catch {
      // ignore
    }

    const rawString = event.rawBody ? event.rawBody.toString('utf8') : '';
    let parsedBody = event.parsedBody;
    if (typeof parsedBody === 'string') {
      try {
        parsedBody = JSON.parse(parsedBody);
      } catch {
        // keep string
      }
    }

    return reply.send({
      event: {
        id: event.id,
        endpointId: event.endpointId,
        endpointName: event.endpoint.name,
        method: event.method,
        path: event.path,
        statusCode: event.statusCode,
        ip: event.ip,
        sizeBytes: event.sizeBytes,
        receivedAt: event.receivedAt.toISOString(),
        isInvalidJson: event.isInvalidJson,
        redactedHeaders: redactedKeys,
        headers,
        queryParams: query,
        rawBody: rawString,
        parsedBody,
        replaysCount: event.deliveries.length,
        deliveries: event.deliveries.map((d: any) => ({
          id: d.id,
          destinationUrl: d.destinationUrl,
          method: d.method,
          statusCode: d.statusCode,
          latencyMs: d.latencyMs,
          success: d.success,
          sentAt: d.sentAt.toISOString(),
          errorMessage: d.errorMessage,
        })),
      },
    });
  });

  // Event Composer - Manual Dispatch
  fastify.post('/api/events/send', { preHandler: [requireAuth] }, async (req, reply) => {
    const parsed = sendManualEventSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const { destinationUrl, method, headers, payload } = parsed.data;
    const allowLocalhost = process.env.ALLOW_LOCALHOST_TARGETS === 'true';

    try {
      const response = await dispatchReplayRequest(destinationUrl, {
        method,
        headers,
        body: payload,
        allowLocalhost,
        timeoutMs: 10000,
      });

      return reply.send({
        success: true,
        delivery: {
          destinationUrl,
          statusCode: response.statusCode,
          statusText: response.statusText,
          headers: response.headers,
          body: response.body,
          latencyMs: response.latencyMs,
        },
      });
    } catch (err: unknown) {
      return reply.status(400).send({
        success: false,
        error: 'Delivery Failed',
        message: err instanceof Error ? err.message : String(err),
      });
    }
  });

  // Delete event
  fastify.delete('/api/events/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const event = await db.event.findUnique({
      where: { id },
      include: { endpoint: true },
    });

    if (!event || event.endpoint.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Event Not Found' });
    }

    await db.event.delete({ where: { id } });
    return reply.send({ success: true, message: 'Event deleted from history' });
  });
}
