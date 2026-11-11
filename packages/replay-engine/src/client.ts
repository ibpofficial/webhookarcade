import http from 'node:http';
import https from 'node:https';
import type { ReplayResponseComparison } from '@webhook-arcade/shared';
import { validateTargetUrl, type SSRFValidationOptions } from './ssrf.js';

export interface DispatchRequestOptions extends SSRFValidationOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  timeoutMs?: number;
  maxResponseSizeBytes?: number;
  followRedirects?: boolean;
  maxRedirects?: number;
  redirectCount?: number;
}

export interface DispatchResponseResult {
  statusCode: number;
  statusText: string;
  headers: Record<string, string>;
  body: string;
  latencyMs: number;
  resolvedIp: string;
}

/**
 * Dispatches an outbound HTTP/S request with strict SSRF checks and pinned IP socket lookup
 */
export async function dispatchReplayRequest(
  targetUrl: string,
  options: DispatchRequestOptions = {},
): Promise<DispatchResponseResult> {
  const validation = await validateTargetUrl(targetUrl, options);
  if (!validation.safe || !validation.resolvedIp) {
    throw new Error(`SSRF Validation Blocked Request: ${validation.error || 'Destination IP not permitted'}`);
  }

  const pinnedIp = validation.resolvedIp;
  const parsed = new URL(targetUrl);
  const isHttps = parsed.protocol === 'https:';
  const method = (options.method || 'POST').toUpperCase();
  const timeoutMs = options.timeoutMs ?? 10000;
  const maxBytes = options.maxResponseSizeBytes ?? 2 * 1024 * 1024; // 2MB

  const customLookup = (
    _hostname: string,
    _opts: unknown,
    callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void,
  ) => {
    const family = pinnedIp.includes(':') ? 6 : 4;
    callback(null, pinnedIp, family);
  };

  const agentOptions = {
    lookup: customLookup,
    keepAlive: false,
  };

  const agent = isHttps ? new https.Agent(agentOptions) : new http.Agent(agentOptions);

  return new Promise((resolve, reject) => {
    const startTime = performance.now();

    const reqHeaders: Record<string, string> = {
      'User-Agent': 'Webhook-Arcade-Replay/0.1',
      ...(options.headers || {}),
    };

    if (options.body && !reqHeaders['content-length'] && method !== 'GET') {
      reqHeaders['content-length'] = String(Buffer.byteLength(options.body, 'utf8'));
    }

    const client = isHttps ? https : http;

    const req = client.request(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port: parsed.port || (isHttps ? 443 : 80),
        path: parsed.pathname + parsed.search,
        method,
        headers: reqHeaders,
        agent,
        timeout: timeoutMs,
      },
      (res) => {
        let totalBytes = 0;
        const chunks: Buffer[] = [];

        res.on('data', (chunk: Buffer) => {
          totalBytes += chunk.length;
          if (totalBytes > maxBytes) {
            req.destroy();
            reject(new Error(`Response exceeded maximum permitted size of ${maxBytes} bytes`));
            return;
          }
          chunks.push(chunk);
        });

        res.on('end', async () => {
          const latencyMs = Math.round(performance.now() - startTime);
          const body = Buffer.concat(chunks).toString('utf8');

          const responseHeaders: Record<string, string> = {};
          for (const [k, v] of Object.entries(res.headers)) {
            if (v !== undefined) {
              responseHeaders[k.toLowerCase()] = Array.isArray(v) ? v.join(', ') : v;
            }
          }

          const statusCode = res.statusCode ?? 0;
          const location = responseHeaders['location'];

          // If followRedirects is enabled and status is a redirect
          if (
            options.followRedirects &&
            location &&
            [301, 302, 303, 307, 308].includes(statusCode)
          ) {
            const currentCount = options.redirectCount ?? 0;
            const maxRedirects = options.maxRedirects ?? 3;
            if (currentCount >= maxRedirects) {
              reject(new Error(`Exceeded maximum redirect limit of ${maxRedirects}`));
              return;
            }

            try {
              const redirectUrl = new URL(location, targetUrl).toString();
              const redirectResult = await dispatchReplayRequest(redirectUrl, {
                ...options,
                redirectCount: currentCount + 1,
              });
              resolve(redirectResult);
              return;
            } catch (err: unknown) {
              reject(err);
              return;
            }
          }

          resolve({
            statusCode,
            statusText: res.statusMessage ?? '',
            headers: responseHeaders,
            body,
            latencyMs,
            resolvedIp: pinnedIp,
          });
        });
      },
    );

    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Request timed out after ${timeoutMs}ms`));
    });

    req.on('error', (err) => {
      reject(new Error(`Network error dispatching request: ${err.message}`));
    });

    if (options.body && method !== 'GET') {
      req.write(options.body);
    }
    req.end();
  });
}

/**
 * Computes side-by-side comparison between original captured response and replayed response
 */
export function compareResponses(
  original: { statusCode: number; body?: string; latencyMs?: number },
  replayed: DispatchResponseResult,
): ReplayResponseComparison {
  const originalBodyStr = original.body ?? '';
  const replayedBodyStr = replayed.body ?? '';

  return {
    originalStatus: original.statusCode,
    replayedStatus: replayed.statusCode,
    originalLatencyMs: original.latencyMs,
    replayedLatencyMs: replayed.latencyMs,
    statusMatch: original.statusCode === replayed.statusCode,
    bodyDiff: {
      original: originalBodyStr,
      replayed: replayedBodyStr,
      isIdentical: originalBodyStr === replayedBodyStr,
    },
    headers: replayed.headers,
    replayedAt: new Date().toISOString(),
  };
}

