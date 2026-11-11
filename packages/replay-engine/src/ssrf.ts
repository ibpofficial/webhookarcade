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
 * Parses any standard, uncompressed, or IPv4-embedded IPv6 address into eight 16-bit words.
 */
export function parseIPv6ToWords(ipStr: string): number[] | null {
  const clean = ipStr.replace(/^\[|\]$/g, '').trim().toLowerCase();
  if (!clean) return null;

  let v4Words: number[] = [];
  let v6Str = clean;

  // Check for embedded IPv4 at the end (e.g., ::ffff:192.168.1.1 or ::127.0.0.1)
  const lastColon = clean.lastIndexOf(':');
  if (lastColon !== -1) {
    const possibleV4 = clean.substring(lastColon + 1);
    if (possibleV4.includes('.')) {
      const v4Num = parseIPv4ToNumber(possibleV4);
      if (v4Num === null) return null;
      v4Words = [(v4Num >>> 16) & 0xffff, v4Num & 0xffff];
      v6Str = clean.substring(0, lastColon);
    }
  }

  const parts = v6Str.split('::');
  if (parts.length > 2) return null;

  const leftParts = parts[0] ? parts[0].split(':').filter(Boolean) : [];
  const rightParts = parts.length === 2 && parts[1] ? parts[1].split(':').filter(Boolean) : [];

  const totalSpecified = leftParts.length + rightParts.length + v4Words.length;
  if (parts.length === 1 && totalSpecified !== 8) return null;
  if (parts.length === 2 && totalSpecified > 7) return null;

  const leftWords: number[] = [];
  for (const part of leftParts) {
    if (!/^[0-9a-f]{1,4}$/i.test(part)) return null;
    leftWords.push(parseInt(part, 16));
  }

  const rightWords: number[] = [];
  for (const part of rightParts) {
    if (!/^[0-9a-f]{1,4}$/i.test(part)) return null;
    rightWords.push(parseInt(part, 16));
  }

  const missingZeros = 8 - (leftWords.length + rightWords.length + v4Words.length);
  const zeroWords = Array(Math.max(0, missingZeros)).fill(0);

  return [...leftWords, ...zeroWords, ...rightWords, ...v4Words];
}

/**
 * Validates an IPv6 address against loopback, private ULA, link-local, and IPv4-mapped IPv6
 */
export function isPrivateOrReservedIPv6(ipStr: string, allowLocalhost = false): boolean {
  const words = parseIPv6ToWords(ipStr);
  if (!words || words.length !== 8) {
    return true; // Malformed IPv6 treated as unsafe
  }

  const [w0, w1, w2, w3, w4, w5, w6, w7] = words;

  // :: Unspecified (all zeros)
  if (words.every((w) => w === 0)) {
    return true;
  }

  // ::1 Loopback
  if (w0 === 0 && w1 === 0 && w2 === 0 && w3 === 0 && w4 === 0 && w5 === 0 && w6 === 0 && w7 === 1) {
    return !allowLocalhost;
  }

  // IPv4-Mapped IPv6: ::ffff:0:0/96 (e.g. ::ffff:192.168.1.1 or ::ffff:7f00:1)
  if (w0 === 0 && w1 === 0 && w2 === 0 && w3 === 0 && w4 === 0 && w5 === 0xffff) {
    const ipv4Num = ((w6! << 16) | w7!) >>> 0;
    return isPrivateOrReservedIPv4(ipv4Num, allowLocalhost);
  }

  // IPv4-Compatible IPv6 (deprecated RFC 4291): ::0:0/96
  if (w0 === 0 && w1 === 0 && w2 === 0 && w3 === 0 && w4 === 0 && w5 === 0) {
    const ipv4Num = ((w6! << 16) | w7!) >>> 0;
    return isPrivateOrReservedIPv4(ipv4Num, allowLocalhost);
  }

  // NAT64 Well-Known Prefix: 64:ff9b::/96
  if (w0 === 0x0064 && w1 === 0xff9b && w2 === 0 && w3 === 0 && w4 === 0 && w5 === 0) {
    const ipv4Num = ((w6! << 16) | w7!) >>> 0;
    return isPrivateOrReservedIPv4(ipv4Num, allowLocalhost);
  }

  // 6to4 Relay / Anycast: 2002::/16
  if (w0 === 0x2002) {
    const ipv4Num = ((w1! << 16) | w2!) >>> 0;
    return isPrivateOrReservedIPv4(ipv4Num, allowLocalhost);
  }

  // Documentation Prefix: 2001:db8::/32
  if (w0 === 0x2001 && w1 === 0x0db8) {
    return true;
  }

  // Unique Local Address (ULA): fc00::/7 (fc00... to fdff...)
  if ((w0! & 0xfe00) === 0xfc00) {
    return true;
  }

  // Link-Local Unicast: fe80::/10 (fe80... to febf...)
  if ((w0! & 0xffc0) === 0xfe80) {
    return true;
  }

  // Site-Local Unicast (deprecated): fec0::/10 (fec0... to feff...)
  if ((w0! & 0xffc0) === 0xfec0) {
    return true;
  }

  // Multicast: ff00::/8
  if ((w0! & 0xff00) === 0xff00) {
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
