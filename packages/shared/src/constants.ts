export const SENSITIVE_HEADERS = [
  'authorization',
  'cookie',
  'set-cookie',
  'x-api-key',
  'x-auth-token',
  'stripe-signature',
  'x-hub-signature-256',
  'x-shopify-hmac-sha256',
  'secret',
  'proxy-authorization',
] as const;

export const HTTP_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'] as const;

export const DEFAULT_PAGE_LIMIT = 50;
export const MAX_PAGE_LIMIT = 200;

export const CHAOS_STEP_TYPES = [
  'duplicate',
  'delay',
  'random_failure',
  'out_of_order',
  'invalid_payload',
  'bad_signature',
  'missing_headers',
  'burst',
] as const;

export const ASSERTION_TYPES = [
  'status_equals',
  'status_range',
  'latency_below_ms',
  'body_jsonpath_equals',
  'body_jsonpath_exists',
  'header_equals',
  'header_exists',
  'idempotent_processed_once',
] as const;

