# Webhook Arcade - API Specification

All Management API routes return JSON and require Bearer token authentication (unless explicitly noted as public). Interactive OpenAPI documentation is served at `/docs`.

Base URL: `http://localhost:4000`

---

## 1. Authentication & Onboarding

### `POST /api/auth/guest`
Creates an ephemeral guest workspace and pre-configured endpoint in one click.
- **Access**: Public (Rate-limited to 20 requests per minute per IP)
- **Response**: `201 Created`
```json
{
  "token": "eyJhbGciOi...",
  "workspace": { "id": "uuid", "name": "My Sandbox", "isGuest": true },
  "endpoint": {
    "id": "uuid",
    "name": "Default Inbox",
    "tokenPrefix": "wha_live_7a3b4c",
    "fullToken": "wha_live_...",
    "url": "http://localhost:4000/ingest/wha_live_..."
  }
}
```

### `POST /api/auth/register`
Registers a new user account and optionally claims an existing guest workspace.
- **Access**: Public
- **Security Check**: To claim `claimWorkspaceId`, the caller must pass the guest JWT in the `Authorization: Bearer <guest_token>` header. Guest workspace claims without proof of guest token ownership are strictly rejected with 403 Forbidden.
- **Body**: `{ "email": "...", "password": "...", "name": "...", "claimWorkspaceId": "uuid" }`

### `POST /api/auth/login`
Authenticates an existing user and returns a signed JWT.
- **Access**: Public
- **Body**: `{ "email": "...", "password": "..." }`

---

## 2. Ingestion Receiver (Public)

### `ANY /ingest/:endpointToken`
Ingests webhooks from external providers.
- **Methods**: `POST`, `GET`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`
- **Content-Types**: `application/json`, `application/x-www-form-urlencoded`, `text/plain`, `application/octet-stream`
- **Security & Integrity**:
  - Requires the complete, secret ingestion token matching `tokenHash` stored in the database.
  - Ingestion token verification uses constant-time `crypto.timingSafeEqual` comparison.
  - Partial prefix tokens (`tokenPrefix`) are strictly rejected with `404 Endpoint Not Found`.
  - Captures raw unmodified request body bytes without re-serializing.
  - Sanitizes sensitive authentication headers (`authorization`, `cookie`, `x-api-key`, `x-auth-token`, `secret`, `proxy-authorization`) while retaining non-sensitive and signature headers for verification.
  - Emits real-time event to authorized workspace and endpoint rooms over Socket.IO (`event:captured`).
  - Applies endpoint's Response Simulator rule (custom status, custom body, headers, and delay).
  - Enforces per-endpoint rate limiting (`rule.rateLimitPerMin`, default: 600 req/min).

---

## 3. Endpoints & Response Simulator

### `GET /api/endpoints`
Lists all endpoints in the authenticated workspace.

### `POST /api/endpoints`
Creates a new endpoint in the authenticated workspace.
- **Body**: `{ "name": "...", "description": "...", "responseRule": { "statusCode": 200, "delayMs": 50 } }`
- **Response**: `201 Created` with full secret token displayed once:
```json
{
  "endpoint": {
    "id": "uuid",
    "name": "Production Stripe Webhooks",
    "tokenPrefix": "wha_live_AbCdEf",
    "fullToken": "wha_live_AbCdEf123456789...",
    "url": "http://localhost:4000/ingest/wha_live_AbCdEf123456789..."
  }
}
```

### `PUT /api/endpoints/:id/rules`
Updates Response Simulator rules for the endpoint.
- **Body**:
```json
{
  "statusCode": 200,
  "contentType": "application/json",
  "body": "{\"received\": true}",
  "headers": { "x-arcade-simulated": "true" },
  "delayMs": 0,
  "rateLimitPerMinute": 600
}
```

### `DELETE /api/endpoints/:id/events`
Purges all historical captured webhook events for the specified endpoint.
- **Access**: Authenticated (Workspace Owner / Tenant)
- **Response**: `200 OK`
```json
{
  "success": true,
  "count": 42,
  "deleted": 42,
  "message": "Purged 42 events"
}
```

---

## 4. Webhook Events & Replays

### `GET /api/events`
Lists captured events with optional filtering.
- **Query Params**:
  - `endpointId` (UUID)
  - `method` (`POST`, `GET`, etc.)
  - `status` (`200`, `500`, etc.)
  - `search` (text search across path, headers, and payload)
  - `limit` (default: 50, max: 200)
  - `cursor` (pagination cursor)

### `GET /api/events/:id`
Retrieves full details of a captured event, including unmodified raw body bytes, parsed JSON, redacted headers list, and replay attempt logs.

### `POST /api/events/:id/verify-signature`
Performs real cryptographic signature verification against the stored raw payload bytes.
- **Access**: Authenticated (Workspace Owner / Tenant)
- **Body**:
```json
{
  "scheme": "github",
  "secret": "your_webhook_secret_key",
  "signatureHeader": "sha256=optional_custom_header_override"
}
```
- **Supported Schemes**:
  - `github`: Computes `sha256=${hmacSha256(secret, rawBytes)}` and compares to `x-hub-signature-256`.
  - `stripe`: Parses `t=...,v1=...` header, verifies timestamp tolerance, and compares `v1` HMAC against `${timestamp}.${rawBytes}`.
  - `generic-sha256`: Computes hex HMAC-SHA256.
  - `generic-sha1`: Computes hex HMAC-SHA1.
- **Response**: `200 OK`
```json
{
  "valid": true,
  "scheme": "github",
  "computedSignature": "sha256=...",
  "receivedSignature": "sha256=...",
  "error": null
}
```

### `POST /api/events/:id/replay`
Dispatches an outbound replay request with SSRF validation, captures target response, records delivery, and generates side-by-side comparison.
- **Body**:
```json
{
  "destinationUrl": "http://127.0.0.1:4000/demo/idempotent",
  "overridePayload": "{ \"replayed\": true }",
  "overrideHeaders": { "x-custom-test": "1" }
}
```
- **Response**: `200 OK`
```json
{
  "success": true,
  "deliveryId": "uuid",
  "delivery": {
    "id": "uuid",
    "destinationUrl": "http://127.0.0.1:4000/demo/idempotent",
    "method": "POST",
    "statusCode": 200,
    "latencyMs": 14,
    "success": true
  },
  "comparison": {
    "originalStatus": 200,
    "replayedStatus": 200,
    "statusMatch": true,
    "replayedLatencyMs": 14,
    "bodyDiff": {
      "original": "...",
      "replayed": "...",
      "isIdentical": false
    },
    "headers": { "content-type": "application/json" },
    "replayedAt": "2026-11-11T07:48:38.000Z"
  }
}
```

---

## 5. Chaos Lab & Scenarios

### `POST /api/scenarios`
Saves a reusable chaos testing scenario.
- **Body**:
```json
{
  "name": "Payment Idempotency Suite",
  "destinationUrl": "http://127.0.0.1:4000/demo/idempotent",
  "basePayload": "{}",
  "baseHeaders": { "content-type": "application/json" },
  "steps": [
    { "type": "duplicate", "name": "Send 3 duplicates", "config": { "duplicateCount": 3 } }
  ],
  "assertions": [
    { "type": "status_equals", "expected": 200 },
    { "type": "idempotent_processed_once" }
  ]
}
```

### `POST /api/scenarios/:id/run`
Executes the chaos scenario asynchronously and produces a comprehensive `TestRun` report with per-assertion evaluations.
