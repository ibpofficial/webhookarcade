# Arcade CLI & Local Forwarding

The **Arcade CLI** is the developer companion to Webhook Arcade. It streams captured cloud webhooks into local development environments without third-party tunnels.

---

## Installation

```bash
# Global installation via npm
npm install -g @webhook-arcade/cli

# Verify installation
arcade --version
```

---

## Commands

### `arcade login`
Links your CLI to your Webhook Arcade instance.
```bash
arcade login --token <your_api_token>
```

### `arcade endpoint create`
Generates a new webhook receiver endpoint from your terminal.
```bash
arcade endpoint create --name "Local Development"
```

### `arcade listen --to <destinationUrl>`
Subscribes to live incoming webhooks over WebSockets and forwards each event to your local server.
```bash
arcade listen --to http://localhost:3000/api/webhooks
```

Output:
```
  Webhook Arcade Forwarder
  --------------------------------------------
  Forwarding live events to: http://localhost:3000/api/webhooks
  Server: http://localhost:4000
  Press Ctrl+C to stop listening.

  [10:14:02] POST /ingest/wha_live_... -> Forwarding to http://localhost:3000/api/webhooks
  ✔ HTTP 200 in 18ms (Response size: 38B)
```

### `arcade events`
Lists the 10 most recent webhook events captured on your endpoints.
```bash
arcade events --limit 10
```

### `arcade replay <eventId>`
Triggers an immediate replay of a historical webhook event to your target destination.
```bash
arcade replay evt_demo_stripe_succeeded_01 --to http://localhost:3000/api/webhooks
```
