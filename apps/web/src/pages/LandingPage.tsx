import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Radio,
  ArrowRight,
  ShieldCheck,
  Zap,
  Flame,
  Terminal,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { useAuthStore } from '../stores/auth.js';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { createGuestWorkspace, isLoading } = useAuthStore();
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleTryNow = async () => {
    try {
      await createGuestWorkspace();
      navigate('/app/inbox');
    } catch {
      navigate('/app/inbox');
    }
  };

  const copyQuickstart = () => {
    navigator.clipboard.writeText('docker compose up');
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="min-h-screen bg-canvas text-slate-100">
      {/* Navigation */}
      <header className="border-b border-border-subtle bg-canvas/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/20">
              <Radio className="h-5 w-5 text-white" />
            </div>
            <span className="text-base font-bold tracking-tight text-white">Webhook Arcade</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/webhook-arcade/webhook-arcade"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={handleTryNow}
              disabled={isLoading}
              className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-violet-600/30 transition-all hover:bg-violet-500 focus-visible:ring-2"
            >
              <span>{isLoading ? 'Creating Sandbox...' : 'Open Playground'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-medium text-violet-300">
            <Zap className="h-3.5 w-3.5 text-cyan-400" />
            <span>Open-Source Webhook Reliability Playground</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Every webhook. Every event. Every possibility. One playground.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Capture real HTTP webhooks, inspect cryptographic signatures, compose and replay deliveries,
            and stress-test your receivers against duplicate bursts, delays, and out-of-order chaos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleTryNow}
              disabled={isLoading}
              className="flex h-11 items-center gap-2 rounded-lg bg-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 hover:shadow-violet-600/40"
            >
              <span>{isLoading ? 'Starting Sandbox...' : 'Try It Now — 1 Click'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#self-host"
              className="flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
            >
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span>Self-Host Guide</span>
            </a>
          </div>
        </div>

        {/* Live Interactive Terminal Preview */}
        <div className="mx-auto mt-14 max-w-4xl rounded-xl border border-border bg-surface-muted shadow-2xl overflow-hidden">
          <div className="flex h-9 items-center justify-between border-b border-border bg-sidebar px-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">quick-send.sh</span>
            </div>
            <button
              onClick={copyQuickstart}
              className="flex items-center gap-1 rounded px-2 py-0.5 text-[11px] hover:text-white"
            >
              {copiedSnippet ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed text-left text-slate-300 overflow-x-auto">
            <p className="text-slate-500"># 1. Start Webhook Arcade locally with Docker</p>
            <p className="text-cyan-300 font-semibold">$ docker compose up -d</p>
            <p className="mt-3 text-slate-500"># 2. Or send a real webhook to your instant receiver</p>
            <p className="text-violet-300">
              $ curl -X POST "http://localhost:4000/ingest/demo" \
            </p>
            <p className="text-violet-300 pl-4">-H "Content-Type: application/json" \</p>
            <p className="text-violet-300 pl-4">-d '{`{"event":"payment.succeeded","amount":7999}`}'</p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="border-t border-border-subtle bg-canvas-subtle py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Engineered for webhook testing precision
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Everything required to reproduce production webhook bugs and verify integration resilience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
                <Radio className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">Live Webhook Inbox</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Generate dedicated receiver URLs. Stream incoming payloads instantly over WebSockets.
                Inspect exact raw bytes, sanitized headers, and query parameters.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600/20 text-cyan-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">Cryptographic Signatures</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                HMAC verification against raw buffered bytes for GitHub (X-Hub-Signature-256), Stripe
                timestamped tokens, and generic sha256 schemes with timing-safe comparison.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/20 text-emerald-400">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">SSRF-Protected Replay</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Replay deliveries to any server with DNS IP-pinning, cloud metadata blocking, private
                range filtering, and side-by-side response status and body diffs.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600/20 text-rose-400">
                <Flame className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">Chaos Lab & Assertions</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Inject duplicate storms, latency jitter, bad signatures, and out-of-order events. Verify
                idempotency and assertions automatically in a test report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Comparison Table */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              How Webhook Arcade compares
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              An objective perspective on tools across the webhook developer workflow.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border bg-surface-muted text-slate-400">
                    <th className="py-3 px-4 font-semibold">Capability</th>
                    <th className="py-3 px-4 font-semibold text-violet-400">Webhook Arcade</th>
                    <th className="py-3 px-4 font-semibold text-slate-300">Webhook.site</th>
                    <th className="py-3 px-4 font-semibold text-slate-300">Hookdeck</th>
                    <th className="py-3 px-4 font-semibold text-slate-300">ngrok</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">License Model</td>
                    <td className="py-3 px-4 font-semibold text-violet-300">100% Open-Source (MIT)</td>
                    <td className="py-3 px-4">Commercial / Freemium</td>
                    <td className="py-3 px-4">Commercial SaaS</td>
                    <td className="py-3 px-4">Commercial / Tunnel</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Chaos & Fault Injection</td>
                    <td className="py-3 px-4 text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" /> Built-in (Duplicates, Bursts, Delays)
                    </td>
                    <td className="py-3 px-4 text-slate-500">Not supported</td>
                    <td className="py-3 px-4 text-slate-500">Transformations only</td>
                    <td className="py-3 px-4 text-slate-500">Not supported</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Automated Assertions</td>
                    <td className="py-3 px-4 text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </td>
                    <td className="py-3 px-4 text-slate-500"><XCircle className="h-4 w-4" /></td>
                    <td className="py-3 px-4 text-slate-500"><XCircle className="h-4 w-4" /></td>
                    <td className="py-3 px-4 text-slate-500"><XCircle className="h-4 w-4" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Self-Hosted Deployment</td>
                    <td className="py-3 px-4 text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" /> Docker Compose
                    </td>
                    <td className="py-3 px-4">Docker image available</td>
                    <td className="py-3 px-4 text-slate-500">Cloud only</td>
                    <td className="py-3 px-4 text-slate-500">Relay cloud only</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Replay with SSRF Protection</td>
                    <td className="py-3 px-4 text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" /> DNS IP Pinning
                    </td>
                    <td className="py-3 px-4">Manual replay</td>
                    <td className="py-3 px-4">Queue retries</td>
                    <td className="py-3 px-4">Tunnel replay</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Hosting Instructions */}
      <section id="self-host" className="border-t border-border-subtle bg-canvas-subtle py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Get started in seconds
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Run Webhook Arcade on your local machine or server with Docker Compose.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-sidebar p-6 text-left">
            <p className="text-xs font-semibold text-slate-300">Run with Docker Compose:</p>
            <div className="mt-3 rounded-lg bg-black/60 p-4 font-mono text-xs text-cyan-300">
              <p>git clone https://github.com/webhook-arcade/webhook-arcade.git</p>
              <p>cd webhook-arcade</p>
              <p>docker compose up -d</p>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Open <span className="font-mono text-violet-300">http://localhost:5173</span> to launch the dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Webhook Arcade Contributors. Released under the MIT License.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/webhook-arcade/webhook-arcade" className="hover:text-white">
              GitHub
            </a>
            <a href="http://localhost:4000/docs" className="hover:text-white">
              OpenAPI Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

