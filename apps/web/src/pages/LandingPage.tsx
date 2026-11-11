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
    navigator.clipboard.writeText('docker compose up -d');
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-white">
              <Radio className="h-4 w-4" />
            </div>
            <span className="text-base font-bold tracking-tight text-neutral-900">Webhook Arcade</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ibpofficial/webhook-arcade"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={handleTryNow}
              disabled={isLoading}
              className="flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              <span>{isLoading ? 'Creating Sandbox...' : 'Open Playground'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-medium text-neutral-800">
            <Zap className="h-3.5 w-3.5 text-neutral-700" />
            <span>Open-Source Webhook Reliability Playground</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl">
            Every webhook. Every event. Every possibility. One playground.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Capture real HTTP webhooks, inspect cryptographic signatures, compose and replay deliveries,
            and stress-test your receivers against duplicate bursts, delays, and out-of-order chaos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleTryNow}
              disabled={isLoading}
              className="flex h-11 items-center gap-2 rounded-md bg-neutral-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              <span>{isLoading ? 'Starting Sandbox...' : 'Try It Now — 1 Click'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#self-host"
              className="flex h-11 items-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
            >
              <Terminal className="h-4 w-4 text-neutral-700" />
              <span>Self-Host Guide</span>
            </a>
          </div>
        </div>

        {/* Live Interactive Terminal Preview */}
        <div className="mx-auto mt-14 max-w-4xl rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm overflow-hidden text-left">
          <div className="flex h-9 items-center justify-between border-b border-neutral-200 bg-neutral-100 px-4 text-xs text-neutral-600">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="ml-2 font-mono text-[11px] text-neutral-600">quick-send.sh</span>
            </div>
            <button
              onClick={copyQuickstart}
              className="flex items-center gap-1 rounded px-2 py-0.5 text-[11px] text-neutral-600 hover:text-neutral-900"
            >
              {copiedSnippet ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
              <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed text-neutral-800 overflow-x-auto bg-neutral-50">
            <p className="text-neutral-400"># 1. Start Webhook Arcade locally with Docker</p>
            <p className="font-semibold text-neutral-900">$ docker compose up -d</p>
            <p className="mt-3 text-neutral-400"># 2. Or send a real webhook to your instant receiver</p>
            <p className="text-neutral-800">$ curl -X POST "http://localhost:4000/ingest/demo" \</p>
            <p className="text-neutral-800 pl-4">-H "Content-Type: application/json" \</p>
            <p className="text-neutral-800 pl-4">-d '{`{"event":"payment.succeeded","amount":7999}`}'</p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="border-t border-neutral-200 bg-neutral-50/50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Engineered for webhook testing precision
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Everything required to reproduce production webhook bugs and verify integration resilience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
                <Radio className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">Live Webhook Inbox</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Generate dedicated receiver URLs. Stream incoming payloads instantly over WebSockets.
                Inspect exact raw bytes, sanitized headers, and query parameters.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">Cryptographic Signatures</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                HMAC verification against raw buffered bytes for GitHub (X-Hub-Signature-256), Stripe
                timestamped tokens, and generic sha256 schemes with timing-safe comparison.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">SSRF-Protected Replay</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                Replay deliveries to any server with DNS IP-pinning, cloud metadata blocking, private
                range filtering, and side-by-side response status and body diffs.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
                <Flame className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">Chaos Lab & Assertions</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">
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
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              How Webhook Arcade compares
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              An objective perspective on tools across the webhook developer workflow.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-600">
                    <th className="py-3 px-4 font-semibold">Capability</th>
                    <th className="py-3 px-4 font-semibold text-neutral-900 bg-neutral-100/60">Webhook Arcade</th>
                    <th className="py-3 px-4 font-semibold text-neutral-600">Webhook.site</th>
                    <th className="py-3 px-4 font-semibold text-neutral-600">Hookdeck</th>
                    <th className="py-3 px-4 font-semibold text-neutral-600">ngrok</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-neutral-900">License Model</td>
                    <td className="py-3 px-4 font-semibold text-neutral-900 bg-neutral-50/50">100% Open-Source (MIT)</td>
                    <td className="py-3 px-4">Commercial / Freemium</td>
                    <td className="py-3 px-4">Commercial SaaS</td>
                    <td className="py-3 px-4">Commercial / Tunnel</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-neutral-900">Chaos & Fault Injection</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium bg-neutral-50/50 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Built-in (Duplicates, Bursts, Delays)
                    </td>
                    <td className="py-3 px-4 text-neutral-400">Not supported</td>
                    <td className="py-3 px-4 text-neutral-400">Transformations only</td>
                    <td className="py-3 px-4 text-neutral-400">Not supported</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-neutral-900">Automated Assertions</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium bg-neutral-50/50">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </td>
                    <td className="py-3 px-4 text-neutral-400"><XCircle className="h-4 w-4 text-neutral-300" /></td>
                    <td className="py-3 px-4 text-neutral-400"><XCircle className="h-4 w-4 text-neutral-300" /></td>
                    <td className="py-3 px-4 text-neutral-400"><XCircle className="h-4 w-4 text-neutral-300" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-neutral-900">Self-Hosted Deployment</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium bg-neutral-50/50 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Docker Compose
                    </td>
                    <td className="py-3 px-4">Docker image available</td>
                    <td className="py-3 px-4 text-neutral-400">Cloud only</td>
                    <td className="py-3 px-4 text-neutral-400">Relay cloud only</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-neutral-900">Replay with SSRF Protection</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium bg-neutral-50/50 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> DNS IP Pinning
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
      <section id="self-host" className="border-t border-neutral-200 bg-neutral-50/50 py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Get started in seconds
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Run Webhook Arcade on your local machine or server with Docker Compose.
          </p>

          <div className="mt-8 rounded-lg border border-neutral-200 bg-white p-6 text-left shadow-sm">
            <p className="text-xs font-semibold text-neutral-800">Run with Docker Compose:</p>
            <div className="mt-3 rounded border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs text-neutral-900">
              <p>git clone https://github.com/ibpofficial/webhook-arcade.git</p>
              <p>cd webhook-arcade</p>
              <p>docker compose up -d</p>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Open <span className="font-mono font-medium text-neutral-900">http://localhost:5173</span> to launch the dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500 bg-white">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Webhook Arcade Contributors. Released under the MIT License.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ibpofficial/webhook-arcade" className="text-neutral-600 hover:text-neutral-900">
              GitHub
            </a>
            <a href="http://localhost:4000/docs" className="text-neutral-600 hover:text-neutral-900">
              OpenAPI Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
