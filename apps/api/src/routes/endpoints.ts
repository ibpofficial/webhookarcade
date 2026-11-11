import type { FastifyInstance } from 'fastify';
import { getPrismaClient, generateEndpointToken } from '@webhook-arcade/database';
import { createEndpointSchema, updateEndpointSchema, responseRuleSchema } from '@webhook-arcade/shared';
import { requireAuth } from '../auth.js';

export async function endpointRoutes(fastify: FastifyInstance): Promise<void> {
  const db = getPrismaClient() as any;

  // List endpoints in workspace
  fastify.get('/api/endpoints', { preHandler: [requireAuth] }, async (req, reply) => {
    const workspaceId = req.workspaceId!;
    const endpoints = await db.endpoint.findMany({
      where: { workspaceId },
      include: { responseRule: true },
      orderBy: { createdAt: 'desc' },
    });

    const publicBase = process.env.PUBLIC_INGEST_URL || 'http://localhost:4000/ingest';

    const enriched = endpoints.map((ep: any) => ({
      ...ep,
      url: `${publicBase}/${ep.tokenPrefix}`,
    }));

    return reply.send({ endpoints: enriched });
  });

  // Create new endpoint
  fastify.post('/api/endpoints', { preHandler: [requireAuth] }, async (req, reply) => {
    const workspaceId = req.workspaceId!;
    const parsed = createEndpointSchema.safeParse({ ...((req.body as object) || {}), workspaceId });
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const { name, description, responseRule } = parsed.data;
    const tokenInfo = generateEndpointToken();

    const endpoint = await db.endpoint.create({
      data: {
        workspaceId,
        name,
        description,
        tokenHash: tokenInfo.tokenHash,
        tokenPrefix: tokenInfo.tokenPrefix,
        responseRule: {
          create: {
            statusCode: responseRule?.statusCode ?? 200,
            contentType: responseRule?.contentType ?? 'application/json',
            body: responseRule?.body ?? JSON.stringify({ received: true }),
            headersJson: JSON.stringify(responseRule?.headers ?? {}),
            delayMs: responseRule?.delayMs ?? 0,
            rateLimitPerMin: responseRule?.rateLimitPerMinute ?? 600,
          },
        },
      },
      include: {
        responseRule: true,
      },
    });

    const publicBase = process.env.PUBLIC_INGEST_URL || 'http://localhost:4000/ingest';

    return reply.status(201).send({
      endpoint: {
        ...endpoint,
        fullToken: tokenInfo.fullToken, // returned ONLY once at creation
        url: `${publicBase}/${tokenInfo.fullToken}`,
      },
    });
  });

  // Get single endpoint
  fastify.get('/api/endpoints/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const endpoint = await db.endpoint.findUnique({
      where: { id },
      include: { responseRule: true },
    });

    if (!endpoint || endpoint.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Endpoint Not Found' });
    }

    const publicBase = process.env.PUBLIC_INGEST_URL || 'http://localhost:4000/ingest';

    return reply.send({
      endpoint: {
        ...endpoint,
        url: `${publicBase}/${endpoint.tokenPrefix}`,
      },
    });
  });

  // Update endpoint
  fastify.patch('/api/endpoints/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const existing = await db.endpoint.findUnique({ where: { id } });
    if (!existing || existing.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Endpoint Not Found' });
    }

    const parsed = updateEndpointSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const updated = await db.endpoint.update({
      where: { id },
      data: {
        name: parsed.data.name,
        description: parsed.data.description,
        isPaused: parsed.data.isPaused,
      },
      include: { responseRule: true },
    });

    return reply.send({ endpoint: updated });
  });

  // Configure Response Simulator Rules
  fastify.put('/api/endpoints/:id/rules', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const existing = await db.endpoint.findUnique({ where: { id } });
    if (!existing || existing.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Endpoint Not Found' });
    }

    const parsed = responseRuleSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const rule = await db.responseRule.upsert({
      where: { endpointId: id },
      update: {
        statusCode: parsed.data.statusCode,
        contentType: parsed.data.contentType,
        body: parsed.data.body,
        headersJson: JSON.stringify(parsed.data.headers),
        delayMs: parsed.data.delayMs,
        rateLimitPerMin: parsed.data.rateLimitPerMinute,
      },
      create: {
        endpointId: id,
        statusCode: parsed.data.statusCode,
        contentType: parsed.data.contentType,
        body: parsed.data.body,
        headersJson: JSON.stringify(parsed.data.headers),
        delayMs: parsed.data.delayMs,
        rateLimitPerMin: parsed.data.rateLimitPerMinute,
      },
    });

    return reply.send({ rule });
  });

  // Delete endpoint
  fastify.delete('/api/endpoints/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const existing = await db.endpoint.findUnique({ where: { id } });
    if (!existing || existing.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Endpoint Not Found' });
    }

    await db.endpoint.delete({ where: { id } });
    return reply.send({ success: true, message: 'Endpoint deleted' });
  });

  // Purge all events captured for this endpoint
  fastify.delete('/api/endpoints/:id/events', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const workspaceId = req.workspaceId!;

    const existing = await db.endpoint.findUnique({ where: { id } });
    if (!existing || existing.workspaceId !== workspaceId) {
      return reply.status(404).send({ error: 'Endpoint Not Found' });
    }

    const deleted = await db.event.deleteMany({
      where: { endpointId: id },
    });

    return reply.send({
      success: true,
      count: deleted.count,
      deleted: deleted.count,
      message: `Purged ${deleted.count} events`,
    });
  });
}

