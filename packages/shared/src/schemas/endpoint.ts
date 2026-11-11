import { z } from 'zod';

export const responseRuleSchema = z.object({
  statusCode: z.number().int().min(100).max(599).default(200),
  contentType: z.string().default('application/json'),
  body: z.string().default('{"received": true}'),
  headers: z.record(z.string()).default({}),
  delayMs: z.number().int().min(0).max(30000).default(0),
  rateLimitPerMinute: z.number().int().min(0).max(10000).default(600),
});

export const createEndpointSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  workspaceId: z.string().uuid(),
  responseRule: responseRuleSchema.optional(),
  signingSecret: z.string().min(8).max(256).optional(),
});

export const updateEndpointSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  responseRule: responseRuleSchema.optional(),
  signingSecret: z.string().min(8).max(256).optional(),
  isPaused: z.boolean().optional(),
});

export type ResponseRule = z.infer<typeof responseRuleSchema>;
export type CreateEndpointInput = z.infer<typeof createEndpointSchema>;
export type UpdateEndpointInput = z.infer<typeof updateEndpointSchema>;

