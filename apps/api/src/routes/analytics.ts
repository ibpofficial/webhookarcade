import type { FastifyInstance } from 'fastify';
import { getPrismaClient } from '@webhook-arcade/database';
import { requireAuth } from '../auth.js';

export async function analyticsRoutes(fastify: FastifyInstance): Promise<void> {
  const db = getPrismaClient() as any;

  fastify.get('/api/analytics', { preHandler: [requireAuth] }, async (req, reply) => {
    const workspaceId = req.workspaceId!;

    const endpoints = await db.endpoint.findMany({
      where: { workspaceId },
      select: { id: true },
    });

    const endpointIds = endpoints.map((e: any) => e.id);
    if (endpointIds.length === 0) {
      return reply.send({
        totalEvents: 0,
        successRate: 100,
        errorRate: 0,
        avgLatencyMs: 0,
        volumeOverTime: [],
        methodBreakdown: {},
        statusBreakdown: {},
      });
    }

    const events = await db.event.findMany({
      where: { endpointId: { in: endpointIds } },
      select: {
        statusCode: true,
        method: true,
        receivedAt: true,
      },
      orderBy: { receivedAt: 'desc' },
      take: 1000,
    });

    const totalEvents = events.length;
    let successCount = 0;
    const methodCounts: Record<string, number> = {};
    const statusCounts: Record<string, number> = {};
    const timeBuckets: Record<string, number> = {};

    for (const ev of events) {
      if (ev.statusCode >= 200 && ev.statusCode < 400) {
        successCount++;
      }

      methodCounts[ev.method] = (methodCounts[ev.method] || 0) + 1;
      const statusGroup = `${Math.floor(ev.statusCode / 100)}xx`;
      statusCounts[statusGroup] = (statusCounts[statusGroup] || 0) + 1;

      // Group into hourly ISO intervals
      const date = new Date(ev.receivedAt);
      date.setMinutes(0, 0, 0);
      const key = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timeBuckets[key] = (timeBuckets[key] || 0) + 1;
    }

    const successRate = totalEvents > 0 ? Math.round((successCount / totalEvents) * 100) : 100;
    const errorRate = 100 - successRate;

    const volumeOverTime = Object.entries(timeBuckets)
      .map(([time, count]) => ({ time, count }))
      .slice(-12);

    return reply.send({
      totalEvents,
      successRate,
      errorRate,
      volumeOverTime,
      methodBreakdown: methodCounts,
      statusBreakdown: statusCounts,
    });
  });
}

