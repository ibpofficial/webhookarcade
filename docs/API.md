# Webhook Arcade - API Specification

All Management API routes return JSON and require Bearer token authentication (unless explicitly noted as public). Interactive OpenAPI documentation is served at `/docs`.

Base URL: `http://localhost:4000`

---

## 1. Authentication & Onboarding

### `POST /api/auth/guest`
Creates an ephemeral guest workspace and pre-configured endpoint in one click.
- **Access**: Public
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
- **Body**: `{ "email": "...", "password": "...", "name": "...", "claimWorkspaceId": "uuid" }`

### `POST /api/auth/login`
Authenticates an existing user.
- **Access**: Public
- **Body**: `{ "email": "...", "password": "..." }`

---

## 2. Ingestion Receiver (Public)

### `ANY /ingest/:endpointToken`
Ingests webhooks from external providers.
- **Methods**: `POST`, `GET`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`
- **Content-Types**: `application/json`, `application/x-www-form-urlencoded`, `text/plain`, `application/octet-stream`
- **Behavior**:
  - Captures raw bytes and sanitizes sensitive headers (`authorization`, `x-api-key`, `cookie`, `stripe-signature`).
  - Emits real-time event via Socket.IO.
  - Applies endpoint's Response Simulator rule (custom status, custom body, headers, and delay).

---

## 3. Endpoints & Response Simulator

### `GET /api/endpoints`
Lists all endpoints in active workspace.

### `POST /api/endpoints`
Creates a new endpoint.
- **Body**: `{ "name": "...", "description": "...", "responseRule": { "statusCode": 200, "delayMs": 50 } }`

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
Retrieves full details of a captured event, including raw body bytes, parsed JSON, and replay attempt logs.

### `POST /api/events/:id/replay`
Dispatches an outbound replay request with SSRF validation.
- **Body**:
```json
{
  "destinationUrl": "http://127.0.0.1:4000/demo/idempotent",
  "overridePayload": "{ \"replayed\": true }",
  "overrideHeaders": { "x-custom-test": "1" }
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
Executes the chaos scenario asynchronously and produces a comprehensive `TestRun` report.

