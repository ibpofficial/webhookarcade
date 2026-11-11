import { z } from 'zod';
import { HTTP_METHODS } from '../constants.js';

export const eventTemplateSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  category: z.enum(['payment', 'order', 'git', 'auth', 'custom']),
  provider: z.string(),
  description: z.string(),
  method: z.enum(HTTP_METHODS).default('POST'),
  defaultHeaders: z.record(z.string()),
  payload: z.string(),
});

export type EventTemplate = z.infer<typeof eventTemplateSchema>;

