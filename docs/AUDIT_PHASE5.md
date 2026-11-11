# Webhook Arcade — Phase 5: Trust & Core Reliability Audit Report

**Date**: 2026-11-11  
**Scope**: Full Codebase Audit (`apps/api`, `apps/cli`, `apps/web`, `packages/*`, `docs/*`)  
**Standard**: Anti-Slop Quality Gate & Apple HIG Design Principles  
**Status**: Step 1 Completed (Audit Findings & Remediation Plan)

---

## 1. Executive Summary

This audit inspected every route, page, CLI command, package, and test suite in Webhook Arcade to identify security vulnerabilities, fake or stubbed implementations, broken authorization gates, missing tests, and misleading documentation claims.

### Summary of Findings by Severity
- **Critical**: 5
- **High**: 4
- **Medium**: 5
- **Low**: 2
- **Total Findings**: 16

---

## 2. Detailed Findings & Fix Plans

### F-01 [CRITICAL] Socket.IO Broken Authorization & Real-Time Snooping
- **Location**: [`apps/api/src/server.ts:88-116`](file:///d:/metad/webhook1/apps/api/src/server.ts#L88-L116)
- **Description**: 
  1. Socket.IO CORS origin is set to `'*'`.
  2. Connection handshake allows unauthenticated connections without rejecting invalid/missing tokens.
  3. Client listeners `join:workspace` and `join:endpoint` blindly join any room named by the client without verifying ownership.
  4. Any external client can connect and snoop on another tenant's live captured webhooks.
- **Fix Plan**:
  - Require valid JWT in handshake `auth.token`. Reject unauthenticated connections.
  - Restrict Socket.IO CORS to configured web origins.
  - Remove client-driven room joining or verify that the requested endpoint/workspace belongs to the authenticated user's workspace before joining.
  - Derive default room subscription automatically from the verified JWT (`workspace_${user.workspaceId}`).

---

### F-02 [CRITICAL] Cross-Tenant Workspace Modification via PATCH
- **Location**: [`apps/api/src/routes/workspaces.ts:79-98`](file:///d:/metad/webhook1/apps/api/src/routes/workspaces.ts#L79-L98)
- **Description**:
  - `PATCH /api/workspaces/:id` only validates guest workspace ID match (`if (user.isGuest && user.workspaceId !== id)`). For registered users, it never verifies that `ws.ownerId === user.userId`. Any registered user can rename or alter any other tenant's workspace.
- **Fix Plan**:
  - Check `ws.ownerId === user.userId` for registered users. Return `403 Forbidden` if unauthorized.

---

### F-03 [CRITICAL] Public Ingestion Token Bypass via `tokenPrefix`
- **Location**: [`apps/api/src/routes/ingest.ts:18-33`](file:///d:/metad/webhook1/apps/api/src/routes/ingest.ts#L18-L33)
- **Description**:
  - The endpoint lookup query checks `OR: [{ tokenHash: hashed }, { tokenPrefix: token }]`.
  - Because `tokenPrefix` is visible in URLs and UI listings, any external sender can bypass secret token authentication and ingest to endpoints using only the public prefix.
- **Fix Plan**:
  - Remove `tokenPrefix` from ingest authentication. Require the full secret token.
  - Compute SHA-256 hash of the incoming token and verify against `endpoint.tokenHash` using `crypto.timingSafeEqual`.

---

### F-04 [CRITICAL] SSRF IPv6-Mapped IPv4 & Alternate Notation Bypass
- **Location**: [`packages/replay-engine/src/ssrf.ts:105-132`](file:///d:/metad/webhook1/packages/replay-engine/src/ssrf.ts#L105-L132)
- **Description**:
  - `isPrivateOrReservedIPv6` only checks `normalized.startsWith('::ffff:')` followed by `net.isIPv4(v4Part)`. It fails to detect hexadecimal IPv4-mapped IPv6 notation (`::ffff:7f00:1`), uncompressed IPv4-mapped addresses (`0:0:0:0:0:ffff:...`), NAT64 prefix (`64:ff9b::/96`), and documentation ranges.
- **Fix Plan**:
  - Expand IPv6 parser to normalize uncompressed and hex IPv4-mapped representations.
  - Add checks for `64:ff9b::/96`, `2001:db8::/32`, `2002::/16`, and uncompressed notation.

---

### F-05 [CRITICAL] Unverified Guest Workspace Hijacking on Registration
- **Location**: [`apps/api/src/routes/auth.ts:106-118`](file:///d:/metad/webhook1/apps/api/src/routes/auth.ts#L106-L118)
- **Description**:
  - `POST /api/auth/register` allows claiming any guest workspace via `claimWorkspaceId` without verifying that the caller holds the guest session token for that workspace.
- **Fix Plan**:
  - Require the guest session token or Authorization header when claiming a guest workspace, and verify that the session actually matches `claimWorkspaceId`.

---

### F-06 [HIGH] Fake Signature Verification in Web UI
- **Location**: [`apps/web/src/pages/InboxPage.tsx:446-456`](file:///d:/metad/webhook1/apps/web/src/pages/InboxPage.tsx#L446-L456)
- **Description**:
  - Clicking "Verify Signature" does not compute an HMAC or verify signature headers. It hardcodes a static fake result: `{ valid: true, computed: 'sha256=verified_valid_signature_hash' }`.
- **Fix Plan**:
  - Implement real backend route: `POST /api/events/:id/verify-signature`.
  - Use `packages/signatures` to verify the actual stored `rawBody` bytes against the secret and header.
  - Update `InboxPage.tsx` to call this endpoint and display actual computed vs received results.

---

### F-07 [HIGH] Fake / Stubbed CLI Commands (`login`, `events`, `replay`, `listen`)
- **Location**: [`apps/cli/src/index.ts:20-27, 58-109, 116-126, 134-137`](file:///d:/metad/webhook1/apps/cli/src/index.ts#L20-L27)
- **Description**:
  - `arcade login`: Prints fake success without contacting the API or saving credentials.
  - `arcade events`: Prints a single hardcoded event string.
  - `arcade replay`: Prints fake HTTP 200 OK without executing a request.
  - `arcade listen`: Connects to Socket.IO without authentication and unhandled errors crash the process.
- **Fix Plan**:
  - Store tokens in `~/.arcade/config.json` with restrictive permissions (`0600`).
  - Implement real API calls for `login`, `events` (with pagination), `replay` (reporting real latency and status), and `listen` (authenticated socket with safe forwarding).

---

### F-08 [HIGH] Missing Rate Limiting on Ingestion & Guest Session Endpoints
- **Location**: [`apps/api/src/routes/ingest.ts:10`](file:///d:/metad/webhook1/apps/api/src/routes/ingest.ts#L10), [`apps/api/src/routes/auth.ts:11`](file:///d:/metad/webhook1/apps/api/src/routes/auth.ts#L11)
- **Description**:
  - `/api/auth/guest` and `/ingest/:token` have no rate limiting, allowing unbounded database creation and DoS.
- **Fix Plan**:
  - Apply `@fastify/rate-limit` per IP on `/api/auth/guest` (20/min per IP) and per-endpoint on `/ingest/:token` (using `rateLimitPerMin`).

---

### F-09 [HIGH] Severely Deficient API Test Coverage (Only 3 Tests)
- **Location**: [`apps/api/tests/api.test.ts`](file:///d:/metad/webhook1/apps/api/tests/api.test.ts)
- **Description**:
  - Only 3 basic integration tests exist. Replay, signature verification, scenarios, chaos engine execution, malformed body handling, rate limiting, and CLI execution are untested.
- **Fix Plan**:
  - Expand test suite with security regression tests, cross-workspace isolation tests, signature verification tests, replay comparisons, malformed body tests, and CLI execution tests.

---

### F-10 [MEDIUM] Fake Action in Danger Zone (Purge History)
- **Location**: [`apps/web/src/pages/SettingsPage.tsx:198-208`](file:///d:/metad/webhook1/apps/web/src/pages/SettingsPage.tsx#L198-L208)
- **Description**:
  - "Purge Event History" button executes `window.location.reload()`, performing no API call and deleting nothing.
- **Fix Plan**:
  - Implement `DELETE /api/endpoints/:id/events` to purge event history for the endpoint and wire the UI button to it.

---

### F-11 [MEDIUM] Hardcoded 50ms Fallback Latency in Replay Diff
- **Location**: [`apps/api/src/routes/replay.ts:83`](file:///d:/metad/webhook1/apps/api/src/routes/replay.ts#L83), [`apps/web/src/pages/ReplayPage.tsx:148`](file:///d:/metad/webhook1/apps/web/src/pages/ReplayPage.tsx#L148)
- **Description**:
  - Original latency in response comparison is hardcoded to `50` in `compareResponses` and `50ms` in the UI.
- **Fix Plan**:
  - Track real delivery / response latency or display `-` if unavailable.

---

### F-12 [MEDIUM] Incomplete Replay Comparison in UI
- **Location**: [`apps/web/src/pages/ReplayPage.tsx:164-181`](file:///d:/metad/webhook1/apps/web/src/pages/ReplayPage.tsx#L164-L181)
- **Description**:
  - The UI does not display header differences or side-by-side original vs replayed body comparisons.
- **Fix Plan**:
  - Add side-by-side comparison with original vs replayed status, headers, body, and latency.

---

### F-13 [MEDIUM] False Claims in `docs/PHASE_REPORTS.md`
- **Location**: [`docs/PHASE_REPORTS.md:113-158`](file:///d:/metad/webhook1/docs/PHASE_REPORTS.md#L113-L158)
- **Description**:
  - Document falsely claimed Phase 1-4 deliverables and CLI features were completed with real logic and zero placeholders.
- **Fix Plan**:
  - Correct `docs/PHASE_REPORTS.md` to reflect real audit findings, stubbed features, and actual verified test results.

---

### F-14 [MEDIUM] Hardcoded Metric Fallbacks in Analytics and Overview
- **Location**: [`apps/web/src/pages/AnalyticsPage.tsx:44`](file:///d:/metad/webhook1/apps/web/src/pages/AnalyticsPage.tsx#L44), [`apps/web/src/pages/OverviewPage.tsx:108`](file:///d:/metad/webhook1/apps/web/src/pages/OverviewPage.tsx#L108)
- **Description**:
  - `OverviewPage` and `AnalyticsPage` display hardcoded `25ms` and `35ms` when metric is 0 or missing.
- **Fix Plan**:
  - Remove hardcoded latency numbers. Display real calculated metrics or clean zero/empty state.

---

### F-15 [LOW] Single-Display Token Guidance
- **Location**: [`apps/web/src/pages/OverviewPage.tsx:80`](file:///d:/metad/webhook1/apps/web/src/pages/OverviewPage.tsx#L80)
- **Description**:
  - The receiver URL uses tokenPrefix after creation.
- **Fix Plan**:
  - Clarify token security in endpoint creation modals and provide dedicated token regeneration if lost.

---

### F-16 [LOW] Ingest Route Missing Explicit Request Timeout
- **Location**: [`apps/api/src/routes/ingest.ts:10`](file:///d:/metad/webhook1/apps/api/src/routes/ingest.ts#L10)
- **Description**:
  - `/ingest/:token` lacks explicit connection timeout handling for slow-client attacks.
- **Fix Plan**:
  - Set a 15-second request timeout on ingestion routes.

---

## 3. Implementation Roadmap for Phase 5

1. **Step 2 — Security Fixes**:
   - Secure Socket.IO authentication and room authorization.
   - Restrict Socket and REST CORS.
   - Enforce constant-time endpoint token hashing and remove `tokenPrefix` ingest bypass.
   - Fix cross-workspace `PATCH` and guest workspace claiming vulnerabilities.
   - Fortify SSRF engine with uncompressed and hex IPv6-mapped IPv4 checks.
   - Add rate limiting to `/api/auth/guest` and `/ingest/:token`.
2. **Step 3 — Replace Fake Implementations**:
   - Build `POST /api/events/:id/verify-signature` API and wire `InboxPage.tsx`.
   - Implement real CLI commands (`login`, `events`, `replay`, `listen`) with credential storage.
   - Implement real "Purge Event History" endpoint and wire `SettingsPage.tsx`.
   - Implement side-by-side replay diff viewer in `ReplayPage.tsx`.
   - Remove all hardcoded metric fallbacks (`25ms`, `35ms`, `50ms`).
3. **Step 4 — Automated Test Suites**:
   - Comprehensive Vitest suites covering all security, replay, signature, isolation, and CLI capabilities.
   - Add Playwright E2E test verifying end-to-end webhook capture, live streaming, replay, and diffing.
