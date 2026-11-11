# Contributing to Webhook Arcade

Thank you for contributing to Webhook Arcade! We welcome bug reports, documentation updates, provider template additions, and feature pull requests.

## Development Setup

1. **Prerequisites**:
   - Node.js >= 20 (Node 22 or 24 recommended)
   - pnpm >= 9 (`corepack enable` or `npm install -g pnpm`)
   - Docker & Docker Compose (optional for local PostgreSQL + Redis)

2. **Clone and Install**:
   ```bash
   git clone https://github.com/webhook-arcade/webhook-arcade.git
   cd webhook-arcade
   pnpm install
   ```

3. **Configure Environment**:
   ```bash
   cp .env.example .env
   ```

4. **Initialize Database**:
   ```bash
   pnpm --filter @webhook-arcade/database db:push
   pnpm --filter @webhook-arcade/database db:seed
   ```

5. **Start Dev Servers**:
   ```bash
   pnpm dev
   ```
   - Dashboard: http://localhost:5173
   - API & Ingestion: http://localhost:4000
   - OpenAPI Docs: http://localhost:4000/docs

## Monorepo Architecture

- `apps/web`: React + Vite dashboard
- `apps/api`: Fastify API backend and ingest receiver
- `apps/cli`: Arcade developer CLI
- `packages/shared`: Shared types, schemas, and error models
- `packages/database`: Prisma schema and client
- `packages/webhook-engine`: Capture, redaction, parsing
- `packages/replay-engine`: SSRF-protected replay client
- `packages/chaos-engine`: Chaos orchestrator and assertions runner
- `packages/signatures`: HMAC and tampering helpers
- `packages/templates`: Provider event definitions

## Code Standards & Style

- **Anti-Slop**: We maintain high design and code standards. Avoid placeholder text, non-functional buttons, and generic boilerplates.
- **Design Language**: Follow Apple HIG for navigation and layout rhythm, and Material 3 for token structure and state management.
- **Conventional Commits**: Format commit messages as `feat: ...`, `fix: ...`, `docs: ...`, `test: ...`, or `refactor: ...`.
- Run tests and linting before submitting a PR:
  ```bash
  pnpm lint
  pnpm test
  ```

