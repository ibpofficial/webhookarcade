# Webhook Arcade - Security Model & Architecture

Security is central to Webhook Arcade. Because developer testing utilities receive untrusted inbound traffic and dispatch outbound HTTP requests, Webhook Arcade implements multi-layered protections across five core disciplines.

---

## 1. SSRF Protection & DNS IP Pinning

When users trigger replays, manual dispatches, or chaos suites to custom destination URLs, malicious actors could attempt Server-Side Request Forgery (SSRF) against internal VPC services, Kubernetes control planes, or cloud provider instance metadata (`169.254.169.254`).

### Multi-Hop IP Validation
The SSRF validation engine (`packages/replay-engine/src/ssrf.ts`) enforces strict validation before initiating outbound sockets:

1. **Protocol Restrictions**: Only `http:` and `https:` schemes are allowed. Schemes such as `file:`, `ftp:`, `gopher:`, or `data:` are blocked immediately.
2. **DNS Resolution & Exhaustive Checking**: The target hostname is resolved via `dns.promises.lookup(hostname, { all: true })`. Every returned IPv4 and IPv6 record must pass validation.
3. **Restricted IP Ranges Blocked**:
   - `0.0.0.0/8` (Current network)
   - `10.0.0.0/8` (RFC 1918 private)
   - `127.0.0.0/8` (Loopback)
   - `100.64.0.0/10` (Carrier Grade NAT)
   - `169.254.0.0/16` (Link-local & AWS/GCP/Azure cloud metadata `169.254.169.254`)
   - `172.16.0.0/12` (RFC 1918 private)
   - `192.168.0.0/16` (RFC 1918 private)
   - `224.0.0.0/4` & `240.0.0.0/4` (Multicast & reserved)
   - `::1` (IPv6 Loopback)
   - `fc00::/7` (IPv6 Unique Local Address)
   - `fe80::/10` (IPv6 Link-local)
   - `::ffff:0:0/96` (IPv4-mapped IPv6 translated and verified against IPv4 rules)
4. **DNS Rebinding Prevention (IP Pinning)**:
   - In standard HTTP clients, validating an IP before requesting allows an attacker to return a safe IP on first lookup and `127.0.0.1` on socket connection (TOCTOU race).
   - Webhook Arcade overrides the HTTP Agent's socket lookup function, pinning the connection socket directly to the validated IP address.
5. **No Automatic Redirect Following**: Redirects are not followed implicitly.

---

## 2. Cryptographic Signature Verification

- **Raw Byte Preservation**: Webhook signatures are computed over exact byte sequences. Webhook Arcade buffers and stores raw bytes without JSON re-serialization.
- **Timing-Safe Comparison**: Signature equality checks use `crypto.timingSafeEqual` to eliminate side-channel timing attacks.
- **Timestamp Verification**: For Stripe-style schemes, timestamp headers are verified against a tolerance window (default: 300s) to prevent replay attacks.

---

## 3. Sensitive Data Redaction

- Upon receipt, headers are sanitized against `SENSITIVE_HEADERS` (`authorization`, `cookie`, `x-api-key`, `stripe-signature`, etc.).
- Sensitive values are stored as `[REDACTED]` while retaining audit knowledge of header presence.

---

## 4. Multi-Tenant Workspace Isolation

- Every endpoint, event, scenario, and test run is scoped to a unique `workspaceId`.
- Every query enforces database-level tenant constraints:
  ```ts
  const endpoint = await db.endpoint.findUnique({ where: { id } });
  if (!endpoint || endpoint.workspaceId !== req.workspaceId) {
    return reply.status(404).send({ error: 'Endpoint Not Found' });
  }
  ```
- Comprehensive integration tests in `apps/api/tests/api.test.ts` continuously verify that Workspace A cannot access Workspace B data.
