import { PrismaClient } from '@prisma/client';
import { generateEndpointToken } from './crypto.js';

export async function seedDemoData(prisma: PrismaClient): Promise<void> {
  console.log('[Seed] Seeding realistic demo data (clearly labeled as Demo)...');

  // 1. Create Demo Workspace
  const workspace = await prisma.workspace.upsert({
    where: { id: '00000000-0000-0000-0000-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000001',
      name: 'Demo Playground Workspace',
      isGuest: false,
    },
  });

  // 2. Create Demo Endpoint
  const token = generateEndpointToken();
  const endpoint = await prisma.endpoint.upsert({
    where: { id: '00000000-0000-0000-0000-000000000002' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000002',
      workspaceId: workspace.id,
      name: 'Demo Stripe Ingestion Endpoint',
      description: 'Preconfigured sample endpoint demonstrating live capture and inspection',
      tokenHash: token.tokenHash,
      tokenPrefix: token.tokenPrefix,
      responseRule: {
        create: {
          statusCode: 200,
          contentType: 'application/json',
          body: JSON.stringify({ received: true, demo: true, timestamp: new Date().toISOString() }),
          headersJson: JSON.stringify({ 'x-arcade-demo': 'true' }),
          delayMs: 25,
        },
      },
    },
  });

  // 3. Create Sample Events
  const sampleEvent1 = {
    id: 'evt_demo_stripe_succeeded_01',
    object: 'event',
    type: 'payment_intent.succeeded',
    data: {
      object: {
        id: 'pi_demo_9823412',
        amount: 4999,
        currency: 'usd',
        status: 'succeeded',
        customer: 'cus_demo_user',
      },
    },
  };

  const sampleBuffer1 = Buffer.from(JSON.stringify(sampleEvent1, null, 2));

  await prisma.event.upsert({
    where: { id: '00000000-0000-0000-0000-000000000003' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000003',
      endpointId: endpoint.id,
      method: 'POST',
      path: `/ingest/${token.tokenPrefix}`,
      headersJson: JSON.stringify({
        'content-type': 'application/json',
        'user-agent': 'Stripe/1.0 (+https://stripe.com/docs/webhooks)',
        'stripe-signature': '[REDACTED]',
        'x-arcade-demo': 'true',
      }),
      queryJson: JSON.stringify({}),
      rawBody: sampleBuffer1,
      parsedBody: sampleEvent1,
      statusCode: 200,
      ip: '54.187.174.169',
      sizeBytes: sampleBuffer1.length,
      isInvalidJson: false,
      redactedHeaders: JSON.stringify(['stripe-signature']),
      receivedAt: new Date(Date.now() - 3600000), // 1 hour ago
    },
  });

  // 4. Create Demo Chaos Scenario
  await prisma.scenario.upsert({
    where: { id: '00000000-0000-0000-0000-000000000004' },
    update: {},
    create: {
      id: '00000000-0000-0000-0000-000000000004',
      workspaceId: workspace.id,
      name: 'Stripe Payment Idempotency & Fault Suite',
      description: 'Tests duplicate deliveries and delayed arrivals against receiving servers',
      destinationUrl: 'http://127.0.0.1:4000/demo/idempotent',
      basePayload: JSON.stringify(sampleEvent1, null, 2),
      baseHeadersJson: JSON.stringify({ 'content-type': 'application/json' }),
      stepsJson: JSON.stringify([
        {
          id: 'step_dup',
          type: 'duplicate',
          name: 'Duplicate delivery (3 identical events)',
          enabled: true,
          config: { duplicateCount: 3, delayMs: 50 },
        },
        {
          id: 'step_delay',
          type: 'delay',
          name: 'Simulate network latency jitter',
          enabled: true,
          config: { delayMs: 120 },
        },
      ]),
      assertionsJson: JSON.stringify([
        {
          id: 'assert_status_200',
          type: 'status_equals',
          description: 'All deliveries must return HTTP 200',
          enabled: true,
          expected: 200,
        },
        {
          id: 'assert_idempotent',
          type: 'idempotent_processed_once',
          description: 'Receiver processes exactly once and acknowledges duplicates safely',
          enabled: true,
        },
      ]),
    },
  });

  console.log('[Seed] Demo data successfully seeded.');
}

if (process.env.RUN_SEED_DIRECTLY) {
  const prisma = new PrismaClient();
  seedDemoData(prisma)
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

