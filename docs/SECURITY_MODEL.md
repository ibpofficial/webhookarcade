# Webhook Arcade - Security Model & Architecture

Security is central to Webhook Arcade. Because developer testing utilities receive untrusted inbound traffic and dispatch outbound HTTP requests, Webhook Arcade implements multi-layered protections across core security disciplines.

---

## 1. SSRF Protection & DNS IP Pinning

When users trigger replays, manual dispatches, or chaos suites to custom destination URLs, malicious actors could attempt Server-Side Request Forgery (SSRF) against internal VPC services, Kubernetes control planes, or cloud provider instance metadata (`169.254.169.254`).

### Multi-Hop IP Validation
The SSRF validation engine (`packages/replay-engine/src/ssrf.ts`) enforces strict validation before initiating outbound sockets:

1. **Protocol Restrictions**: Only `http:` and `https:` schemes are allowed. Schemes such as `file:`, `ftp:`, `gopher:`, or `data:` are blocked immediately.
2. **DNS Resolution & Exhaustive Checking**: The target hostname is resolved via `dns.promises.lookup(hostname, { all: true })`. Every returned IPv4 and IPv6 record must pass validation.
3. **Restricted IP Ranges Blocked**:
   - `0.0.0.0/8` (Current network / "this" host)
   - `10.0.0.0/8` (RFC 1918 private)
   - `127.0.0.0/8` (Loopback)
   - `100.64.0.0/10` (Carrier Grade NAT)
   - `169.254.0.0/16` (Link-local & AWS/GCP/Azure cloud metadata `169.254.169.254`)
   - `172.16.0.0/12` (RFC 1918 private)
   - `192.168.0.0/16` (RFC 1918 private)
   - `198.18.0.0/15` (Network benchmark tests)
   - `224.0.0.0/4` & `240.0.0.0/4` (Multicast & reserved)
   - `::1` (IPv6 Loopback)
   - `fc00::/7` (IPv6 Unique Local Address)
   - `fe80::/10` (IPv6 Link-local)
   - `2001:db8::/32` (IPv6 Documentation prefix)
   - `2002::/16` (6to4 prefix)
   - `64:ff9b::/96` (NAT64 prefix)
   - `::ffff:0:0/96` (IPv4-mapped IPv6, including hexadecimal `::ffff:7f00:1` and dot-decimal formats, translated and verified against IPv4 rules)
   - IPv4-compatible IPv6 addresses (`::127.0.0.1` format)
4. **DNS Rebinding Prevention (IP Pinning)**:
   - In standard HTTP clients, validating an IP before requesting allows an attacker to return a safe IP on first lookup and `127.0.0.1` on socket connection (TOCTOU race).
   - Webhook Arcade overrides the HTTP Agent's socket lookup function, pinning the connection socket directly to the validated IP address.
5. **Multi-Hop Redirect Security**:
   - Redirects are validated at every hop.
   - If an initial target redirects to a private or restricted destination (e.g. `http://public.com` -> `http://169.254.169.254`), the redirect is intercepted and blocked with an SSRF security exception.

---

## 2. Socket.IO Real-Time Security & Authorization

Real-time streaming in Webhook Arcade is secured end-to-end against unauthorized snooping:

1. **Mandatory Handshake Authentication**:
   - Connections without a valid Bearer JWT in `socket.handshake.auth.token` or `socket.handshake.query.token` are rejected during handshake with `401 Unauthorized`.
2. **CORS Restrictions**:
   - Socket.IO CORS is locked to verified web application origins (configured via `SOCKET_CORS_ORIGIN` and `WEB_URL`), rather than wildcard origins.
3. **Workspace Isolation & Room Derivation**:
   - Clients cannot arbitrary join any room by emitting `join:workspace`.
   - The primary workspace room (`workspace_${user.workspaceId}`) is derived server-side exclusively from the verified JWT session claims.
4. **Server-Side Endpoint Room Verification**:
   - When a client emits `join:endpoint`, the server verifies against the database that the endpoint belongs to the authenticated user's `workspaceId`.
   - Attempts to subscribe to a foreign endpoint room are rejected with `error:forbidden`.

---

## 3. Cryptographic Signature Verification & Raw Bytes

- **Raw Byte Preservation**: Webhook signatures are computed over exact byte sequences. Webhook Arcade buffers and stores raw bytes without re-serializing to JSON, preserving raw byte order and exact whitespace.
- **Timing-Safe Comparison**: Signature equality checks and token matching use `crypto.timingSafeEqual` to eliminate side-channel timing attacks.
- **Endpoint Token Hashing**:
   - Only the SHA256 hash (`tokenHash`) is stored in the database.
   - The full secret token is presented to the user only once at creation time.
   - Ingestion strictly requires the full token; partial prefix tokens are rejected with `404 Not Found`.
- **Timestamp Verification**: For Stripe-style schemes, timestamp headers are verified against a tolerance window (default: 300s) to prevent replay attacks.

---

## 4. Sensitive Data Redaction & Rate Limiting

- Upon receipt, authentication credentials are sanitized against `SENSITIVE_HEADERS` (`authorization`, `cookie`, `set-cookie`, `x-api-key`, `x-auth-token`, `secret`, `proxy-authorization`).
- Sensitive values are stored as `[REDACTED]` while retaining audit knowledge of header presence.
- Public endpoint abuse protection:
  - Guest account generation is rate-limited to 20 requests per minute per IP.
  - Ingestion endpoints enforce configurable per-minute rate limits (`rule.rateLimitPerMin`).

---

## 5. Multi-Tenant Workspace Isolation

- Every endpoint, event, scenario, and test run is scoped to a unique `workspaceId`.
- Every database query enforces tenant constraints:
  ```ts
  const endpoint = await db.endpoint.findUnique({ where: { id } });
  if (!endpoint || endpoint.workspaceId !== req.workspaceId) {
    return reply.status(404).send({ error: 'Endpoint Not Found' });
  }
  ```
- Guest workspace claiming: Registering with `claimWorkspaceId` requires supplying the guest JWT. The API confirms that the caller holds active credentials for that guest workspace before transferring ownership.
- Comprehensive integration tests in `apps/api/tests/api.test.ts` continuously verify cross-tenant boundaries across every route.
