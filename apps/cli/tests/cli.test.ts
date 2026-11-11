import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import { buildServer } from '../../api/src/server.js';
import type { FastifyInstance } from 'fastify';

const execFileAsync = promisify(execFile);
const cliPath = path.resolve(__dirname, '../dist/index.js');

describe('CLI Integration Suite (Real Server Spawning)', () => {
  let app: FastifyInstance;
  let apiPort: number;
  let apiUrl: string;
  let targetServer: http.Server;
  let targetUrl: string;

  beforeAll(async () => {
    process.env.USE_SQLITE = 'true';
    process.env.ALLOW_LOCALHOST_TARGETS = 'true';

    // 1. Target server for replay
    targetServer = http.createServer((req, res) => {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ status: 'cli_replay_ack' }));
    });
    await new Promise<void>((resolve) => targetServer.listen(0, '127.0.0.1', () => resolve()));
    const targetPort = (targetServer.address() as AddressInfo).port;
    targetUrl = `http://127.0.0.1:${targetPort}/target`;

    // 2. Real API server
    const server = await buildServer();
    app = server.fastify;
    await app.listen({ port: 0, host: '127.0.0.1' });
    apiPort = (app.server.address() as AddressInfo).port;
    apiUrl = `http://127.0.0.1:${apiPort}`;
  });

  afterAll(async () => {
    await app.close();
    await new Promise<void>((resolve) => targetServer.close(() => resolve()));
  });

  it('prints CLI help information and exit code 0', async () => {
    const { stdout, stderr } = await execFileAsync(process.execPath, [cliPath, '--help']);
    expect(stdout).toContain('Webhook Arcade CLI');
    expect(stdout).toContain('login');
    expect(stdout).toContain('endpoint');
    expect(stdout).toContain('events');
    expect(stdout).toContain('replay');
    expect(stdout).toContain('listen');
    expect(stderr).toBe('');
  });

  it('authenticates via arcade login and manages endpoints and events', async () => {
    // 1. arcade login --api-url <url>
    const loginResult = await execFileAsync(process.execPath, [
      cliPath,
      'login',
      '--api-url',
      apiUrl,
    ]);
    expect(loginResult.stdout).toContain('Initialized ephemeral guest developer session');

    // Extract full token from receiver URL printed during login
    const tokenMatch = loginResult.stdout.match(/\/ingest\/(wha_live_[a-zA-Z0-9_-]+)/);
    expect(tokenMatch).not.toBeNull();
    const fullToken = tokenMatch![1];

    // 2. arcade endpoint list --api-url <url>
    const listEpResult = await execFileAsync(process.execPath, [
      cliPath,
      'endpoint',
      'list',
      '--api-url',
      apiUrl,
    ]);
    expect(listEpResult.stdout).toContain('Configured Endpoints');
    expect(listEpResult.stdout).toContain('Default Inbox');

    // 3. Dispatch a real webhook to this endpoint
    const ingestRes = await fetch(`${apiUrl}/ingest/${fullToken}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ cli_test: true, amount: 4200 }),
    });
    expect(ingestRes.status).toBe(200);

    // 4. arcade events --api-url <url>
    const eventsResult = await execFileAsync(process.execPath, [
      cliPath,
      'events',
      '--api-url',
      apiUrl,
    ]);
    expect(eventsResult.stdout).toContain('Captured Events');
    expect(eventsResult.stdout).toContain('POST');

    // Extract event ID
    const eventIdMatch = eventsResult.stdout.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/);
    expect(eventIdMatch).not.toBeNull();
    const eventId = eventIdMatch![0];

    // 5. arcade replay <eventId> --to <targetUrl> --api-url <url>
    const replayResult = await execFileAsync(process.execPath, [
      cliPath,
      'replay',
      eventId,
      '--to',
      targetUrl,
      '--api-url',
      apiUrl,
    ]);
    expect(replayResult.stdout).toContain('Replay completed successfully');
    expect(replayResult.stdout).toContain('HTTP 200');
  });
});
