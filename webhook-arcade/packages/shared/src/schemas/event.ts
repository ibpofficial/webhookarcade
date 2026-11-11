import { z } from 'zod';
import { HTTP_METHODS } from '../constants.js';

export const listEventsQuerySchema = z.object({
  endpointId: z.string().uuid().optional(),
  workspaceId: z.string().uuid().optional(),
  method: z.enum(HTTP_METHODS).optional(),
  search: z.string().optional(),
  status: z.coerce.number().int().optional(),
  limit: z.coerce.number().int().min(1).max(200).default(50),
  cursor: z.string().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

export const sendManualEventSchema = z.object({
  endpointId: z.string().uuid().optional(),
  destinationUrl: z.string().url(),
  method: z.enum(HTTP_METHODS).default('POST'),
  headers: z.record(z.string()).default({}),
  queryParams: z.record(z.string()).default({}),
  payload: z.string().default('{}'),
});

export type ListEventsQuery = z.infer<typeof listEventsQuerySchema>;
export type SendManualEventInput = z.infer<typeof sendManualEventSchema>;

export interface CapturedEventSummary {
  id: string;
  endpointId: string;
  method: string;
  path: string;
  statusCode: number;
  ip: string;
  sizeBytes: number;
  receivedAt: string;
  isInvalidJson: boolean;
  redactedHeaders: string[];
}

export interface CapturedEventDetail extends CapturedEventSummary {
  headers: Record<string, string>;
  queryParams: Record<string, string>;
  rawBody: string;
  parsedBody: unknown | null;
  replaysCount: number;
}

