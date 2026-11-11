import { describe, it, expect } from 'vitest';
import { redactHeaders, parseRawPayload, generateCurlSnippet } from '../src/index.js';

describe('Webhook Engine', () => {
  it('redacts sensitive headers correctly', () => {
    const raw = {
      'User-Agent': 'GitHub-Hookshot',
      'Authorization': 'Bearer secret_token_abc',
      'X-Api-Key': 'key_123',
      'Content-Type': 'application/json',
    };

    const { sanitized, redactedKeys } = redactHeaders(raw);
    expect(sanitized['authorization']).toBe('[REDACTED]');
    expect(sanitized['x-api-key']).toBe('[REDACTED]');
    expect(sanitized['user-agent']).toBe('GitHub-Hookshot');
    expect(redactedKeys).toContain('authorization');
    expect(redactedKeys).toContain('x-api-key');
  });

  it('parses valid JSON without error', () => {
    const buf = Buffer.from('{"hello":"world"}');
    const res = parseRawPayload(buf, 'application/json');
    expect(res.isJson).toBe(true);
    expect(res.isMalformed).toBe(false);
    expect(res.parsed).toEqual({ hello: 'world' });
  });

  it('handles malformed JSON gracefully', () => {
    const buf = Buffer.from('{"hello": broken');
    const res = parseRawPayload(buf, 'application/json');
    expect(res.isJson).toBe(false);
    expect(res.isMalformed).toBe(true);
    expect(res.parsed).toBeNull();
  });

  it('generates copy-as-curl correctly', () => {
    const curl = generateCurlSnippet({
      method: 'POST',
      url: 'https://example.com/webhook',
      headers: { 'Content-Type': 'application/json' },
      rawBody: '{"test":true}',
    });
    expect(curl).toContain('curl -X POST');
    expect(curl).toContain('https://example.com/webhook');
    expect(curl).toContain('-H "Content-Type: application/json"');
    expect(curl).toContain("-d '{\"test\":true}'");
  });
});

