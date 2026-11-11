import { z } from 'zod';
import { HTTP_METHODS } from '../constants.js';

export const replayEventSchema = z.object({
  destinationUrl: z.string().url('A valid HTTP or HTTPS destination URL is required'),
  method: z.enum(HTTP_METHODS).optional(),
  overridePayload: z.string().optional(),
  overrideHeaders: z.record(z.string()).optional(),
  keptHeaders: z.array(z.string()).optional(),
});

export type ReplayEventInput = z.infer<typeof replayEventSchema>;

export interface ReplayResponseComparison {
  originalStatus: number;
  replayedStatus: number;
  originalLatencyMs?: number;
  replayedLatencyMs: number;
  statusMatch: boolean;
  bodyDiff?: {
    original: string;
    replayed: string;
    isIdentical: boolean;
  };
  headers: Record<string, string>;
  replayedAt: string;
}
