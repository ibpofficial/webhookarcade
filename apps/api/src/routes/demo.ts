import type { FastifyInstance, FastifyRequest } from 'fastify';

export async function demoRoutes(fastify: FastifyInstance): Promise<void> {
  const processedEventIds = new Set<string>();
  let naiveExecutionCount = 0;

  // Naive target handler: fails on malformed payloads, honors x-simulate-status, doesn't deduplicate
  fastify.all('/demo/naive', async (req: FastifyRequest, reply) => {
    naiveExecutionCount++;

    const simStatus = req.headers['x-simulate-status'];
    if (simStatus) {
      const code = parseInt(String(simStatus), 10);
      return reply.status(code).send({ error: 'simulated_failure', code });
    }

    const body = req.body as any;
    const eventId = body?.id || req.headers['x-arcade-attempt'] || req.headers['x-event-id'] || 'default_evt';

    return reply.status(200).send({
      status: 'processed_blindly',
      executionNumber: naiveExecutionCount,
      eventId,
      warning: 'Naive handler: No deduplication performed. Prone to duplicate side effects.',
    });
  });

  // Idempotent target handler: remembers processed event IDs and acknowledges duplicates safely
  fastify.all('/demo/idempotent', async (req: FastifyRequest, reply) => {
    const body = req.body as any;
    const eventId = body?.id || req.headers['x-arcade-attempt'] || req.headers['x-event-id'] || 'default_evt';

    if (processedEventIds.has(String(eventId))) {
      return reply.status(200).send({
        status: 'success',
        idempotent: true,
        duplicate: true,
        already_processed: true,
        eventId,
        message: 'Duplicate delivery acknowledged without duplicate side effects.',
      });
    }

    processedEventIds.add(String(eventId));

    return reply.status(200).send({
      status: 'success',
      idempotent: true,
      duplicate: false,
      eventId,
      message: 'First delivery processed successfully.',
    });
  });
}
