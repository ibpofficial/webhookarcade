# Changelog

All notable changes to **Webhook Arcade** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-11-11

### Added
- **Monorepo Foundation**: Turborepo, pnpm workspaces, and strict TypeScript across all apps and packages.
- **Design System**: Deep navy/charcoal palette with electric violet primary (`#8b5cf6`) and cyan accent (`#06b6d4`). Apple HIG layout architecture with Material 3 token semantics.
- **Webhook Inbox**: Live ingestion receiver (`/ingest/:token`), raw byte buffering, sensitive header redaction, WebSocket real-time delivery feed, search, and filtering.
- **Event Composer**: JSON editor, method picker, header builder, and pre-configured provider templates (Stripe, GitHub, Shopify, Clerk).
- **Replay Engine**: Outbound HTTP dispatcher with DNS IP pinning and rigorous SSRF protection (loopback, private, link-local, cloud metadata blocks), side-by-side response diffing.
- **Response Simulator**: Declarative HTTP response configuration per endpoint (status, custom headers, custom body, artificial latency).
- **Chaos Lab**: Chaos scenarios (duplicates, burst volume, out-of-order deliveries, delayed arrival, tampered signatures) with automated assertions (status, latency, JSONPath, idempotency).
- **Arcade CLI**: Developer command line interface for authentication, endpoint management, and local event forwarding.

