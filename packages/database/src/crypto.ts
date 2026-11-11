import crypto from 'node:crypto';

/**
 * Generates a cryptographically random, URL-safe endpoint token (32 bytes entropy)
 * Format: wha_{prefix}_{randomBase64Url}
 */
export function generateEndpointToken(): { fullToken: string; tokenPrefix: string; tokenHash: string } {
  const randomBytes = crypto.randomBytes(32);
  const tokenBody = randomBytes.toString('base64url');
  const fullToken = `wha_live_${tokenBody}`;
  const tokenPrefix = `wha_live_${tokenBody.substring(0, 6)}`;
  const tokenHash = hashToken(fullToken);

  return { fullToken, tokenPrefix, tokenHash };
}

/**
 * Computes a secure SHA-256 hash of a token for safe indexing and lookup
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token.trim()).digest('hex');
}

/**
 * Encrypts sensitive secrets at rest using AES-256-GCM
 */
export function encryptSecret(plainText: string, keyHex: string): string {
  // Key must be 32 bytes (64 hex characters)
  const key = Buffer.from(keyHex.padEnd(64, '0').slice(0, 64), 'hex');
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  let encrypted = cipher.update(plainText, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag().toString('hex');

  // Format: iv:authTag:ciphertext
  return `${iv.toString('hex')}:${authTag}:${encrypted}`;
}

/**
 * Decrypts an AES-256-GCM encrypted secret
 */
export function decryptSecret(cipherPayload: string, keyHex: string): string {
  const parts = cipherPayload.split(':');
  if (parts.length !== 3) {
    throw new Error('Malformed encrypted secret payload');
  }

  const [ivHex, authTagHex, encryptedHex] = parts;
  const key = Buffer.from(keyHex.padEnd(64, '0').slice(0, 64), 'hex');
  const iv = Buffer.from(ivHex!, 'hex');
  const authTag = Buffer.from(authTagHex!, 'hex');

  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encryptedHex!, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

