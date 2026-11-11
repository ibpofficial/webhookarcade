# Self-Hosting Webhook Arcade

Webhook Arcade can be deployed on any server running Docker and Docker Compose.

---

## 1. Quickstart (Docker Compose)

Clone the repository and start all services:

```bash
git clone https://github.com/webhook-arcade/webhook-arcade.git
cd webhook-arcade
docker compose up -d
```

### Services Started:
- **Web Dashboard**: `http://localhost:5173`
- **Fastify API & Ingest Receiver**: `http://localhost:4000`
- **PostgreSQL Database**: Port `5432`
- **Redis Queue**: Port `6379`
- **Interactive OpenAPI Documentation**: `http://localhost:4000/docs`

---

## 2. Environment Variables

Create a `.env` file before launching:

```ini
PORT=4000
HOST=0.0.0.0
DATABASE_URL=postgresql://arcade:arcade_secret@postgres:5432/webhook_arcade?schema=public
REDIS_URL=redis://redis:6379
PUBLIC_INGEST_URL=http://localhost:4000/ingest
PUBLIC_WEB_URL=http://localhost:5173
JWT_SECRET=super_secret_signing_key_at_least_32_characters_long
ALLOW_LOCALHOST_TARGETS=false
```

> **Security Note**: Never set `ALLOW_LOCALHOST_TARGETS=true` on public multi-tenant deployments. Only enable it on single-user local setups or trusted staging machines.

---

## 3. Database Migrations & Seeding

Run Prisma migrations inside the container:
```bash
docker compose exec api pnpm --filter @webhook-arcade/database db:push
docker compose exec api pnpm --filter @webhook-arcade/database db:seed
```

---

## 4. Production Reverse Proxy (Caddy / Nginx)

Example Caddyfile for domain routing and automatic HTTPS:
```caddy
arcade.yourdomain.com {
    reverse_proxy localhost:5173
}

api.yourdomain.com {
    reverse_proxy localhost:4000
}
```
