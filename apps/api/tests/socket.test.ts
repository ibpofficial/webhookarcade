import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { FastifyInstance } from 'fastify';
import type { AddressInfo } from 'node:net';
import { Server as SocketIOServer } from 'socket.io';
import { io as ioc, Socket } from 'socket.io-client';
import { buildServer } from '../src/server.js';

describe('Socket.IO Authentication & Authorization Suite', () => {
  let app: FastifyInstance;
  let ioServer: SocketIOServer;
  let serverUrl: string;

  beforeAll(async () => {
    process.env.USE_SQLITE = 'true';
    process.env.ALLOW_LOCALHOST_TARGETS = 'true';
    const server = await buildServer();
    app = server.fastify;
    ioServer = server.io;
    await app.listen({ port: 0, host: '127.0.0.1' });
    const address = app.server.address() as AddressInfo;
    serverUrl = `http://127.0.0.1:${address.port}`;
  });

  afterAll(async () => {
    ioServer.close();
    await app.close();
  });

  it('rejects socket connection when handshake token is missing', async () => {
    await new Promise<void>((resolve, reject) => {
      const socket = ioc(serverUrl, {
        transports: ['websocket'],
        reconnection: false,
      });

      socket.on('connect', () => {
        socket.disconnect();
        reject(new Error('Socket should have been rejected without token'));
      });

      socket.on('connect_error', (err) => {
        expect(err.message).toMatch(/Missing or invalid authentication token/);
        socket.disconnect();
        resolve();
      });
    });
  });

  it('rejects socket connection when handshake token is invalid or expired', async () => {
    await new Promise<void>((resolve, reject) => {
      const socket = ioc(serverUrl, {
        transports: ['websocket'],
        reconnection: false,
        auth: { token: 'invalid_malformed_jwt_token' },
      });

      socket.on('connect', () => {
        socket.disconnect();
        reject(new Error('Socket should have been rejected with invalid token'));
      });

      socket.on('connect_error', (err) => {
        expect(err.message).toMatch(/Invalid or expired session token/);
        socket.disconnect();
        resolve();
      });
    });
  });

  it('authenticates valid token, auto-assigns workspace room, and receives live events', async () => {
    // 1. Create a guest session
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Socket Test Runner' },
    });
    expect(guestRes.statusCode).toBe(201);
    const { token, endpoint } = guestRes.json();

    // 2. Connect socket with valid token
    const socket: Socket = await new Promise((resolve, reject) => {
      const s = ioc(serverUrl, {
        transports: ['websocket'],
        reconnection: false,
        auth: { token },
      });

      s.on('connect', () => resolve(s));
      s.on('connect_error', (err) => reject(err));
    });

    expect(socket.connected).toBe(true);

    try {
      // 3. Verify event reception over socket room ('event:captured')
      const eventReceivedPromise = new Promise<any>((resolve) => {
        socket.on('event:captured', (payload) => {
          resolve(payload);
        });
      });

      // 4. Ingest a webhook to this endpoint
      const ingestRes = await app.inject({
        method: 'POST',
        url: `/ingest/${endpoint.fullToken}`,
        headers: { 'content-type': 'application/json' },
        payload: { action: 'socket_live_test', id: 42 },
      });
      expect(ingestRes.statusCode).toBe(200);

      const receivedEvent = await eventReceivedPromise;
      expect(receivedEvent).toBeDefined();
      expect(receivedEvent.endpointId).toBe(endpoint.id);
      expect(receivedEvent.method).toBe('POST');
    } finally {
      socket.disconnect();
    }
  });

  it('enforces room authorization: rejects foreign endpoint room joins', async () => {
    // Tenant A
    const resA = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant A Socket' },
    });
    const epA = resA.json().endpoint;

    // Tenant B
    const resB = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant B Socket' },
    });
    const { token: tokenB, endpoint: epB } = resB.json();

    // Tenant B connects socket
    const socketB: Socket = await new Promise((resolve, reject) => {
      const s = ioc(serverUrl, {
        transports: ['websocket'],
        reconnection: false,
        auth: { token: tokenB },
      });
      s.on('connect', () => resolve(s));
      s.on('connect_error', (err) => reject(err));
    });

    try {
      // Tenant B tries to join Tenant A's endpoint room -> rejects with error:forbidden
      const errorPromise = new Promise<{ message: string }>((resolve) => {
        socketB.on('error:forbidden', (data) => resolve(data));
      });

      socketB.emit('join:endpoint', epA.id);

      const err = await errorPromise;
      expect(err.message).toBe('Unauthorized endpoint room access');

      // Tenant B joins own endpoint room -> should succeed with joined:endpoint
      const joinSuccessPromise = new Promise<{ endpointId: string }>((resolve) => {
        socketB.on('joined:endpoint', (data) => resolve(data));
      });

      socketB.emit('join:endpoint', epB.id);
      const joined = await joinSuccessPromise;
      expect(joined.endpointId).toBe(epB.id);
    } finally {
      socketB.disconnect();
    }
  });
});
