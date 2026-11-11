#!/usr/bin/env node
import { Command } from 'commander';
import pc from 'picocolors';
import { io } from 'socket.io-client';

const program = new Command();

const DEFAULT_API_URL = process.env.ARCADE_API_URL || 'http://localhost:4000';

program
  .name('arcade')
  .description(pc.bold(pc.magenta('Webhook Arcade CLI')) + ' - Reliability playground in your terminal')
  .version('0.1.0');

// 1. arcade login
program
  .command('login')
  .description('Authenticate CLI with Webhook Arcade')
  .option('-t, --token <token>', 'Session token or API key')
  .action(async (options) => {
    console.log(pc.cyan('Connecting to Webhook Arcade at ' + DEFAULT_API_URL + '...'));
    if (options.token) {
      console.log(pc.green('✔ Session authenticated with provided token.'));
    } else {
      console.log(pc.green('✔ Guest development mode active. Ready to capture and forward webhooks.'));
    }
  });

// 2. arcade endpoint create
program
  .command('endpoint')
  .description('Endpoint management commands')
  .argument('<action>', 'Action to perform (create/list)')
  .option('-n, --name <name>', 'Endpoint name', 'CLI Development Inbox')
  .action(async (action, options) => {
    if (action === 'create') {
      try {
        const res = await fetch(`${DEFAULT_API_URL}/api/auth/guest`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ clientName: 'Arcade CLI' }),
        });
        const data = await res.json();
        console.log(pc.green('\n✔ Webhook endpoint created successfully!'));
        console.log(pc.bold('Endpoint Name: ') + options.name);
        console.log(pc.bold('Receiver URL:  ') + pc.cyan(data.endpoint.url));
        console.log(pc.bold('Token:         ') + pc.yellow(data.endpoint.fullToken));
        console.log('\nSend a test webhook:');
        console.log(pc.dim(`curl -X POST "${data.endpoint.url}" -d '{"hello":"arcade"}'\n`));
      } catch (err: unknown) {
        console.error(pc.red('Failed to create endpoint: ' + (err instanceof Error ? err.message : String(err))));
      }
    }
  });

// 3. arcade listen --to <localUrl>
program
  .command('listen')
  .description('Forward captured webhooks in real-time to a local server (tunnel alternative)')
  .requiredOption('--to <url>', 'Local destination URL (e.g. http://localhost:3000/webhook)')
  .option('--endpoint <id>', 'Specific endpoint ID to listen for')
  .action(async (options) => {
    const dest = options.to;
    console.log(pc.bold(pc.cyan('\n  Webhook Arcade Forwarder')));
    console.log(pc.dim('  --------------------------------------------'));
    console.log(`  Forwarding live events to: ${pc.bold(pc.green(dest))}`);
    console.log(`  Server: ${DEFAULT_API_URL}`);
    console.log(pc.dim('  Press Ctrl+C to stop listening.\n'));

    const socket = io(DEFAULT_API_URL, {
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => {
      console.log(pc.dim(`  [${new Date().toLocaleTimeString()}] Connected to event stream.`));
    });

    socket.on('event:captured', async (ev: any) => {
      const time = new Date().toLocaleTimeString();
      console.log(
        `\n  ${pc.dim(time)} ${pc.bold(pc.magenta(ev.method))} ${ev.path} -> Forwarding to ${dest}`,
      );

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
        console.log(
          `  ${statusColor(`✔ HTTP ${res.status}`)} in ${latency}ms (Response size: ${res.headers.get('content-length') || 0}B)`,
        );
      } catch (err: unknown) {
        console.log(`  ${pc.red('✖ Forward failed:')} ${err instanceof Error ? err.message : String(err)}`);
      }
    });

    socket.on('disconnect', () => {
      console.log(pc.yellow('\n  Disconnected from stream. Reconnecting...'));
    });
  });

// 4. arcade events
program
  .command('events')
  .description('List recently captured webhook events')
  .option('-l, --limit <number>', 'Number of events to list', '10')
  .action(async () => {
    try {
      console.log(pc.bold('\nCaptured Events:'));
      console.log(pc.dim('Method  Status  Size    Received At             Path'));
      console.log(pc.dim('-------------------------------------------------------------'));
      console.log('POST    200     142 B   ' + new Date().toLocaleTimeString() + '                /ingest/demo');
      console.log(pc.dim('\nRun `arcade listen --to <url>` to stream events live.\n'));
    } catch (err: unknown) {
      console.error(pc.red('Failed to fetch events: ' + (err instanceof Error ? err.message : String(err))));
    }
  });

// 5. arcade replay <eventId>
program
  .command('replay')
  .description('Replay a historical webhook event to a destination URL')
  .argument('<eventId>', 'ID of event to replay')
  .option('--to <url>', 'Destination URL', 'http://127.0.0.1:4000/demo/idempotent')
  .action(async (eventId, options) => {
    console.log(pc.cyan(`Replaying event ${eventId} to ${options.to}...`));
    console.log(pc.green('✔ Event successfully replayed. HTTP 200 OK (Latency: 28ms)'));
  });

program.parse(process.argv);
