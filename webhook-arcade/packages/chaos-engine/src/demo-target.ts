import http from 'node:http';

export interface DemoTargetServer {
  server: http.Server;
  port: number;
  url: string;
  close: () => Promise<void>;
  resetStats: () => void;
  getStats: () => {
    naiveCount: number;
    idempotentCount: number;
    processedIds: string[];
  };
}

/**
 * Creates an in-process demo target HTTP server with two routes:
 * 1. POST /naive: Fails intermittently and does not deduplicate requests (fails idempotency)
 * 2. POST /idempotent: Tracks event IDs and responds with deduplication acknowledgement
 */
export async function createDemoTargetServer(port = 0): Promise<DemoTargetServer> {
  const processedEventIds = new Set<string>();
  let naiveCount = 0;
  let idempotentCount = 0;

  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

    const chunks: Buffer[] = [];
    req.on('data', (c: Buffer) => chunks.push(c));
    req.on('end', () => {
      const bodyStr = Buffer.concat(chunks).toString('utf8');
      let bodyJson: Record<string, unknown> = {};
      try {
        bodyJson = JSON.parse(bodyStr);
      } catch {
        // non-json or malformed
      }

      const eventId =
        (bodyJson['id'] as string) ||
        (req.headers['x-arcade-attempt'] as string) ||
        (req.headers['x-event-id'] as string) ||
        'default_evt';

      if (url.pathname === '/naive') {
        naiveCount++;
        // Naive handler:
        // If x-simulate-status header is present, honor it
        const simStatus = req.headers['x-simulate-status'];
        if (simStatus) {
          const code = parseInt(String(simStatus), 10);
          res.writeHead(code, { 'content-type': 'application/json' });
          res.end(JSON.stringify({ error: 'simulated_failure', code }));
          return;
        }

        // Fails if invalid JSON was sent
        if (req.headers['content-type']?.includes('application/json') && Object.keys(bodyJson).length === 0 && bodyStr.length > 0) {
          res.writeHead(400, { 'content-type': 'application/json' });
          res.end(JSON.stringify({ error: 'invalid_json_payload' }));
          return;
        }

        // Blindly processes every duplicate without deduplication
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(
          JSON.stringify({
            status: 'processed_blindly',
            executionNumber: naiveCount,
            eventId,
            warning: 'No deduplication performed',
          }),
        );
        return;
      }

      if (url.pathname === '/idempotent') {
        idempotentCount++;

        // If duplicate event detected
        if (processedEventIds.has(eventId)) {
          res.writeHead(200, { 'content-type': 'application/json' });
          res.end(
            JSON.stringify({
              status: 'success',
              idempotent: true,
              duplicate: true,
              already_processed: true,
              eventId,
              message: 'Event was previously processed. Duplicate delivery acknowledged safely.',
            }),
          );
          return;
        }

        processedEventIds.add(eventId);
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(
          JSON.stringify({
            status: 'success',
            idempotent: true,
            duplicate: false,
            eventId,
            message: 'First delivery processed successfully.',
          }),
        );
        return;
      }

      // Default health check
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ service: 'webhook-arcade-demo-target', active: true }));
    });
  });

  await new Promise<void>((resolve) => {
    server.listen(port, '127.0.0.1', () => resolve());
  });

  const address = server.address();
  const actualPort = typeof address === 'object' && address ? address.port : port;

  return {
    server,
    port: actualPort,
    url: `http://127.0.0.1:${actualPort}`,
    resetStats: () => {
      processedEventIds.clear();
      naiveCount = 0;
      idempotentCount = 0;
    },
    getStats: () => ({
      naiveCount,
      idempotentCount,
      processedIds: Array.from(processedEventIds),
    }),
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.close((err) => (err ? reject(err) : resolve()));
      }),
  };
}
