import type { FastifyInstance } from 'fastify';
import bcrypt from 'bcryptjs';
import { getPrismaClient, generateEndpointToken, hashToken } from '@webhook-arcade/database';
import { registerSchema, loginSchema, guestSessionSchema } from '@webhook-arcade/shared';
import { signToken, verifyToken, requireAuth } from '../auth.js';

// In-memory rate limiting map for guest creation (max 20 per minute per IP)
const guestCreationLimiter = new Map<string, { count: number; resetAt: number }>();
const GUEST_LIMIT_PER_MINUTE = 20;

function checkGuestRateLimit(ip: string): boolean {
  if (process.env.NODE_ENV === 'test') return true;
  const now = Date.now();
  const entry = guestCreationLimiter.get(ip);
  if (!entry || now > entry.resetAt) {
    guestCreationLimiter.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= GUEST_LIMIT_PER_MINUTE) {
    return false;
  }
  entry.count++;
  return true;
}

export async function authRoutes(fastify: FastifyInstance): Promise<void> {
  const db = getPrismaClient() as any;

  // 1. Instant Guest Workspace & Endpoint Creation (1-Click)
  fastify.post('/api/auth/guest', async (req, reply) => {
    const ip = req.ip || (req.headers['x-forwarded-for'] as string) || '127.0.0.1';
    if (!checkGuestRateLimit(ip)) {
      return reply.status(429).send({
        error: 'Too Many Requests',
        message: 'Guest workspace creation rate limit exceeded. Please wait a minute before creating another session.',
      });
    }

    const parse = guestSessionSchema.safeParse(req.body || {});
    const clientName = parse.success ? parse.data.clientName : 'Web Guest';

    // Create Guest Workspace
    const workspace = await db.workspace.create({
      data: {
        name: 'My Sandbox',
        isGuest: true,
      },
    });

    // Create Initial Endpoint
    const tokenInfo = generateEndpointToken();
    const endpoint = await db.endpoint.create({
      data: {
        workspaceId: workspace.id,
        name: 'Default Inbox',
        description: 'Auto-generated webhook receiver endpoint',
        tokenHash: tokenInfo.tokenHash,
        tokenPrefix: tokenInfo.tokenPrefix,
        responseRule: {
          create: {
            statusCode: 200,
            contentType: 'application/json',
            body: JSON.stringify({ received: true, timestamp: new Date().toISOString() }),
            headersJson: JSON.stringify({ 'x-arcade-response': 'live' }),
            delayMs: 0,
          },
        },
      },
      include: {
        responseRule: true,
      },
    });

    // Create Guest Session
    const guestToken = `gst_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;
    await db.guestSession.create({
      data: {
        tokenHash: hashToken(guestToken),
        clientName,
        workspaceId: workspace.id,
        expiresAt: new Date(Date.now() + 30 * 24 * 3600 * 1000), // 30 days
      },
    });

    const jwtToken = signToken({
      workspaceId: workspace.id,
      isGuest: true,
    });

    return reply.status(201).send({
      token: jwtToken,
      workspace: {
        id: workspace.id,
        name: workspace.name,
        isGuest: true,
      },
      endpoint: {
        id: endpoint.id,
        name: endpoint.name,
        tokenPrefix: endpoint.tokenPrefix,
        fullToken: tokenInfo.fullToken, // Shown once at creation
        url: `${process.env.PUBLIC_INGEST_URL || 'http://localhost:4000/ingest'}/${tokenInfo.fullToken}`,
      },
    });
  });

  // 2. User Registration & Claiming Guest Workspace
  fastify.post('/api/auth/register', async (req, reply) => {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const { email, password, name, claimWorkspaceId } = parsed.data;

    const existing = await db.user.findUnique({ where: { email } });
    if (existing) {
      return reply.status(409).send({ error: 'Conflict', message: 'A user with this email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await db.user.create({
      data: {
        email,
        passwordHash,
        name,
      },
    });

    let workspaceId: string;

    // Claim guest workspace if specified and valid
    if (claimWorkspaceId) {
      const authHeader = req.headers.authorization;
      const callerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;
      const callerPayload = callerToken ? verifyToken(callerToken) : null;

      if (!callerPayload || !callerPayload.isGuest || callerPayload.workspaceId !== claimWorkspaceId) {
        return reply.status(403).send({
          error: 'Forbidden',
          message: 'You must provide a valid session token for the guest workspace you wish to claim.',
        });
      }

      const guestWs = await db.workspace.findUnique({ where: { id: claimWorkspaceId } });
      if (guestWs && guestWs.isGuest) {
        await db.workspace.update({
          where: { id: claimWorkspaceId },
          data: {
            ownerId: user.id,
            isGuest: false,
            name: `${name}'s Workspace`,
          },
        });
        workspaceId = claimWorkspaceId;
      } else {
        return reply.status(404).send({
          error: 'Not Found',
          message: 'Target guest workspace does not exist or is already claimed.',
        });
      }
    } else {
      const newWs = await db.workspace.create({
        data: {
          name: `${name}'s Workspace`,
          ownerId: user.id,
          isGuest: false,
        },
      });
      workspaceId = newWs.id;
    }

    const token = signToken({
      userId: user.id,
      email: user.email,
      workspaceId,
      isGuest: false,
    });

    return reply.status(201).send({
      token,
      user: { id: user.id, email: user.email, name: user.name },
      workspaceId,
    });
  });

  // 3. User Login
  fastify.post('/api/auth/login', async (req, reply) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: 'Validation Error', details: parsed.error.format() });
    }

    const { email, password } = parsed.data;
    const user = await db.user.findUnique({
      where: { email },
      include: { workspaces: true },
    });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return reply.status(401).send({ error: 'Unauthorized', message: 'Invalid email or password' });
    }

    const defaultWs = user.workspaces[0];
    const workspaceId = defaultWs ? defaultWs.id : '';

    const token = signToken({
      userId: user.id,
      email: user.email,
      workspaceId,
      isGuest: false,
    });

    return reply.send({
      token,
      user: { id: user.id, email: user.email, name: user.name },
      workspaceId,
      workspaces: user.workspaces,
    });
  });

  // 4. Current Session Info
  fastify.get('/api/auth/me', { preHandler: [requireAuth] }, async (req, reply) => {
    const userPayload = req.user!;
    if (userPayload.isGuest) {
      const ws = await db.workspace.findUnique({ where: { id: userPayload.workspaceId } });
      return reply.send({
        isGuest: true,
        workspace: ws,
      });
    }

    const user = await db.user.findUnique({
      where: { id: userPayload.userId },
      include: { workspaces: true },
    });

    if (!user) {
      return reply.status(404).send({ error: 'User Not Found' });
    }

    return reply.send({
      isGuest: false,
      user: { id: user.id, email: user.email, name: user.name },
      workspaceId: userPayload.workspaceId,
      workspaces: user.workspaces,
    });
  });
}

