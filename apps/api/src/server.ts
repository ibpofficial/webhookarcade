import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { Server as SocketIOServer } from 'socket.io';

try {
  if (process.loadEnvFile) {
    try { process.loadEnvFile(); } catch {}
    try { process.loadEnvFile('../../.env'); } catch {}
  }
} catch {
  // ignore if .env file not present
}

import { authRoutes } from './routes/auth.js';
import { workspaceRoutes } from './routes/workspaces.js';
import { endpointRoutes } from './routes/endpoints.js';
import { ingestRoutes } from './routes/ingest.js';
import { eventRoutes } from './routes/events.js';
import { replayRoutes } from './routes/replay.js';
import { scenarioRoutes } from './routes/scenarios.js';
import { templateRoutes } from './routes/templates.js';
import { analyticsRoutes } from './routes/analytics.js';
import { demoRoutes } from './routes/demo.js';
import { verifyToken } from './auth.js';
import { getPrismaClient } from '@webhook-arcade/database';

export async function buildServer() {
  const fastify = Fastify({
    logger: process.env.NODE_ENV === 'test' ? false : { level: 'info' },
    bodyLimit: 5 * 1024 * 1024, // 5MB
  });

  // Enable CORS
  await fastify.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  // Security Headers
  await fastify.register(helmet, {
    contentSecurityPolicy: false, // Allows Swagger UI and local development
  });

  // Raw buffer parser: preserves exact bytes for /ingest while parsing JSON for /api
  fastify.removeAllContentTypeParsers();
  fastify.addContentTypeParser('*', { parseAs: 'buffer' }, (req, body, done) => {
    if (req.url.startsWith('/api/') && req.headers['content-type']?.includes('application/json')) {
      try {
        const str = body.toString('utf8');
        const json = str.trim() ? JSON.parse(str) : {};
        done(null, json);
      } catch (err) {
        done(err as Error, undefined);
      }
    } else {
      done(null, body);
    }
  });

  // OpenAPI Documentation
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Webhook Arcade API',
        description: 'Every webhook. Every event. Every possibility. One playground.',
        version: '0.1.0',
      },
      servers: [
        {
          url: 'http://localhost:4000',
          description: 'Local development server',
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  });

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
  });

  // Attach Socket.IO to Fastify's raw HTTP server with strict CORS and handshake authentication
  const allowedOrigins = process.env.SOCKET_CORS_ORIGIN
    ? process.env.SOCKET_CORS_ORIGIN.split(',').map((s) => s.trim())
    : [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:5174',
        ...(process.env.WEB_URL ? [process.env.WEB_URL] : []),
      ];

  const io = new SocketIOServer(fastify.server, {
    cors: {
      origin: process.env.NODE_ENV === 'test' ? true : allowedOrigins,
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  // Strict handshake authentication: reject unauthenticated connections
  io.use((socket, next) => {
    const token = (socket.handshake.auth?.token || socket.handshake.query?.token) as string | undefined;
    if (!token || typeof token !== 'string') {
      return next(new Error('Unauthorized: Missing or invalid authentication token in socket handshake'));
    }

    const user = verifyToken(token);
    if (!user || !user.workspaceId) {
      return next(new Error('Unauthorized: Invalid or expired session token'));
    }

    (socket as any).user = user;
    next();
  });

  io.on('connection', (socket) => {
    const user = (socket as any).user;
    // Derive room strictly from verified token
    socket.join(`workspace_${user.workspaceId}`);

    // Authorized endpoint room join: confirms endpoint belongs to authenticated workspace
    socket.on('join:endpoint', async (endpointId: string) => {
      if (!endpointId || typeof endpointId !== 'string') return;
      try {
        const db = getPrismaClient() as any;
        const endpoint = await db.endpoint.findUnique({
          where: { id: endpointId },
          select: { id: true, workspaceId: true },
        });
        if (endpoint && endpoint.workspaceId === user.workspaceId) {
          socket.join(`endpoint_${endpointId}`);
          socket.emit('joined:endpoint', { endpointId });
        } else {
          socket.emit('error:forbidden', { message: 'Unauthorized endpoint room access' });
        }
      } catch {
        // ignore
      }
    });
  });

  // Register Routes
  await fastify.register(authRoutes);
  await fastify.register(workspaceRoutes);
  await fastify.register(endpointRoutes);
  await fastify.register((instance) => ingestRoutes(instance, io));
  await fastify.register(eventRoutes);
  await fastify.register(replayRoutes);
  await fastify.register((instance) => scenarioRoutes(instance, io));
  await fastify.register(templateRoutes);
  await fastify.register(analyticsRoutes);
  await fastify.register(demoRoutes);

  // Health check
  fastify.get('/health', async () => ({ status: 'ok', timestamp: new Date().toISOString() }));

  return { fastify, io };
}

// Standalone server execution
if (process.env.NODE_ENV !== 'test') {
  const port = parseInt(process.env.PORT || '4000', 10);
  const host = process.env.HOST || '0.0.0.0';

  buildServer()
    .then(({ fastify }) => {
      fastify.listen({ port, host }, (err, address) => {
        if (err) {
          fastify.log.error(err);
          process.exit(1);
        }
        console.log(`[API] Webhook Arcade API active at ${address}`);
        console.log(`[API] Interactive OpenAPI Documentation: ${address}/docs`);
      });
    })
    .catch((err) => {
      console.error('[API] Fatal server initialization error:', err);
      process.exit(1);
    });
}

