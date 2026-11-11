import type { FastifyInstance } from 'fastify';
import { BUILT_IN_TEMPLATES } from '@webhook-arcade/templates';
import { getPrismaClient } from '@webhook-arcade/database';
import { requireAuth } from '../auth.js';

export async function templateRoutes(fastify: FastifyInstance): Promise<void> {
  const db = getPrismaClient() as any;

  // List templates (built-in + workspace custom)
  fastify.get('/api/templates', { preHandler: [requireAuth] }, async (req, reply) => {
    const workspaceId = req.workspaceId!;

    const customTemplates = await db.template.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
    });

    const formattedCustom = customTemplates.map((t: any) => ({
      id: t.id,
      name: t.name,
      category: t.category,
      provider: t.provider,
      description: t.description,
      method: t.method,
      defaultHeaders: JSON.parse(t.defaultHeadersJson || '{}'),
      payload: t.payload,
      isBuiltIn: false,
    }));

    return reply.send({
      templates: [...BUILT_IN_TEMPLATES, ...formattedCustom],
    });
  });
}

