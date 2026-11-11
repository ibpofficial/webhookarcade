import net from 'node:net';
import dns from 'node:dns/promises';

export interface SSRFValidationOptions {
  allowLocalhost?: boolean;
}

export interface SSRFValidationResult {
  safe: boolean;
  resolvedIp?: string;
  error?: string;
}

/**
 * Parses any numeric IPv4 representation (dot-decimal, octal, hex, dword) into a 32-bit unsigned integer
 */
export function parseIPv4ToNumber(ipStr: string): number | null {
  const parts = ipStr.trim().split('.');
  if (parts.length > 4 || parts.length === 0) return null;

  let acc = 0;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]!;
    let val: number;

    if (/^0x[0-9a-f]+$/i.test(part)) {
      val = parseInt(part, 16);
    } else if (/^0[0-7]+$/.test(part) && part.length > 1) {
      val = parseInt(part, 8);
    } else if (/^\d+$/.test(part)) {
      val = parseInt(part, 10);
    } else {
      return null;
    }

    if (isNaN(val) || val < 0) return null;

    if (i === parts.length - 1) {
      const maxVal = Math.pow(256, 4 - i) - 1;
      if (val > maxVal) return null;
      acc = (acc * Math.pow(256, 4 - i)) + val;
    } else {
      if (val > 255) return null;
      acc = (acc * 256) + val;
    }
  }

  return (acc >>> 0);
}

export function isPrivateOrReservedIPv4(ipNum: number, allowLocalhost = false): boolean {
  const octet1 = (ipNum >>> 24) & 255;
  const octet2 = (ipNum >>> 16) & 255;

  // 0.0.0.0/8 (Current network)
  if (octet1 === 0) return true;

  // 127.0.0.0/8 (Loopback)
  if (octet1 === 127) {
    return !allowLocalhost;
  }

  // 10.0.0.0/8 (RFC 1918 private)
  if (octet1 === 10) return true;

  // 172.16.0.0/12 (RFC 1918 private: 172.16.0.0 - 172.31.255.255)
  if (octet1 === 172 && octet2 >= 16 && octet2 <= 31) return true;

  // 192.168.0.0/16 (RFC 1918 private)
  if (octet1 === 192 && octet2 === 168) return true;

  // 169.254.0.0/16 (Link-local & AWS/GCP metadata 169.254.169.254)
  if (octet1 === 169 && octet2 === 254) return true;

  // 100.64.0.0/10 (CGNAT / Shared address space)
  if (octet1 === 100 && octet2 >= 64 && octet2 <= 127) return true;

  // 192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24 (Documentation / Test-Net)
  if (octet1 === 192 && octet2 === 0 && ((ipNum >>> 8) & 255) === 2) return true;
  if (octet1 === 198 && octet2 === 51 && ((ipNum >>> 8) & 255) === 100) return true;
  if (octet1 === 203 && octet2 === 0 && ((ipNum >>> 8) & 255) === 113) return true;

  // 224.0.0.0/4 (Multicast) & 240.0.0.0/4 (Reserved)
  if (octet1 >= 224) return true;

  return false;
}

/**
 * Validates an IPv6 address against loopback, private ULA, link-local, and IPv4-mapped IPv6
 */
export function isPrivateOrReservedIPv6(ipStr: string, allowLocalhost = false): boolean {
  const normalized = ipStr.toLowerCase().trim();

  // ::1 loopback
  if (normalized === '::1' || normalized === '0:0:0:0:0:0:0:1') {
    return !allowLocalhost;
  }

  // :: unspecified
  if (normalized === '::' || normalized === '0:0:0:0:0:0:0:0') {
    return true;
  }

  // IPv4-mapped IPv6: ::ffff:192.168.1.1 or ::ffff:7f00:1
  if (normalized.startsWith('::ffff:')) {
    const v4Part = normalized.replace('::ffff:', '');
    if (net.isIPv4(v4Part)) {
      const parsedNum = parseIPv4ToNumber(v4Part);
      if (parsedNum !== null) {
        return isPrivateOrReservedIPv4(parsedNum, allowLocalhost);
      }
    }
  }

  // Unique Local Address (ULA) fc00::/7 (fc00... or fd00...)
  if (/^f[cd][0-9a-f]{2}:/i.test(normalized)) {
    return true;
  }

  // Link-local unicast fe80::/10 (fe80... to febf...)
  if (/^fe[89ab][0-9a-f]:/i.test(normalized)) {
    return true;
  }

  // Multicast ff00::/8
  if (/^ff[0-9a-f]{2}:/i.test(normalized)) {
    return true;
  }

  return false;
}

/**
 * Comprehensive SSRF validator for target URLs:
 * 1. Protocol check (http/https only)
 * 2. Hostname parsing
 * 3. DNS resolution with IP checks
 */
export async function validateTargetUrl(
  targetUrl: string,
  options: SSRFValidationOptions = {},
): Promise<SSRFValidationResult> {
  const allowLocalhost = options.allowLocalhost ?? false;

  let parsed: URL;
  try {
    parsed = new URL(targetUrl);
  } catch {
    return { safe: false, error: 'Malformed URL' };
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { safe: false, error: `Disallowed protocol "${parsed.protocol}". Only HTTP and HTTPS are permitted.` };
  }

  // Remove brackets from IPv6 hostnames like [::1]
  const hostname = parsed.hostname.replace(/^\[|\]$/g, '').trim().toLowerCase();

  if (!hostname) {
    return { safe: false, error: 'Empty hostname' };
  }

  // Block localhost aliases if localhost is disallowed
  if (!allowLocalhost) {
    if (
      hostname === 'localhost' ||
      hostname.endsWith('.localhost') ||
      hostname === 'localhost.' ||
      hostname === '127.0.0.1' ||
      hostname === '0.0.0.0' ||
      hostname === '::1'
    ) {
      return { safe: false, error: 'Localhost and loopback destinations are forbidden.' };
    }
  }

  // Check if hostname is an immediate IP literal (e.g. 127.0.0.1, 0177.0.0.1, 0x7f000001, 2130706433, ::1)
  const directIpv4Num = parseIPv4ToNumber(hostname);
  if (directIpv4Num !== null) {
    if (isPrivateOrReservedIPv4(directIpv4Num, allowLocalhost)) {
      return {
        safe: false,
        error: `IP address (${hostname}) resolves to private, loopback, or reserved network range.`,
      };
    }
    const dotDecimal = [
      (directIpv4Num >>> 24) & 255,
      (directIpv4Num >>> 16) & 255,
      (directIpv4Num >>> 8) & 255,
      directIpv4Num & 255,
    ].join('.');
    return { safe: true, resolvedIp: dotDecimal };
  }

  if (net.isIPv6(hostname)) {
    if (isPrivateOrReservedIPv6(hostname, allowLocalhost)) {
      return {
        safe: false,
        error: `IPv6 address (${hostname}) resolves to private, loopback, or reserved network range.`,
      };
    }
    return { safe: true, resolvedIp: hostname };
  }

  // Resolve hostname via DNS
  try {
    const addresses = await dns.lookup(hostname, { all: true });
    if (!addresses || addresses.length === 0) {
      return { safe: false, error: `DNS lookup failed for host ${hostname}: No records found.` };
    }

    for (const record of addresses) {
      if (record.family === 4) {
        const num = parseIPv4ToNumber(record.address);
        if (num !== null && isPrivateOrReservedIPv4(num, allowLocalhost)) {
          return {
            safe: false,
            error: `Host ${hostname} resolves to restricted address ${record.address}`,
          };
        }
      } else if (record.family === 6) {
        if (isPrivateOrReservedIPv6(record.address, allowLocalhost)) {
          return {
            safe: false,
            error: `Host ${hostname} resolves to restricted IPv6 address ${record.address}`,
          };
        }
      }
    }

    // Pin to the first validated IP address to prevent DNS rebinding
    const pinnedIp = addresses[0]!.address;
    return { safe: true, resolvedIp: pinnedIp };
  } catch (err: unknown) {
    return {
      safe: false,
      error: `DNS lookup failed for host ${hostname}: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
}
