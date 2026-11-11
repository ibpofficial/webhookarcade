#!/usr/bin/env node
import { Command } from 'commander';
import pc from 'picocolors';
import { io } from 'socket.io-client';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

interface ArcadeConfig {
  apiUrl: string;
  token?: string;
  workspaceId?: string;
  defaultEndpointId?: string;
}

const CONFIG_DIR = path.join(os.homedir(), '.arcade');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

function loadConfig(): ArcadeConfig {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const content = fs.readFileSync(CONFIG_FILE, 'utf8');
      return JSON.parse(content);
    }
  } catch {
    // ignore
  }
  return {
    apiUrl: process.env.ARCADE_API_URL || 'http://localhost:4000',
  };
}

function saveConfig(cfg: ArcadeConfig): void {
  try {
    if (!fs.existsSync(CONFIG_DIR)) {
      fs.mkdirSync(CONFIG_DIR, { recursive: true, mode: 0o700 });
    }
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(cfg, null, 2), { mode: 0o600 });
  } catch (err) {
    console.warn(pc.yellow(`Warning: Unable to save credentials to ${CONFIG_FILE}: ${err instanceof Error ? err.message : String(err)}`));
  }
}

const program = new Command();
const currentConfig = loadConfig();

program
  .name('arcade')
  .description(pc.bold(pc.magenta('Webhook Arcade CLI')) + ' — Reliability playground in your terminal')
  .version('0.1.0')
  .option('--api-url <url>', 'Override Arcade API base URL', currentConfig.apiUrl);

// 1. arcade login
program
  .command('login')
  .description('Authenticate CLI with Webhook Arcade session or guest token')
  .option('-t, --token <token>', 'Session JWT or API token')
  .action(async (options) => {
    const apiUrl = program.opts().apiUrl || currentConfig.apiUrl;
    console.log(pc.cyan(`Connecting to Webhook Arcade at ${apiUrl}...`));

    try {
      if (options.token) {
        // Validate provided token
        const res = await fetch(`${apiUrl}/api/auth/me`, {
          headers: { authorization: `Bearer ${options.token}` },
        });

        if (!res.ok) {
          throw new Error(`Authentication rejected (HTTP ${res.status}): Invalid token`);
        }

        const data = await res.json();
        const workspaceId = data.workspaceId || data.workspace?.id;

        saveConfig({
          apiUrl,
          token: options.token,
          workspaceId,
        });

        console.log(pc.green('✔ Session authenticated successfully.'));
        console.log(`  Workspace: ${pc.bold(workspaceId || 'Default')}`);
        console.log(pc.dim(`  Credentials saved securely to ${CONFIG_FILE}\n`));
      } else {
        // 1-Click Guest Session Initialization
        const res = await fetch(`${apiUrl}/api/auth/guest`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ clientName: 'Arcade Terminal CLI' }),
        });

        if (!res.ok) {
          throw new Error(`Failed to create guest session (HTTP ${res.status})`);
        }

        const data = await res.json();
        saveConfig({
          apiUrl,
          token: data.token,
          workspaceId: data.workspace.id,
          defaultEndpointId: data.endpoint.id,
        });

        console.log(pc.green('✔ Initialized ephemeral guest developer session!'));
        console.log(`  Workspace ID:  ${pc.bold(data.workspace.id)}`);
        console.log(`  Endpoint Name: ${pc.bold(data.endpoint.name)}`);
        console.log(`  Receiver URL:  ${pc.cyan(data.endpoint.url)}`);
        console.log(pc.dim(`  Credentials saved to ${CONFIG_FILE}\n`));
      }
    } catch (err: unknown) {
      console.error(pc.red(`✖ Authentication failed: ${err instanceof Error ? err.message : String(err)}`));
      process.exit(1);
    }
  });

// 2. arcade endpoint [action]
program
  .command('endpoint')
  .description('Endpoint management commands (list / create)')
  .argument('<action>', 'Action to perform: list or create')
  .option('-n, --name <name>', 'Endpoint name', 'CLI Development Inbox')
  .action(async (action, options) => {
    const config = loadConfig();
    const apiUrl = program.opts().apiUrl || config.apiUrl;

    if (!config.token) {
      console.error(pc.red('✖ Authentication required. Run `arcade login` first.'));
      process.exit(1);
    }

    try {
      if (action === 'create') {
        const res = await fetch(`${apiUrl}/api/endpoints`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${config.token}`,
          },
          body: JSON.stringify({ name: options.name }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || `HTTP ${res.status}`);
        }

        const data = await res.json();
        console.log(pc.green('\n✔ Webhook endpoint created successfully!'));
        console.log(`  ID:           ${data.endpoint.id}`);
        console.log(`  Name:         ${pc.bold(data.endpoint.name)}`);
        console.log(`  Receiver URL: ${pc.cyan(data.endpoint.url)}`);
        if (data.endpoint.fullToken) {
          console.log(`  Secret Token: ${pc.yellow(data.endpoint.fullToken)} (Store securely!)`);
        }
        console.log('\nSend a test webhook:');
        console.log(pc.dim(`curl -X POST "${data.endpoint.url}" -H "Content-Type: application/json" -d '{"ping":"pong"}'\n`));
      } else if (action === 'list') {
        const res = await fetch(`${apiUrl}/api/endpoints`, {
          headers: { authorization: `Bearer ${config.token}` },
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const endpoints = data.endpoints || [];

        console.log(pc.bold(`\nConfigured Endpoints (${endpoints.length}):`));
        console.log(pc.dim('ID                                    Name                  Status    Prefix'));
        console.log(pc.dim('--------------------------------------------------------------------------------'));
        for (const ep of endpoints) {
          const status = ep.isPaused ? pc.yellow('PAUSED') : pc.green('ACTIVE');
          console.log(`${ep.id}  ${ep.name.padEnd(20)}  ${status}    ${ep.tokenPrefix}`);
        }
        console.log();
      } else {
        console.error(pc.red(`Unknown action "${action}". Valid actions are: list, create.`));
        process.exit(1);
      }
    } catch (err: unknown) {
      console.error(pc.red(`✖ Endpoint operation failed: ${err instanceof Error ? err.message : String(err)}`));
      process.exit(1);
    }
  });

// 3. arcade events
program
  .command('events')
  .description('List recently captured webhook events with real-time filters')
  .option('-l, --limit <number>', 'Number of events to list', '10')
  .option('-e, --endpoint <id>', 'Filter by endpoint ID')
  .option('-m, --method <method>', 'Filter by HTTP method (GET, POST, etc.)')
  .option('-s, --status <status>', 'Filter by HTTP status code')
  .option('-q, --search <query>', 'Text search query')
  .action(async (options) => {
    const config = loadConfig();
    const apiUrl = program.opts().apiUrl || config.apiUrl;

    if (!config.token) {
      console.error(pc.red('✖ Authentication required. Run `arcade login` first.'));
      process.exit(1);
    }

    try {
      const q = new URLSearchParams();
      if (options.limit) q.set('limit', options.limit);
      if (options.endpoint) q.set('endpointId', options.endpoint);
      if (options.method) q.set('method', options.method.toUpperCase());
      if (options.status) q.set('status', options.status);
      if (options.search) q.set('search', options.search);

      const res = await fetch(`${apiUrl}/api/events?${q.toString()}`, {
        headers: { authorization: `Bearer ${config.token}` },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch events: HTTP ${res.status}`);
      }

      const data = await res.json();
      const events = data.events || [];

      console.log(pc.bold(`\nCaptured Events (${events.length}):`));
      if (events.length === 0) {
        console.log(pc.dim('No events captured matching criteria.'));
        console.log(pc.dim('Send a webhook or run `arcade listen --to <url>` to begin streaming.\n'));
        return;
      }

      console.log(pc.dim('ID                                    METHOD  STATUS  SIZE    RECEIVED AT             PATH'));
      console.log(pc.dim('-------------------------------------------------------------------------------------------------------------'));
      for (const ev of events) {
        const statusColor = ev.statusCode >= 200 && ev.statusCode < 400 ? pc.green : pc.red;
        const timeStr = new Date(ev.receivedAt).toLocaleTimeString();
        console.log(
          `${ev.id}  ${pc.bold(ev.method.padEnd(6))}  ${statusColor(String(ev.statusCode).padEnd(6))}  ${String(ev.sizeBytes + ' B').padEnd(6)}  ${timeStr.padEnd(22)}  ${ev.path}`,
        );
      }
      console.log(pc.dim('\nRun `arcade replay <eventId> --to <url>` to replay any event.\n'));
    } catch (err: unknown) {
      console.error(pc.red(`✖ Failed to list events: ${err instanceof Error ? err.message : String(err)}`));
      process.exit(1);
    }
  });

// 4. arcade replay <eventId>
program
  .command('replay')
  .description('Replay a historical webhook event to a destination URL')
  .argument('<eventId>', 'ID of event to replay')
  .requiredOption('--to <url>', 'Destination URL to replay event to')
  .action(async (eventId, options) => {
    const config = loadConfig();
    const apiUrl = program.opts().apiUrl || config.apiUrl;

    if (!config.token) {
      console.error(pc.red('✖ Authentication required. Run `arcade login` first.'));
      process.exit(1);
    }

    console.log(pc.cyan(`Replaying event ${pc.bold(eventId)} to ${pc.bold(options.to)}...`));

    try {
      const res = await fetch(`${apiUrl}/api/events/${eventId}/replay`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${config.token}`,
        },
        body: JSON.stringify({
          destinationUrl: options.to,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }

      const comp = data.comparison;
      const statusColor = comp.replayedStatus >= 200 && comp.replayedStatus < 400 ? pc.green : pc.red;

      console.log(pc.green('\n✔ Replay completed successfully!'));
      console.log(`  Destination:       ${options.to}`);
      console.log(`  Original Ingest:   HTTP ${comp.originalStatus}`);
      console.log(`  Replayed Outcome:  ${statusColor(`HTTP ${comp.replayedStatus}`)} in ${comp.replayedLatencyMs}ms`);
      console.log(`  Body Match:        ${comp.bodyDiff?.isIdentical ? pc.green('Identical') : pc.yellow('Differentiated')}`);
      console.log();
    } catch (err: unknown) {
      console.error(pc.red(`✖ Replay failed: ${err instanceof Error ? err.message : String(err)}`));
      process.exit(1);
    }
  });

// 5. arcade listen --to <localUrl>
program
  .command('listen')
  .description('Forward captured webhooks in real-time to a local server')
  .requiredOption('--to <url>', 'Local destination URL (e.g. http://localhost:3000/webhook)')
  .option('--endpoint <id>', 'Specific endpoint ID to listen for')
  .action(async (options) => {
    const config = loadConfig();
    const apiUrl = program.opts().apiUrl || config.apiUrl;

    if (!config.token) {
      console.error(pc.red('✖ Authentication required. Run `arcade login` first.'));
      process.exit(1);
    }

    const dest = options.to;
    console.log(pc.bold(pc.cyan('\n  Webhook Arcade Real-Time Forwarder')));
    console.log(pc.dim('  --------------------------------------------------------'));
    console.log(`  Forwarding live events to: ${pc.bold(pc.green(dest))}`);
    console.log(`  Gateway Server:            ${apiUrl}`);
    if (options.endpoint) {
      console.log(`  Filtered Endpoint ID:      ${options.endpoint}`);
    }
    console.log(pc.dim('  Press Ctrl+C to stop listening.\n'));

    const socket = io(apiUrl, {
      auth: { token: config.token },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socket.on('connect', () => {
      console.log(pc.dim(`  [${new Date().toLocaleTimeString()}] Connected and authenticated to event stream.`));
      if (options.endpoint) {
        socket.emit('join:endpoint', options.endpoint);
      }
    });

    socket.on('connect_error', (err) => {
      console.log(pc.red(`  [${new Date().toLocaleTimeString()}] Socket connection error: ${err.message}`));
    });

    socket.on('error:forbidden', (err) => {
      console.log(pc.red(`  [${new Date().toLocaleTimeString()}] Access denied: ${err.message}`));
    });

    socket.on('event:captured', async (ev: any) => {
      // Filter if specific endpoint was requested
      if (options.endpoint && ev.endpointId !== options.endpoint) {
        return;
      }

      const time = new Date().toLocaleTimeString();
      console.log(`\n  ${pc.dim(time)} ${pc.bold(pc.magenta(ev.method))} ${ev.path} -> Forwarding to ${dest}`);

      try {
        const startTime = performance.now();
        const headersToSend = { ...(ev.headers || {}) };
        delete headersToSend['host'];
        delete headersToSend['content-length'];

        const res = await fetch(dest, {
          method: ev.method,
          headers: headersToSend,
          body: ev.rawBody || undefined,
        });

        const latency = Math.round(performance.now() - startTime);
        const statusColor = res.status >= 200 && res.status < 400 ? pc.green : pc.red;
        console.log(`  ${statusColor(`✔ HTTP ${res.status}`)} in ${latency}ms`);
      } catch (err: unknown) {
        console.log(`  ${pc.red('✖ Forward failed:')} ${err instanceof Error ? err.message : String(err)}`);
      }
    });

    socket.on('disconnect', (reason) => {
      console.log(pc.yellow(`\n  Disconnected from event stream (${reason}). Reconnecting...`));
    });
  });

program.parse(process.argv);
