import { SENSITIVE_HEADERS } from '@webhook-arcade/shared';

export interface HeaderSanitizationResult {
  sanitized: Record<string, string>;
  redactedKeys: string[];
}

export interface PayloadParseResult {
  isJson: boolean;
  parsed: unknown | null;
  isMalformed: boolean;
  rawString: string;
  sizeBytes: number;
  error?: string;
}

/**
 * Normalizes and redacts sensitive header values while retaining knowledge of which keys were present
 */
export function redactHeaders(headers: Record<string, string | string[] | undefined>): HeaderSanitizationResult {
  const sanitized: Record<string, string> = {};
  const redactedKeys: string[] = [];

  for (const [rawKey, rawValue] of Object.entries(headers)) {
    if (rawValue === undefined) continue;
    const lowerKey = rawKey.toLowerCase();
    const stringVal = Array.isArray(rawValue) ? rawValue.join(', ') : rawValue;

    if ((SENSITIVE_HEADERS as readonly string[]).includes(lowerKey)) {
      sanitized[lowerKey] = '[REDACTED]';
      redactedKeys.push(lowerKey);
    } else {
      sanitized[lowerKey] = stringVal;
    }
  }

  return { sanitized, redactedKeys };
}

/**
 * Parses raw body bytes into a string and JSON object (if valid) without throwing
 */
export function parseRawPayload(rawBuffer: Buffer, contentType?: string): PayloadParseResult {
  const sizeBytes = rawBuffer.length;
  const rawString = rawBuffer.toString('utf8');

  if (sizeBytes === 0) {
    return {
      isJson: false,
      parsed: null,
      isMalformed: false,
      rawString: '',
      sizeBytes: 0,
    };
  }

  const isExplicitJson = contentType?.toLowerCase().includes('application/json') ?? false;

  try {
    const parsed = JSON.parse(rawString);
    return {
      isJson: true,
      parsed,
      isMalformed: false,
      rawString,
      sizeBytes,
    };
  } catch (err: unknown) {
    return {
      isJson: false,
      parsed: null,
      isMalformed: isExplicitJson, // flagged as malformed if content-type indicated json
      rawString,
      sizeBytes,
      error: err instanceof Error ? err.message : 'Invalid JSON payload',
    };
  }
}

/**
 * Generates an executable copy-as-cURL command string from captured request details
 */
export function generateCurlSnippet(req: {
  method: string;
  url: string;
  headers: Record<string, string>;
  rawBody?: string;
}): string {
  const parts: string[] = [`curl -X ${req.method.toUpperCase()} "${req.url}"`];

  for (const [k, v] of Object.entries(req.headers)) {
    // Escape internal quotes
    const escapedVal = v.replace(/"/g, '\\"');
    parts.push(`  -H "${k}: ${escapedVal}"`);
  }

  if (req.rawBody && req.rawBody.length > 0 && req.method.toUpperCase() !== 'GET') {
    const escapedBody = req.rawBody.replace(/'/g, "'\\''");
    parts.push(`  -d '${escapedBody}'`);
  }

  return parts.join(' \\\n');
}

