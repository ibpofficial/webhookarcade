import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { FastifyInstance } from 'fastify';
import { buildServer } from '../src/server.js';
import { signToken } from '../src/auth.js';

describe('Webhook Arcade API Integration & Access Control', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    process.env.USE_SQLITE = 'true';
    process.env.ALLOW_LOCALHOST_TARGETS = 'true';
    const server = await buildServer();
    app = server.fastify;
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('generates an endpoint in 1 click via guest auth', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Test Runner' },
    });

    expect(res.statusCode).toBe(201);
    const body = res.json();
    expect(body.token).toBeDefined();
    expect(body.workspace.id).toBeDefined();
    expect(body.endpoint.fullToken).toMatch(/^wha_live_/);
    expect(body.endpoint.url).toContain('/ingest/');
  });

  it('receives and captures a real webhook via /ingest/:token', async () => {
    // 1. Create Guest Session & Endpoint
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: {},
    });
    const { token, endpoint } = guestRes.json();

    // 2. Dispatch real webhook payload to /ingest/:token
    const webhookPayload = {
      event: 'invoice.paid',
      amount_paid: 12500,
      customer: 'cust_abc_999',
    };

    const ingestRes = await app.inject({
      method: 'POST',
      url: `/ingest/${endpoint.fullToken}`,
      headers: {
        'content-type': 'application/json',
        'x-test-header': 'arcade-ingest-verify',
        'authorization': 'Bearer super_secret_must_be_redacted',
      },
      payload: webhookPayload,
    });

    expect(ingestRes.statusCode).toBe(200);

    // 3. Inspect captured event via API
    const listRes = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${token}` },
    });

    expect(listRes.statusCode).toBe(200);
    const events = listRes.json().events;
    expect(events.length).toBeGreaterThan(0);

    const firstEvent = events[0];
    expect(firstEvent.method).toBe('POST');
    expect(firstEvent.redactedHeaders).toContain('authorization');

    // 4. Get full event detail
    const detailRes = await app.inject({
      method: 'GET',
      url: `/api/events/${firstEvent.id}`,
      headers: { authorization: `Bearer ${token}` },
    });

    expect(detailRes.statusCode).toBe(200);
    const detail = detailRes.json().event;
    expect(detail.parsedBody).toEqual(webhookPayload);
    expect(detail.headers['authorization']).toBe('[REDACTED]');
    expect(detail.headers['x-test-header']).toBe('arcade-ingest-verify');
  });

  it('enforces strict workspace isolation: Workspace A cannot read Workspace B data', async () => {
    // Workspace A
    const resA = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant A' },
    });
    const { token: tokenA, endpoint: epA } = resA.json();

    // Send event to Endpoint A
    await app.inject({
      method: 'POST',
      url: `/ingest/${epA.fullToken}`,
      payload: { tenant: 'A_secret_data' },
    });

    // Workspace B
    const resB = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant B' },
    });
    const { token: tokenB, workspace: wsB } = resB.json();

    // 1. Tenant B lists events -> Must NOT see Tenant A's event
    const listB = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${tokenB}` },
    });
    const eventsB = listB.json().events;
    expect(eventsB.length).toBe(0);

    // 2. Tenant B attempts to fetch Tenant A's endpoint by ID -> 404
    const getForeignEp = await app.inject({
      method: 'GET',
      url: `/api/endpoints/${epA.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(getForeignEp.statusCode).toBe(404);

    // 3. Tenant B attempts to access Workspace A by ID -> 403 Forbidden
    const getForeignWs = await app.inject({
      method: 'GET',
      url: `/api/workspaces/${resA.json().workspace.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(getForeignWs.statusCode).toBe(403);
  });
});
