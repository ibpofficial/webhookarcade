# Arcade CLI & Local Forwarding

The **Arcade CLI** is the developer companion to Webhook Arcade. It streams captured cloud webhooks into local development environments without third-party tunnels, manages endpoints, and replays events directly from the terminal.

---

## Installation

```bash
# Global installation via npm / pnpm
npm install -g @webhook-arcade/cli

# Verify installation
arcade --version
```

---

## Configuration & Credentials

CLI credentials and API endpoints are saved securely in:
- **Unix/macOS**: `~/.arcade/config.json` (with strict `0600` user-only permissions)
- **Windows**: `%USERPROFILE%\.arcade\config.json`

---

## Commands

### `arcade login`
Links your CLI to your Webhook Arcade instance.
```bash
# 1-Click Guest Session initialization against the API:
arcade login

# Or authenticate using an existing API token:
arcade login --token <your_api_token>

# Override API URL:
arcade login --api-url http://localhost:4000
```

### `arcade endpoint list`
Lists all active webhook ingestion endpoints configured in your current workspace:
```bash
arcade endpoint list
```
Output:
```
Configured Endpoints (1):
ID                                    Name                  Status    Prefix
--------------------------------------------------------------------------------
bfb7f12f-e78e-47fb-bdd9-e0db609deb9c  Default Inbox         ACTIVE    wha_live_OO1ANd
```

### `arcade endpoint create`
Generates a new webhook receiver endpoint directly from your terminal:
```bash
arcade endpoint create --name "Local Stripe Inbox" --description "Receiver for local testing"
```

### `arcade events`
Lists real historical webhook events captured on your endpoints with status, payload size, and timestamps:
```bash
arcade events --limit 10
```
Output:
```
Captured Events (3):
ID                                    METHOD  STATUS  SIZE    RECEIVED AT             PATH
-------------------------------------------------------------------------------------------------------------
a96daf96-cae9-4484-a69c-6d6d82945e80  POST    200     31 B    12:58:00 pm             /ingest/wha_live_...
```

### `arcade replay <eventId>`
Dispatches a real HTTP replay of a historical webhook event to your local or remote destination URL, printing response outcomes and comparison diffs:
```bash
arcade replay a96daf96-cae9-4484-a69c-6d6d82945e80 --to http://localhost:3000/api/webhooks
```
Output:
```
Replaying event a96daf96-cae9-4484-a69c-6d6d82945e80 to http://localhost:3000/api/webhooks...

✔ Replay completed successfully!
  Destination:       http://localhost:3000/api/webhooks
  Original Ingest:   HTTP 200
  Replayed Outcome:  HTTP 200 in 12ms
  Body Match:        Matched
```

### `arcade listen --to <destinationUrl>`
Subscribes to live incoming webhooks over authenticated WebSockets and safely forwards each event to your local receiver. Method, path, query parameters, custom headers, and unmodified raw body bytes are preserved.
```bash
arcade listen --to http://localhost:3000/api/webhooks
```
- **Resilience**: Automatically retries disconnections.
- **Fault-Tolerant**: Safe execution that never crashes the forwarder on local target errors or connection refusals.
