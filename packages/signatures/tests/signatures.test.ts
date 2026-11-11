import { describe, it, expect } from 'vitest';
import {
  computeGithubSignature,
  computeStripeSignature,
  verifySignature,
  generateCorruptSignature,
} from '../src/index.js';

describe('Signatures Engine', () => {
  const secret = 'whsec_test_secret_key_12345';
  const payload = Buffer.from(JSON.stringify({ id: 'evt_123', amount: 4200 }));

  it('computes and verifies valid GitHub HMAC signature', () => {
    const sig = computeGithubSignature(payload, secret);
    expect(sig).toMatch(/^sha256=[a-f0-9]{64}$/);

    const verification = verifySignature(payload, sig, secret, 'github');
    expect(verification.valid).toBe(true);
  });

  it('rejects tampered GitHub signature', () => {
    const sig = computeGithubSignature(payload, secret);
    const tampered = generateCorruptSignature(sig);

    const verification = verifySignature(payload, tampered, secret, 'github');
    expect(verification.valid).toBe(false);
  });

  it('computes and verifies valid Stripe signature with timestamp', () => {
    const now = Math.floor(Date.now() / 1000);
    const sig = computeStripeSignature(payload, secret, now);
    expect(sig).toContain(`t=${now},v1=`);

    const verification = verifySignature(payload, sig, secret, 'stripe');
    expect(verification.valid).toBe(true);
  });

  it('rejects expired Stripe signature', () => {
    const expiredTimestamp = Math.floor(Date.now() / 1000) - 500; // 500s ago
    const sig = computeStripeSignature(payload, secret, expiredTimestamp);

    const verification = verifySignature(payload, sig, secret, 'stripe', 300);
    expect(verification.valid).toBe(false);
    expect(verification.error).toContain('expired');
  });
});
