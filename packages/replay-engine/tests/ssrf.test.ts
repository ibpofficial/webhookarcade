import { describe, it, expect } from 'vitest';
import { validateTargetUrl, parseIPv4ToNumber } from '../src/ssrf.js';

describe('SSRF Protection Engine & IP Parser', () => {
  describe('parseIPv4ToNumber format conversions', () => {
    it('parses dot-decimal correctly', () => {
      expect(parseIPv4ToNumber('127.0.0.1')).toBe(2130706433);
      expect(parseIPv4ToNumber('10.0.0.1')).toBe(167772161);
      expect(parseIPv4ToNumber('192.168.1.100')).toBe(3232235876);
    });

    it('parses octal notations correctly', () => {
      // 0177.0.0.1 = 127.0.0.1
      expect(parseIPv4ToNumber('0177.0.0.1')).toBe(2130706433);
      // 012.0.0.1 = 10.0.0.1
      expect(parseIPv4ToNumber('012.0.0.1')).toBe(167772161);
    });

    it('parses hexadecimal notation correctly', () => {
      // 0x7f.0.0.1 = 127.0.0.1
      expect(parseIPv4ToNumber('0x7f.0.0.1')).toBe(2130706433);
      // 0x7f000001 = 127.0.0.1
      expect(parseIPv4ToNumber('0x7f000001')).toBe(2130706433);
    });

    it('parses dword single-integer format', () => {
      expect(parseIPv4ToNumber('2130706433')).toBe(2130706433);
    });
  });

  describe('validateTargetUrl security blocks', () => {
    it('blocks loopback 127.0.0.1 and variations', async () => {
      const loopbacks = [
        'http://127.0.0.1:8080/hook',
        'http://127.1:8080/hook',
        'http://0177.0.0.1:8080/hook',
        'http://0x7f.0.0.1:8080/hook',
        'http://0x7f000001:8080/hook',
        'http://2130706433:8080/hook',
        'http://localhost:8080/hook',
        'http://localhost.:8080/hook',
        'http://sub.localhost:8080/hook',
      ];

      for (const url of loopbacks) {
        const res = await validateTargetUrl(url, { allowLocalhost: false });
        expect(res.safe, `Expected ${url} to be blocked as loopback`).toBe(false);
      }
    });

    it('blocks 0.0.0.0', async () => {
      const res = await validateTargetUrl('http://0.0.0.0:3000/api', { allowLocalhost: false });
      expect(res.safe).toBe(false);
    });

    it('blocks IPv6 loopback [::1]', async () => {
      const res = await validateTargetUrl('http://[::1]:3000/api', { allowLocalhost: false });
      expect(res.safe).toBe(false);
    });

    it('blocks RFC 1918 private IPv4 ranges', async () => {
      const privates = [
        'http://10.0.0.1/admin',
        'http://10.254.254.254/secret',
        'http://172.16.0.1/metrics',
        'http://172.31.255.255/internal',
        'http://192.168.1.1/router',
        'http://192.168.0.254/api',
      ];

      for (const url of privates) {
        const res = await validateTargetUrl(url, { allowLocalhost: false });
        expect(res.safe, `Expected ${url} to be blocked as RFC 1918`).toBe(false);
      }
    });

    it('blocks Cloud Metadata service (169.254.169.254)', async () => {
      const metadata = [
        'http://169.254.169.254/latest/meta-data/',
        'http://169.254.1.1/internal',
        'http://0xa9fea9fe/metadata', // hex for 169.254.169.254
      ];

      for (const url of metadata) {
        const res = await validateTargetUrl(url, { allowLocalhost: false });
        expect(res.safe, `Expected cloud metadata ${url} to be blocked`).toBe(false);
      }
    });

    it('blocks non-HTTP protocols (file, ftp, gopher)', async () => {
      expect((await validateTargetUrl('file:///etc/passwd')).safe).toBe(false);
      expect((await validateTargetUrl('ftp://example.com/test')).safe).toBe(false);
      expect((await validateTargetUrl('gopher://127.0.0.1/')).safe).toBe(false);
    });

    it('allows localhost when explicit allowLocalhost flag is enabled', async () => {
      const res = await validateTargetUrl('http://127.0.0.1:3000/webhook', { allowLocalhost: true });
      expect(res.safe).toBe(true);
      expect(res.resolvedIp).toBe('127.0.0.1');
    });

    it('allows public Internet IP addresses', async () => {
      // 93.184.216.34 (example.com)
      const res = await validateTargetUrl('http://93.184.216.34/webhook', { allowLocalhost: false });
      expect(res.safe).toBe(true);
      expect(res.resolvedIp).toBe('93.184.216.34');
    });
  });
});

