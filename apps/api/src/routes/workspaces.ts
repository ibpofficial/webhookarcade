import type { FastifyInstance } from 'fastify';
import { getPrismaClient } from '@webhook-arcade/database';
import { createWorkspaceSchema, updateWorkspaceSchema } from '@webhook-arcade/shared';
import { requireAuth } from '../auth.js';

export async function workspaceRoutes(fastify: FastifyInstance): Promise<void> {
  const db = getPrismaClient() as any;

  // List workspaces
  fastify.get('/api/workspaces', { preHandler: [requireAuth] }, async (req, reply) => {
    const user = req.user!;
    if (user.isGuest) {
      const ws = await db.workspace.findUnique({ where: { id: user.workspaceId } });
      return reply.send({ workspaces: ws ? [ws] : [] });
    }

    const workspaces = await db.workspace.findMany({
      where: { ownerId: user.userId },
      orderBy: { createdAt: 'desc' },
    });
    return reply.send({ workspaces });
  });

  // Create workspace
  fastify.post('/api/workspaces', { preHandler: [requireAuth] }, async (req, reply) => {
    const user = req.user!;
    const parsed = createWorkspaceSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const ws = await db.workspace.create({
      data: {
        name: parsed.data.name,
        ownerId: user.isGuest ? null : user.userId,
        isGuest: user.isGuest,
      },
    });

    return reply.status(201).send({ workspace: ws });
  });

  // Get single workspace with isolation check
  fastify.get('/api/workspaces/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const user = req.user!;

    if (user.isGuest && user.workspaceId !== id) {
      return reply.status(403).send({ error: 'Forbidden', message: 'Access to foreign workspace denied' });
    }

    const ws = await db.workspace.findUnique({
      where: { id },
      include: {
        endpoints: {
          select: {
            id: true,
            name: true,
            tokenPrefix: true,
            isPaused: true,
            createdAt: true,
          },
        },
      },
    });

    if (!ws) {
      return reply.status(404).send({ error: 'Workspace Not Found' });
    }

    if (!user.isGuest && ws.ownerId !== user.userId) {
      return reply.status(403).send({ error: 'Forbidden', message: 'Access to foreign workspace denied' });
    }

    return reply.send({ workspace: ws });
  });

  // Update workspace
  fastify.patch('/api/workspaces/:id', { preHandler: [requireAuth] }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const user = req.user!;

    if (user.isGuest && user.workspaceId !== id) {
      return reply.status(403).send({ error: 'Forbidden', message: 'Access to foreign workspace denied' });
    }

    const parsed = updateWorkspaceSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const ws = await db.workspace.update({
      where: { id },
      data: parsed.data,
    });

    return reply.send({ workspace: ws });
  });
}
