# Architectural & Design Decisions

This document records architectural, technical, and design choices made during the creation of **Webhook Arcade**.

---

## ADR-001: Monorepo Architecture & Package Boundaries
- **Date**: 2026-11-11
- **Context**: The project spans a web dashboard, an HTTP ingestion receiver, a management API, an asynchronous chaos/replay worker, a CLI, and shared logic.
- **Decision**: Use `pnpm` workspaces combined with `Turborepo` for rapid incremental builds and clear TypeScript boundaries.
- **Packages**:
  - `apps/web`: React + Vite + Tailwind dashboard.
  - `apps/api`: Fastify backend + Ingest receiver + Socket.IO + OpenAPI documentation.
  - `apps/cli`: Commander-based developer CLI.
  - `packages/shared`: Shared types, Zod schemas, error models, and constants.
  - `packages/database`: Prisma client, schema, migrations, and seed scripts.
  - `packages/webhook-engine`: Ingestion parser, sensitive header redaction, and raw byte buffering.
  - `packages/replay-engine`: Safe HTTP replay client with SSRF IP-pinning and response diffing.
  - `packages/chaos-engine`: Fault injection orchestrator (bursts, delays, reordering, duplicate deliveries) and assertions runner.
  - `packages/signatures`: Cryptographic signature helpers (GitHub HMAC-SHA256, Stripe-style timestamped HMAC, generic HMAC) and tampering generators.
  - `packages/templates`: Pre-built realistic provider event templates (Stripe, GitHub, Shopify, Clerk).

---

## ADR-002: Dual Database Strategy (PostgreSQL Primary + SQLite Development Fallback)
- **Date**: 2026-11-11
- **Context**: Production deployment requires PostgreSQL with byte array storage and cursor-based indexing. However, local developer onboarding and CI test runners may run in environments where Docker or PostgreSQL is not immediately active.
- **Decision**: Configure Prisma with PostgreSQL as the production datasource, and provide a seamless SQLite fallback mode for zero-setup local development and isolated unit testing. Provide full migration SQL for PostgreSQL and automatic table bootstrap for SQLite.

---

## ADR-003: Raw Byte Preservation for Cryptographic Signatures
- **Date**: 2026-11-11
- **Context**: Webhook providers (such as Stripe, GitHub, Shopify) compute HMAC signatures over the exact raw HTTP payload bytes. Re-serializing parsed JSON strings alters whitespace and key ordering, breaking signature verification.
- **Decision**: The ingestion pipeline captures the raw body as a Node.js `Buffer` (stored as `Bytes` in database) and parses JSON into a distinct `Json` column. Verification algorithms evaluate against the exact buffered byte stream.

---

## ADR-004: SSRF Protection & DNS IP Pinning
- **Date**: 2026-11-11
- **Context**: The replay engine, event composer, and chaos lab dispatch outbound HTTP requests to user-specified target URLs. Malicious actors could target cloud metadata services (`169.254.169.254`), internal Docker networks, or private infrastructure (RFC 1918).
- **Decision**:
  - Resolve destination hostnames via `dns.promises.lookup` with `{ all: true }`.
  - Validate all returned IPv4 and IPv6 addresses against strict private/reserved CIDR ranges (including 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 127.0.0.0/8, 169.254.0.0/16, ::1, fc00::/7, fe80::/10, IPv4-mapped IPv6).
  - Pin the validated IP address directly in the HTTP request agent socket connection to prevent Time-of-Check to Time-of-Use (TOCTOU) DNS rebinding attacks.
  - Refuse automatic redirect following; inspect every redirect hop against the SSRF validator.
  - Provide an explicit environment switch (`ALLOW_LOCALHOST_TARGETS=true`) solely for local CLI tunneling and self-hosted developer mode.

---

## ADR-005: Dual Queue Strategy (BullMQ + Redis with Synchronous In-Memory Worker Fallback)
- **Date**: 2026-11-11
- **Context**: Chaos scenarios and replay runs require asynchronous scheduling so that heavy burst or delayed execution never starves the ingestion HTTP loop.
- **Decision**: Implement BullMQ with Redis for production scale, backed by an in-memory task runner when Redis is not configured in local single-process development mode.

---

## ADR-006: Apple HIG + Material 3 Design Integration
- **Date**: 2026-11-11
- **Context**: The user interface must feel like a focused, high-precision engineering instrument rather than a templated admin panel.
- **Decision**:
  - Layout: Apple Human Interface Guidelines desktop 3-pane split (Nav / Inbox List / Inspector) with responsive collapse to a bottom sheet/drawer on mobile.
  - Colors: Dark charcoal/navy canvas (`#0a0d14`), elevated surface (`#121826`), high-contrast text (`#f8fafc`), electric violet primary (`#8b5cf6`), and electric cyan accent (`#06b6d4`).
  - State & Accessibility: Material Design 3 token hierarchy, focus-visible outlines (2px violet/cyan offset), and WCAG AA contrast compliance across all controls.

