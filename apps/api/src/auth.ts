import type { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'arcade_default_dev_jwt_secret_min_32_characters_long';

export interface AuthUser {
  userId?: string;
  workspaceId: string;
  isGuest: boolean;
  email?: string;
}

declare module 'fastify' {
  interface FastifyRequest {
    user?: AuthUser;
    workspaceId?: string;
  }
}

export function signToken(payload: AuthUser): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
}

export function verifyToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
  } catch {
    return null;
  }
}

export async function requireAuth(req: FastifyRequest, reply: FastifyReply): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    reply.status(401).send({ error: 'Unauthorized', message: 'Missing or malformed Authorization header' });
    return;
  }

  const token = authHeader.substring(7);
  const user = verifyToken(token);
  if (!user) {
    reply.status(401).send({ error: 'Unauthorized', message: 'Invalid or expired session token' });
    return;
  }

  req.user = user;
  req.workspaceId = user.workspaceId;
}
