import { z } from 'zod';
import { ASSERTION_TYPES, CHAOS_STEP_TYPES } from '../constants.js';

export const chaosStepSchema = z.object({
  id: z.string().default(() => Math.random().toString(36).substring(2, 9)),
  type: z.enum(CHAOS_STEP_TYPES),
  name: z.string().min(1),
  enabled: z.boolean().default(true),
  config: z.object({
    delayMs: z.number().int().min(0).max(30000).optional(),
    duplicateCount: z.number().int().min(1).max(50).optional(),
    failureRate: z.number().min(0).max(1).optional(),
    failureStatusCode: z.number().int().min(400).max(599).optional(),
    burstCount: z.number().int().min(1).max(100).optional(),
    burstConcurrency: z.number().int().min(1).max(20).optional(),
    badSignatureKey: z.string().optional(),
    removeHeaders: z.array(z.string()).optional(),
    corruptPayload: z.boolean().optional(),
    orderGapMs: z.number().int().min(0).max(10000).optional(),
  }).default({}),
});

export const chaosAssertionSchema = z.object({
  id: z.string().default(() => Math.random().toString(36).substring(2, 9)),
  type: z.enum(ASSERTION_TYPES),
  description: z.string(),
  enabled: z.boolean().default(true),
  target: z.string().optional(), // header name or JSONPath
  expected: z.union([z.string(), z.number(), z.boolean()]).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
});

export const createScenarioSchema = z.object({
  workspaceId: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  destinationUrl: z.string().url(),
  basePayload: z.string().default('{}'),
  baseHeaders: z.record(z.string()).default({}),
  steps: z.array(chaosStepSchema).min(1),
  assertions: z.array(chaosAssertionSchema).default([]),
  rngSeed: z.number().optional(),
});

export const runScenarioSchema = z.object({
  destinationUrl: z.string().url().optional(),
  overrideSeed: z.number().optional(),
});

export type ChaosStep = z.infer<typeof chaosStepSchema>;
export type ChaosAssertion = z.infer<typeof chaosAssertionSchema>;
export type CreateScenarioInput = z.infer<typeof createScenarioSchema>;
export type RunScenarioInput = z.infer<typeof runScenarioSchema>;

export interface AssertionEvaluation {
  assertionId: string;
  description: string;
  type: string;
  passed: boolean;
  actual?: unknown;
  expected?: unknown;
  error?: string;
}

export interface DeliveryAttemptSummary {
  attemptId: string;
  stepId?: string;
  stepType?: string;
  sentAt: string;
  statusCode: number;
  latencyMs: number;
  success: boolean;
  errorMessage?: string;
}

export interface ChaosRunReport {
  id: string;
  scenarioId: string;
  startedAt: string;
  finishedAt: string;
  durationMs: number;
  totalDeliveries: number;
  successfulDeliveries: number;
  failedDeliveries: number;
  latencyStats: {
    min: number;
    avg: number;
    p95: number;
    max: number;
  };
  deliveries: DeliveryAttemptSummary[];
  assertions: AssertionEvaluation[];
  allPassed: boolean;
}

