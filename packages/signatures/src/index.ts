import crypto from 'node:crypto';

export type SignatureScheme = 'github' | 'stripe' | 'generic-sha256' | 'generic-sha1';

export interface SignatureVerificationResult {
  valid: boolean;
  scheme: SignatureScheme;
  computedSignature: string;
  receivedSignature: string;
  error?: string;
}

/**
 * Computes GitHub X-Hub-Signature-256 header value:
 * "sha256=" + HMAC-SHA256(secret, rawPayload)
 */
export function computeGithubSignature(rawPayload: Buffer, secret: string): string {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(rawPayload);
  return `sha256=${hmac.digest('hex')}`;
}

/**
 * Computes Stripe-style timestamped signature header:
 * "t=" + timestamp + ",v1=" + HMAC-SHA256(secret, timestamp + "." + rawPayload)
 */
export function computeStripeSignature(rawPayload: Buffer, secret: string, timestamp?: number): string {
  const t = timestamp ?? Math.floor(Date.now() / 1000);
  const payloadToSign = Buffer.concat([Buffer.from(`${t}.`, 'utf8'), rawPayload]);
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payloadToSign);
  const sig = hmac.digest('hex');
  return `t=${t},v1=${sig}`;
}

/**
 * Computes generic HMAC over raw payload bytes
 */
export function computeGenericHmac(rawPayload: Buffer, secret: string, algorithm: 'sha256' | 'sha1' | 'sha512' = 'sha256'): string {
  const hmac = crypto.createHmac(algorithm, secret);
  hmac.update(rawPayload);
  return hmac.digest('hex');
}

/**
 * Timing-safe string comparison to prevent timing attacks
 */
export function timingSafeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Verifies inbound signature header against secret and raw payload
 */
export function verifySignature(
  rawPayload: Buffer,
  signatureHeader: string,
  secret: string,
  scheme: SignatureScheme,
  maxToleranceSeconds = 300,
): SignatureVerificationResult {
  try {
    if (!signatureHeader || !secret) {
      return {
        valid: false,
        scheme,
        computedSignature: '',
        receivedSignature: signatureHeader || '',
        error: 'Missing signature header or signing secret',
      };
    }

    if (scheme === 'github') {
      const expected = computeGithubSignature(rawPayload, secret);
      const valid = timingSafeCompare(expected, signatureHeader.trim());
      return {
        valid,
        scheme,
        computedSignature: expected,
        receivedSignature: signatureHeader,
      };
    }

    if (scheme === 'stripe') {
      const parts = signatureHeader.split(',').reduce<Record<string, string>>((acc, curr) => {
        const [k, v] = curr.trim().split('=');
        if (k && v) acc[k] = v;
        return acc;
      }, {});

      const t = parts['t'];
      const v1 = parts['v1'];

      if (!t || !v1) {
        return {
          valid: false,
          scheme,
          computedSignature: '',
          receivedSignature: signatureHeader,
          error: 'Malformed Stripe signature header (missing t or v1)',
        };
      }

      const timestamp = parseInt(t, 10);
      const now = Math.floor(Date.now() / 1000);
      if (Math.abs(now - timestamp) > maxToleranceSeconds) {
        return {
          valid: false,
          scheme,
          computedSignature: '',
          receivedSignature: signatureHeader,
          error: `Signature timestamp expired or skewed (${Math.abs(now - timestamp)}s > ${maxToleranceSeconds}s)`,
        };
      }

      const expectedFull = computeStripeSignature(rawPayload, secret, timestamp);
      const expectedV1 = expectedFull.split('v1=')[1] ?? '';
      const valid = timingSafeCompare(expectedV1, v1);

      return {
        valid,
        scheme,
        computedSignature: expectedFull,
        receivedSignature: signatureHeader,
      };
    }

    // generic
    const algo = scheme === 'generic-sha1' ? 'sha1' : 'sha256';
    const cleanReceived = signatureHeader.replace(/^(sha256=|sha1=)/i, '').trim();
    const expected = computeGenericHmac(rawPayload, secret, algo);
    const valid = timingSafeCompare(expected, cleanReceived);

    return {
      valid,
      scheme,
      computedSignature: expected,
      receivedSignature: cleanReceived,
    };
  } catch (err: unknown) {
    return {
      valid: false,
      scheme,
      computedSignature: '',
      receivedSignature: signatureHeader,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * Generates an intentionally invalid/corrupt signature for chaos simulation
 */
export function generateCorruptSignature(validSignature: string): string {
  if (validSignature.length === 0) return 'invalid_signature_chaos_test';
  // Invert the last character
  const lastChar = validSignature[validSignature.length - 1];
  const replacement = lastChar === 'a' ? 'b' : 'a';
  return validSignature.slice(0, -1) + replacement;
}

