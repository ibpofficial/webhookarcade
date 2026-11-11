# Webhook Arcade

<p align="center">
  <strong>Every webhook. Every event. Every possibility. One playground.</strong>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#features">Features</a> •
  <a href="#chaos-lab">Chaos Lab</a> •
  <a href="#cli">Arcade CLI</a> •
  <a href="#comparison">Comparison</a> •
  <a href="#architecture">Architecture</a> •
  <a href="docs/SECURITY_MODEL.md">Security</a> •
  <a href="#roadmap">Roadmap</a>
</p>

---

**Webhook Arcade** is an open-source webhook reliability testing playground.

Developers can capture real webhooks, inspect cryptographic signatures against raw bytes, compose and send test events, replay deliveries, simulate endpoint response rules, and run chaos scenarios (duplicates, bursts, artificial delays, out-of-order events, and tampered signatures) with automated assertion verification.

The core workflow works instantly without requiring an account or API keys:
**Generate an endpoint in 1 click → send a real webhook → see it stream live → inspect payload & headers → replay delivery.**

---

## Quick Start (Under 3 Commands)

Run Webhook Arcade on your local machine using Docker Compose:

```bash
git clone https://github.com/webhook-arcade/webhook-arcade.git
cd webhook-arcade
docker compose up -d
```

- **Web Dashboard**: [http://localhost:5173](http://localhost:5173)
- **API & Ingestion Receiver**: [http://localhost:4000](http://localhost:4000)
- **Interactive OpenAPI Documentation**: [http://localhost:4000/docs](http://localhost:4000/docs)

### Send your first webhook:
```bash
curl -X POST "http://localhost:4000/ingest/demo" \
  -H "Content-Type: application/json" \
  -d '{"event":"payment_intent.succeeded","amount":4999,"currency":"usd"}'
```

---

## Features

### A. Webhook Inbox & Live Inspector
- **Instant Endpoints**: Generate cryptographically random endpoint URLs in one click.
- **Capture First, Judge Later**: Ingests JSON, form-data, plain text, binary, and malformed payloads without rejection.
- **Exact Raw Byte Preservation**: Buffers raw bytes so cryptographic HMAC verification matches provider bytes without JSON stringify whitespace divergence.
- **Sensitive Header Redaction**: Masks `authorization`, `cookie`, `x-api-key`, and signing secrets before storage.
- **Live WebSocket Stream**: Ingested events stream immediately into the 3-pane macOS-style split inspector.
- **Copy-as-cURL & React Flow**: Copy executable curl commands or visualize delivery pipelines in React Flow.

### B. Event Composer & Provider Templates
- **Payload Editor**: JSON editor with live syntax validation.
- **Built-in Templates**: Pre-configured payloads for Stripe payments (success/fail), Shopify order creation, GitHub push events, and Clerk user authentication.
- **Custom Header & Method Builder**: Craft custom HTTP methods (`POST`, `PUT`, `PATCH`, `DELETE`) and header sets.

### C. Safe Replay Engine with SSRF Protection
- **Outbound HTTP Dispatcher**: Replay any captured event to a staging or local target server.
- **DNS IP-Pinning**: Resolves hostnames and pins the connection socket directly to the validated IP, preventing Time-of-Check to Time-of-Use (TOCTOU) DNS rebinding attacks.
- **Strict Network Filtering**: Blocks loopback, private networks (RFC 1918), link-local addresses, and cloud metadata services (`169.254.169.254`).
- **Response Diff Viewer**: Side-by-side comparison of original vs replayed response status, latency, and body.

### D. Response Simulator
- Configure what an endpoint returns to senders:
  - Custom HTTP status codes (`200`, `400`, `429`, `500`).
  - Custom response body and headers.
  - Artificial network latency delays (`delayMs`).

### E. Chaos Lab (Reliability Engine)
- **Duplicate Storms**: Send $N$ identical events in rapid succession to test receiver idempotency.
- **Concurrency Bursts**: Dispatch concurrent requests simultaneously to stress-test receiver concurrency.
- **Artificial Delays**: Inject network latency jitter to test timeouts.
- **Out-of-Order Delivery**: Invert event arrival order (e.g. fulfill order before order creation).
- **Tampered Signatures**: Invert HMAC bytes to test signature rejection.
- **Seeded RNG**: Uses Mulberry32 PRNG so chaos runs are 100% reproducible.
- **Automated Assertions**: Verify `status_equals`, `latency_below_ms`, `body_jsonpath_equals`, and `idempotent_processed_once`.
- **Built-in Demo Target**: Bundled `/demo/naive` and `/demo/idempotent` endpoints for immediate zero-config testing.

### F. Arcade CLI
```bash
npm install -g @webhook-arcade/cli

# Forward live cloud webhooks directly to your local development server
arcade listen --to http://localhost:3000/api/webhooks

# List captured events
arcade events --limit 10

# Trigger an immediate replay
arcade replay evt_12345 --to http://localhost:3000/api/webhooks
```

---

## Honest Comparison

| Capability | Webhook Arcade | Webhook.site | Hookdeck | ngrok |
|---|---|---|---|---|
| **License Model** | **100% Open-Source (MIT)** | Commercial / Freemium | Commercial SaaS | Commercial / Tunnel |
| **Chaos & Fault Injection** | **Built-in (Duplicates, Bursts, Delays)** | Not supported | Transformations only | Not supported |
| **Automated Assertions** | **Built-in (Status, Latency, Idempotency)** | No | No | No |
| **Self-Hosted Deployment** | **Docker Compose** | Docker image available | Cloud only | Relay cloud only |
| **Replay SSRF Protection** | **DNS IP-Pinning & Cloud Metadata Block** | Manual replay | Queue retries | Tunnel replay |
| **Zero-Config Guest Mode** | **1-Click (No account required)** | Yes | No | Account required |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Monorepo** | Turborepo + pnpm workspaces |
| **Frontend** | React 18, TypeScript strict, Vite, Tailwind CSS, React Flow, Recharts |
| **Backend** | Node.js 22, Fastify, Zod validation |
| **Real-time** | Socket.IO |
| **Database** | PostgreSQL + Prisma (with SQLite zero-dependency local development mode) |
| **CLI** | Node.js + Commander + Picocolors |
| **Testing** | Vitest (unit & integration), Fastify inject |
| **Deploy** | Docker, Docker Compose, GitHub Actions |

---

## Documentation

- [Architecture & Data Flow](docs/ARCHITECTURE.md)
- [API Specification](docs/API.md)
- [Security Model & SSRF Protection](docs/SECURITY_MODEL.md)
- [Chaos Lab & Assertions](docs/CHAOS_LAB.md)
- [Arcade CLI Reference](docs/CLI.md)
- [Self-Hosting Guide](docs/SELF_HOSTING.md)
- [Design System & Tokens](docs/DESIGN_SYSTEM.md)
- [Skills Compliance Matrix](docs/SKILLS_USED.md)
- [Architectural Decisions (ADRs)](docs/DECISIONS.md)
- [Phase Verification Reports](docs/PHASE_REPORTS.md)

---

## Roadmap (Postponed Features)

The following capabilities are deliberately postponed for future releases:
- **Public Tunneling Service**: Native managed reverse tunnel proxy (v1 uses local socket forwarding via `arcade listen`).
- **AI-Powered Diagnostics**: AI log explanation is excluded to preserve zero API-key dependencies.
- **Team Collaboration & RBAC**: Multi-tenant organizations and permission hierarchies.
- **Enterprise Cloud**: Hosted multi-region SaaS infrastructure.

---

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

Webhook Arcade is licensed under the [MIT License](LICENSE).

