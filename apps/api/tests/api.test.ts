import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { FastifyInstance } from 'fastify';
import crypto from 'node:crypto';
import { buildServer } from '../src/server.js';
import { computeGithubSignature, computeStripeSignature } from '@webhook-arcade/signatures';

describe('Webhook Arcade API Integration, Security & Core Reliability', () => {
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

  // 1. GUEST AUTH & ENDPOINT CREATION
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
    expect(body.workspace.isGuest).toBe(true);
    expect(body.endpoint.fullToken).toMatch(/^wha_live_/);
    expect(body.endpoint.url).toContain('/ingest/');
  });

  // 2. ENDPOINT TOKEN CONSTANT-TIME VERIFICATION & SPOOFING PREVENTION
  it('strictly validates full endpoint token and rejects tokenPrefix spoofing', async () => {
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: {},
    });
    const { endpoint } = guestRes.json();

    // Ingest with tokenPrefix (e.g. wha_live_abc123) -> Must return 404
    const prefixRes = await app.inject({
      method: 'POST',
      url: `/ingest/${endpoint.tokenPrefix}`,
      payload: { test: 'prefix_attack' },
    });
    expect(prefixRes.statusCode).toBe(404);
    expect(prefixRes.json().error).toBe('Endpoint Not Found');

    // Ingest with fabricated token -> Must return 404
    const fakeRes = await app.inject({
      method: 'POST',
      url: '/ingest/wha_live_00000000000000000000000000000000',
      payload: { test: 'fake_token' },
    });
    expect(fakeRes.statusCode).toBe(404);

    // Ingest with full genuine secret token -> Must return 200
    const genuineRes = await app.inject({
      method: 'POST',
      url: `/ingest/${endpoint.fullToken}`,
      payload: { test: 'genuine_token' },
    });
    expect(genuineRes.statusCode).toBe(200);
  });

  // 3. INGESTION PAYLOAD INTEGRITY: MALFORMED JSON, RAW BYTES, HEADER REDACTION
  it('ingests malformed JSON without crashing and stores raw bytes correctly', async () => {
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: {},
    });
    const { token, endpoint } = guestRes.json();

    const malformedPayload = '{"action": "test", "bad_json": [missing_closing_brace';

    const ingestRes = await app.inject({
      method: 'POST',
      url: `/ingest/${endpoint.fullToken}`,
      headers: {
        'content-type': 'application/json',
        'authorization': 'Bearer confidential_api_token_123',
        'x-api-key': 'secret_key_999',
        'x-normal-header': 'arcade_pass_through',
      },
      payload: malformedPayload,
    });

    expect(ingestRes.statusCode).toBe(200);

    // Verify stored event
    const listRes = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${token}` },
    });

    expect(listRes.statusCode).toBe(200);
    const events = listRes.json().events;
    expect(events.length).toBe(1);
    expect(events[0].isInvalidJson).toBe(true);
    expect(events[0].redactedHeaders).toContain('authorization');
    expect(events[0].redactedHeaders).toContain('x-api-key');

    // Inspect full detail
    const detailRes = await app.inject({
      method: 'GET',
      url: `/api/events/${events[0].id}`,
      headers: { authorization: `Bearer ${token}` },
    });

    expect(detailRes.statusCode).toBe(200);
    const detail = detailRes.json().event;
    expect(detail.isInvalidJson).toBe(true);
    expect(detail.parsedBody).toBeNull();
    expect(detail.rawBody).toBe(malformedPayload);
    expect(detail.headers['authorization']).toBe('[REDACTED]');
    expect(detail.headers['x-api-key']).toBe('[REDACTED]');
    expect(detail.headers['x-normal-header']).toBe('arcade_pass_through');
  });

  // 4. REAL SIGNATURE VERIFICATION ROUTE
  it('performs real cryptographic signature verification against raw stored bytes', async () => {
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: {},
    });
    const { token, endpoint } = guestRes.json();

    const secret = 'whsec_test_secret_key_888';
    const payloadObj = { event: 'payment.succeeded', amount: 9900, currency: 'usd' };
    const rawBuffer = Buffer.from(JSON.stringify(payloadObj), 'utf8');

    // GitHub SHA256 Signature
    const githubSig = computeGithubSignature(rawBuffer, secret);

    const ingestRes = await app.inject({
      method: 'POST',
      url: `/ingest/${endpoint.fullToken}`,
      headers: {
        'content-type': 'application/json',
        'x-hub-signature-256': githubSig,
      },
      payload: rawBuffer,
    });
    expect(ingestRes.statusCode).toBe(200);

    const listRes = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${token}` },
    });
    const eventId = listRes.json().events[0].id;

    // Test 4A: Valid signature verification
    const verifyValid = await app.inject({
      method: 'POST',
      url: `/api/events/${eventId}/verify-signature`,
      headers: { authorization: `Bearer ${token}` },
      payload: {
        scheme: 'github',
        secret,
      },
    });

    expect(verifyValid.statusCode).toBe(200);
    const validBody = verifyValid.json();
    if (!validBody.valid) {
      console.log('[DEBUG SIGNATURE]', validBody);
    }
    expect(validBody.valid).toBe(true);
    expect(validBody.scheme).toBe('github');
    expect(validBody.computedSignature).toBe(githubSig);
    expect(validBody.receivedSignature).toBe(githubSig);

    // Test 4B: Invalid secret verification
    const verifyInvalid = await app.inject({
      method: 'POST',
      url: `/api/events/${eventId}/verify-signature`,
      headers: { authorization: `Bearer ${token}` },
      payload: {
        scheme: 'github',
        secret: 'wrong_secret_value',
      },
    });

    expect(verifyInvalid.statusCode).toBe(200);
    const invalidBody = verifyInvalid.json();
    expect(invalidBody.valid).toBe(false);

    // Test 4C: Stripe signature verification
    const stripeSecret = 'whsec_stripe_live_555';
    const stripeTimestamp = Math.floor(Date.now() / 1000);
    const stripeSig = computeStripeSignature(rawBuffer, stripeSecret, stripeTimestamp);

    const ingestStripe = await app.inject({
      method: 'POST',
      url: `/ingest/${endpoint.fullToken}`,
      headers: {
        'content-type': 'application/json',
        'stripe-signature': stripeSig,
      },
      payload: rawBuffer,
    });
    expect(ingestStripe.statusCode).toBe(200);

    const listRes2 = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${token}` },
    });
    const stripeEventId = listRes2.json().events[0].id; // newest first

    const verifyStripe = await app.inject({
      method: 'POST',
      url: `/api/events/${stripeEventId}/verify-signature`,
      headers: { authorization: `Bearer ${token}` },
      payload: {
        scheme: 'stripe',
        secret: stripeSecret,
      },
    });

    expect(verifyStripe.statusCode).toBe(200);
    expect(verifyStripe.json().valid).toBe(true);
  });

  // 5. PURGE ENDPOINT EVENTS
  it('purges all events for an endpoint via DELETE /api/endpoints/:id/events', async () => {
    const guestRes = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: {},
    });
    const { token, endpoint } = guestRes.json();

    // Ingest 3 events
    for (let i = 0; i < 3; i++) {
      await app.inject({
        method: 'POST',
        url: `/ingest/${endpoint.fullToken}`,
        payload: { eventIndex: i },
      });
    }

    const beforePurge = await app.inject({
      method: 'GET',
      url: `/api/events?endpointId=${endpoint.id}`,
      headers: { authorization: `Bearer ${token}` },
    });
    expect(beforePurge.json().events.length).toBe(3);

    // Purge events
    const purgeRes = await app.inject({
      method: 'DELETE',
      url: `/api/endpoints/${endpoint.id}/events`,
      headers: { authorization: `Bearer ${token}` },
    });

    expect(purgeRes.statusCode).toBe(200);
    expect(purgeRes.json().success).toBe(true);
    expect(purgeRes.json().deleted).toBe(3);

    // Confirm empty
    const afterPurge = await app.inject({
      method: 'GET',
      url: `/api/events?endpointId=${endpoint.id}`,
      headers: { authorization: `Bearer ${token}` },
    });
    expect(afterPurge.json().events.length).toBe(0);
  });

  // 6. STRICT WORKSPACE ISOLATION ON EVERY ROUTE
  it('enforces strict cross-tenant workspace isolation across every API route', async () => {
    // Tenant A
    const resA = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant A' },
    });
    const { token: tokenA, endpoint: epA, workspace: wsA } = resA.json();

    // Ingest event for Tenant A
    await app.inject({
      method: 'POST',
      url: `/ingest/${epA.fullToken}`,
      payload: { tenant: 'A_secret_data' },
    });

    const eventsListA = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${tokenA}` },
    });
    const eventA = eventsListA.json().events[0];
    expect(eventA).toBeDefined();

    // Tenant B
    const resB = await app.inject({
      method: 'POST',
      url: '/api/auth/guest',
      payload: { clientName: 'Tenant B' },
    });
    const { token: tokenB, endpoint: epB, workspace: wsB } = resB.json();

    // 1. GET /api/events -> Tenant B sees 0 events
    const listB = await app.inject({
      method: 'GET',
      url: '/api/events',
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(listB.json().events.length).toBe(0);

    // 2. GET /api/events/:id -> 404 for foreign event
    const getForeignEvent = await app.inject({
      method: 'GET',
      url: `/api/events/${eventA.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(getForeignEvent.statusCode).toBe(404);

    // 3. POST /api/events/:id/verify-signature -> 404 for foreign event
    const verifyForeignEvent = await app.inject({
      method: 'POST',
      url: `/api/events/${eventA.id}/verify-signature`,
      headers: { authorization: `Bearer ${tokenB}` },
      payload: { secret: 'any' },
    });
    expect(verifyForeignEvent.statusCode).toBe(404);

    // 4. GET /api/endpoints -> Tenant B only sees Tenant B endpoint
    const listEndpointsB = await app.inject({
      method: 'GET',
      url: '/api/endpoints',
      headers: { authorization: `Bearer ${tokenB}` },
    });
    const endpointIds = listEndpointsB.json().endpoints.map((e: any) => e.id);
    expect(endpointIds).toContain(epB.id);
    expect(endpointIds).not.toContain(epA.id);

    // 5. GET /api/endpoints/:id -> 404 for foreign endpoint
    const getForeignEp = await app.inject({
      method: 'GET',
      url: `/api/endpoints/${epA.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(getForeignEp.statusCode).toBe(404);

    // 6. PATCH /api/endpoints/:id -> 404 for foreign endpoint
    const patchForeignEp = await app.inject({
      method: 'PATCH',
      url: `/api/endpoints/${epA.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
      payload: { name: 'Hacked' },
    });
    expect(patchForeignEp.statusCode).toBe(404);

    // 7. DELETE /api/endpoints/:id/events -> 404 for foreign endpoint
    const deleteForeignEpEvents = await app.inject({
      method: 'DELETE',
      url: `/api/endpoints/${epA.id}/events`,
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(deleteForeignEpEvents.statusCode).toBe(404);

    // 8. GET /api/workspaces/:id -> 403 for foreign workspace
    const getForeignWs = await app.inject({
      method: 'GET',
      url: `/api/workspaces/${wsA.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(getForeignWs.statusCode).toBe(403);

    // 9. PATCH /api/workspaces/:id -> 403 for foreign workspace
    const patchForeignWs = await app.inject({
      method: 'PATCH',
      url: `/api/workspaces/${wsA.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
      payload: { name: 'Hijacked' },
    });
    expect(patchForeignWs.statusCode).toBe(403);

    // 10. GET /api/scenarios -> empty for Tenant B
    const listScenariosB = await app.inject({
      method: 'GET',
      url: '/api/scenarios',
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(listScenariosB.statusCode).toBe(200);
    expect(listScenariosB.json().scenarios.length).toBe(0);

    // 11. Tenant A creates a scenario, Tenant B attempts GET /api/scenarios/:id -> 404
    const createScenarioA = await app.inject({
      method: 'POST',
      url: '/api/scenarios',
      headers: { authorization: `Bearer ${tokenA}` },
      payload: {
        name: 'Tenant A Chaos Flow',
        destinationUrl: 'http://localhost:9999/webhook',
        steps: [
          {
            type: 'delay',
            name: 'Inject Delay',
            config: { delayMs: 50 },
          },
        ],
        assertions: [],
      },
    });
    if (createScenarioA.statusCode !== 201) {
      console.log('[DEBUG SCENARIO ERROR]', createScenarioA.json());
    }
    expect(createScenarioA.statusCode).toBe(201);
    const scenarioA = createScenarioA.json().scenario;

    const foreignScenarioGet = await app.inject({
      method: 'GET',
      url: `/api/scenarios/${scenarioA.id}`,
      headers: { authorization: `Bearer ${tokenB}` },
    });
    expect(foreignScenarioGet.statusCode).toBe(404);

    // 12. Tenant B attempts POST /api/scenarios/:id/run -> 404
    const foreignScenarioRun = await app.inject({
      method: 'POST',
      url: `/api/scenarios/${scenarioA.id}/run`,
      headers: { authorization: `Bearer ${tokenB}` },
      payload: {},
    });
    expect(foreignScenarioRun.statusCode).toBe(404);
  });
});
