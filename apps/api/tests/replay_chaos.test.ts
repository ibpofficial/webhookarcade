import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { FastifyInstance } from 'fastify';
import type { AddressInfo } from 'node:net';
import http from 'node:http';
import { buildServer } from '../src/server.js';

describe('Replay Engine & Chaos Lab Integration Suite', () => {
  let app: FastifyInstance;
  let targetServer: http.Server;
  let targetUrl: string;
  const receivedRequests: any[] = [];

  beforeAll(async () => {
    process.env.USE_SQLITE = 'true';
    process.env.ALLOW_LOCALHOST_TARGETS = 'true';

    // Start a dummy receiver server to act as a real webhook target
    targetServer = http.createServer((req, res) => {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        receivedRequests.push({
          method: req.method,
          url: req.url,
          headers: req.headers,
          body,
        });
        res.setHeader('content-type', 'application/json');
        res.setHeader('x-custom-ack', 'arcade-target-ack');
        res.writeHead(200);
        res.end(JSON.stringify({ status: 'received_ok', timestamp: Date.now() }));
      });
    });

    await new Promise<void>((resolve) => {
      targetServer.listen(0, '127.0.0.1', () => resolve());
    });

    const targetPort = (targetServer.address() as AddressInfo).port;
    targetUrl = `http://127.0.0.1:${targetPort}/webhook-target`;

    const server = await buildServer();
    app = server.fastify;
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
    await new Promise<void>((resolve) => targetServer.close(() => resolve()));
  });

  it('replays an event to a real destination, captures response comparison, and records delivery', async () => {
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: {},
    });
    const { token, endpoint } = guestRes.json();

    // 1. Ingest original event
    const originalPayload = { customer: 'cust_replay_001', amount: 5000 };
    await app.inject({
      method: 'POST',
      url: `/ingest/${endpoint.fullToken}`,
      payload: originalPayload,
    });

    const listRes = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${token}` },
    });
    const event = listRes.json().events[0];
    expect(event).toBeDefined();

    // 2. Dispatch Replay
    const replayRes = await app.inject({
      method: 'POST',
      url: `/api/events/${event.id}/replay`,
      headers: { authorization: `Bearer ${token}` },
      payload: {
        destinationUrl: targetUrl,
        overrideHeaders: { 'x-replay-source': 'automated-suite' },
      },
    });

    if (replayRes.statusCode !== 200) {
      console.log('[DEBUG REPLAY ERROR]', replayRes.json());
    }
    expect(replayRes.statusCode).toBe(200);
    const replayBody = replayRes.json();
    expect(replayBody.success).toBe(true);
    expect(replayBody.delivery).toBeDefined();
    expect(replayBody.delivery.statusCode).toBe(200);
    expect(replayBody.delivery.destinationUrl).toBe(targetUrl);
    expect(replayBody.delivery.latencyMs).toBeGreaterThanOrEqual(0);

    // 3. Comparison diff verification
    expect(replayBody.comparison).toBeDefined();
    expect(replayBody.comparison.bodyDiff).toBeDefined();
    expect(replayBody.comparison.originalStatus).toBe(200);
    expect(replayBody.comparison.replayedStatus).toBe(200);
    expect(replayBody.comparison.statusMatch).toBe(true);
    expect(replayBody.comparison.bodyDiff.replayed).toContain('received_ok');

    // 4. Verify target received the payload
    expect(receivedRequests.length).toBeGreaterThan(0);
    const lastTargetReq = receivedRequests[receivedRequests.length - 1];
    expect(lastTargetReq.headers['x-replay-source']).toBe('automated-suite');
    expect(JSON.parse(lastTargetReq.body)).toEqual(originalPayload);
  });

  it('prevents cross-workspace replay execution', async () => {
    // Tenant A
    const resA = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant A' },
    });
    const { token: tokenA, endpoint: epA } = resA.json();

    await app.inject({
      method: 'POST',
      url: `/ingest/${epA.fullToken}`,
      payload: { private: 'Tenant A data' },
    });

    const listA = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${tokenA}` },
    });
    const eventA = listA.json().events[0];

    // Tenant B
    const resB = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant B' },
    });
    const { token: tokenB } = resB.json();

    // Tenant B attempts to replay Tenant A's event -> 404
    const replayForeign = await app.inject({
      method: 'POST',
      url: `/api/events/${eventA.id}/replay`,
      headers: { authorization: `Bearer ${tokenB}` },
      payload: { destinationUrl: targetUrl },
    });

    expect(replayForeign.statusCode).toBe(404);
  });

  it('executes a chaos scenario and evaluates assertions against target server', async () => {
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: {},
    });
    const { token, workspace } = guestRes.json();

    // 1. Create a chaos scenario
    const createRes = await app.inject({
      method: 'POST',
      url: '/api/scenarios',
      headers: { authorization: `Bearer ${token}` },
      payload: {
        name: 'Chaos Test Suite',
        destinationUrl: targetUrl,
        basePayload: JSON.stringify({ item: 'widget', qty: 2 }),
        baseHeaders: { 'x-arcade-chaos': 'true' },
        steps: [
          {
            type: 'duplicate',
            name: 'Double Delivery',
            config: { duplicateCount: 2 },
          },
          {
            type: 'delay',
            name: 'Latency Burst',
            config: { delayMs: 20 },
          },
        ],
        assertions: [
          {
            type: 'status_equals',
            description: 'Target accepts all deliveries with 200 OK',
            expected: 200,
          },
        ],
      },
    });

    expect(createRes.statusCode).toBe(201);
    const scenario = createRes.json().scenario;

    // 2. Run the chaos scenario
    const runRes = await app.inject({
      method: 'POST',
      url: `/api/scenarios/${scenario.id}/run`,
      headers: { authorization: `Bearer ${token}` },
      payload: {},
    });

    expect(runRes.statusCode).toBe(200);
    const runResult = runRes.json();
    expect(runResult.scenarioId).toBe(scenario.id);
    expect(runResult.report.totalDeliveries).toBeGreaterThanOrEqual(2);
    expect(runResult.report.allPassed).toBe(true);

    // 3. Inspect generated Test Run report
    const reportRes = await app.inject({
      method: 'GET',
      url: `/api/test-runs/${runResult.id}`,
      headers: { authorization: `Bearer ${token}` },
    });

    expect(reportRes.statusCode).toBe(200);
    const report = reportRes.json().testRun;
    expect(report.id).toBe(runResult.id);
    expect(report.workspaceId).toBe(workspace.id);
    expect(report.allPassed).toBe(true);
  });
});
