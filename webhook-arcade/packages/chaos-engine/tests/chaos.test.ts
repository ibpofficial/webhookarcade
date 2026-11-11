import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import {
  SeededRNG,
  createDemoTargetServer,
  executeChaosScenario,
  type DemoTargetServer,
} from '../src/index.js';

describe('Chaos Engine & Demo Target', () => {
  let demoTarget: DemoTargetServer;

  beforeAll(async () => {
    demoTarget = await createDemoTargetServer(0);
  });

  afterAll(async () => {
    await demoTarget.close();
  });

  it('generates reproducible sequences with SeededRNG', () => {
    const rng1 = new SeededRNG(424242);
    const rng2 = new SeededRNG(424242);

    const seq1 = [rng1.next(), rng1.next(), rng1.nextInt(1, 100)];
    const seq2 = [rng2.next(), rng2.next(), rng2.nextInt(1, 100)];

    expect(seq1).toEqual(seq2);
  });

  it('runs duplicate chaos scenario against idempotent demo target with passing assertions', async () => {
    demoTarget.resetStats();

    const report = await executeChaosScenario(
      {
        workspaceId: '11111111-1111-1111-1111-111111111111',
        name: 'Idempotency Test',
        destinationUrl: `${demoTarget.url}/idempotent`,
        basePayload: JSON.stringify({ id: 'evt_test_12345', amount: 9900 }),
        baseHeaders: { 'content-type': 'application/json' },
        steps: [
          {
            id: 'dup_step_1',
            type: 'duplicate',
            name: 'Duplicate delivery 3 times',
            enabled: true,
            config: {
              duplicateCount: 3,
              delayMs: 20,
            },
          },
        ],
        assertions: [
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
            description: 'Subsequent deliveries are recognized as duplicate',
            enabled: true,
          },
        ],
      },
      { allowLocalhost: true },
    );

    expect(report.totalDeliveries).toBe(3);
    expect(report.successfulDeliveries).toBe(3);
    expect(report.allPassed).toBe(true);

    const stats = demoTarget.getStats();
    expect(stats.idempotentCount).toBe(3);
    expect(stats.processedIds).toContain('evt_test_12345');
  });
});
