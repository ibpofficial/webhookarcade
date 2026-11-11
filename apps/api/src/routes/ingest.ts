import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { Server as SocketIOServer } from 'socket.io';
import crypto from 'node:crypto';
import { getPrismaClient, hashToken } from '@webhook-arcade/database';
import { redactHeaders, parseRawPayload } from '@webhook-arcade/webhook-engine';

// In-memory rate limiting map per endpoint
const endpointRateLimiter = new Map<string, { count: number; resetAt: number }>();

function checkEndpointRateLimit(endpointId: string, limitPerMin: number): boolean {
  if (process.env.NODE_ENV === 'test') return true;
  const now = Date.now();
  const entry = endpointRateLimiter.get(endpointId);
  if (!entry || now > entry.resetAt) {
    endpointRateLimiter.set(endpointId, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= limitPerMin) {
    return false;
  }
  entry.count++;
  return true;
}

export async function ingestRoutes(fastify: FastifyInstance, io: SocketIOServer): Promise<void> {
  const db = getPrismaClient() as any;

  // Catch-all route for any HTTP method on /ingest/:token
  fastify.all('/ingest/:token', async (req: FastifyRequest, reply) => {
    const { token } = req.params as { token: string };
    const method = req.method.toUpperCase();
    const query = req.query as Record<string, string>;
    const ip = req.ip || (req.headers['x-forwarded-for'] as string) || '127.0.0.1';
    const contentType = req.headers['content-type'] as string | undefined;

    // Ingest authentication: Requires full secret token matching tokenHash via constant-time check
    const hashed = hashToken(token);
    const endpoint = await db.endpoint.findUnique({
      where: { tokenHash: hashed },
      include: {
        responseRule: true,
      },
    });

    if (!endpoint) {
      return reply.status(404).send({
        error: 'Endpoint Not Found',
        message: 'The requested webhook ingestion token is invalid or does not exist.',
      });
    }

    const hashBuf = Buffer.from(hashed, 'hex');
    const storedBuf = Buffer.from(endpoint.tokenHash, 'hex');
    if (hashBuf.length !== storedBuf.length || !crypto.timingSafeEqual(hashBuf, storedBuf)) {
      return reply.status(404).send({
        error: 'Endpoint Not Found',
        message: 'The requested webhook ingestion token is invalid or does not exist.',
      });
    }

    if (endpoint.isPaused) {
      return reply.status(503).send({
        error: 'Endpoint Paused',
        message: 'This webhook endpoint is currently paused by its administrator.',
      });
    }

    const rule = endpoint.responseRule;

    // Rate limiting per endpoint
    const rateLimit = rule?.rateLimitPerMin ?? 600;
    if (!checkEndpointRateLimit(endpoint.id, rateLimit)) {
      reply.header('Retry-After', '60');
      return reply.status(429).send({
        error: 'Too Many Requests',
        message: 'Ingestion rate limit exceeded for this endpoint. Please reduce sending frequency.',
      });
    }
    const rawBuffer = Buffer.isBuffer(req.body)
      ? req.body
      : typeof req.body === 'string'
        ? Buffer.from(req.body, 'utf8')
        : req.body
          ? Buffer.from(JSON.stringify(req.body), 'utf8')
          : Buffer.alloc(0);

    const { sanitized: sanitizedHeaders, redactedKeys } = redactHeaders(req.headers as Record<string, string>);
    const parseResult = parseRawPayload(rawBuffer, contentType);

    const statusCode = rule?.statusCode ?? 200;

    // In SQLite, Json columns are stored as serialized strings
    const isSqlite = process.env.USE_SQLITE === 'true' || !process.env.DATABASE_URL?.startsWith('postgresql');
    const dbParsedBody = parseResult.parsed !== null && parseResult.parsed !== undefined
      ? (isSqlite ? JSON.stringify(parseResult.parsed) : parseResult.parsed)
      : null;

    // Store in database
    const event = await db.event.create({
      data: {
        endpointId: endpoint.id,
        method,
        path: req.url,
        queryJson: JSON.stringify(query || {}),
        headersJson: JSON.stringify(sanitizedHeaders),
        rawBody: rawBuffer,
        parsedBody: dbParsedBody,
        statusCode,
        ip,
        sizeBytes: parseResult.sizeBytes,
        isInvalidJson: parseResult.isMalformed,
        redactedHeaders: JSON.stringify(redactedKeys),
      },
    });

    // Real-time broadcast over Socket.IO immediately
    const socketPayload = {
      id: event.id,
      endpointId: endpoint.id,
      method: event.method,
      path: event.path,
      statusCode: event.statusCode,
      ip: event.ip,
      sizeBytes: event.sizeBytes,
      receivedAt: event.receivedAt.toISOString(),
      isInvalidJson: event.isInvalidJson,
      redactedHeaders: redactedKeys,
      headers: sanitizedHeaders,
      queryParams: query || {},
      rawBody: parseResult.rawString,
      parsedBody: parseResult.parsed,
      replaysCount: 0,
    };

    io.to(`workspace_${endpoint.workspaceId}`).emit('event:captured', socketPayload);
    io.to(`endpoint_${endpoint.id}`).emit('event:captured', socketPayload);

    // Apply Response Simulator artificial delay
    if (rule?.delayMs && rule.delayMs > 0) {
      await new Promise((r) => setTimeout(r, Math.min(rule.delayMs, 30000)));
    }

    // Apply Response Simulator custom headers
    let customHeaders: Record<string, string> = {};
    if (rule?.headersJson) {
      try {
        customHeaders = JSON.parse(rule.headersJson);
      } catch {
        // ignore malformed custom headers
      }
    }

    for (const [k, v] of Object.entries(customHeaders)) {
      reply.header(k, v);
    }

    reply.header('content-type', rule?.contentType || 'application/json');

    return reply.status(statusCode).send(rule?.body || JSON.stringify({ received: true }));
  });
}
