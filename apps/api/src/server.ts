import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { Server as SocketIOServer } from 'socket.io';

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

  // Attach Socket.IO to Fastify's raw HTTP server
  const io = new SocketIOServer(fastify.server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    // Authenticate socket handshake or subscribe to workspace
    const token = socket.handshake.auth.token || socket.handshake.query.token;
    if (token && typeof token === 'string') {
      const user = verifyToken(token);
      if (user?.workspaceId) {
        socket.join(`workspace_${user.workspaceId}`);
      }
    }

    socket.on('join:workspace', (workspaceId: string) => {
      if (workspaceId) {
        socket.join(`workspace_${workspaceId}`);
      }
    });

    socket.on('join:endpoint', (endpointId: string) => {
      if (endpointId) {
        socket.join(`endpoint_${endpointId}`);
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

