import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Inbox,
  Send,
  RotateCcw,
  Flame,
  ArrowRight,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  Radio,
} from 'lucide-react';
import { api } from '../lib/api.js';
import { useAuthStore } from '../stores/auth.js';

export const OverviewPage: React.FC = () => {
  const { activeEndpoint } = useAuthStore();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalEvents: 0, successRate: 100, avgLatencyMs: 0 });
  const [recentEvents, setRecentEvents] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!activeEndpoint) return;
    api.getAnalytics()
      .then((res) => {
        setStats({
          totalEvents: res.totalEvents || 0,
          successRate: res.successRate || 100,
          avgLatencyMs: res.avgLatencyMs || 0,
        });
      })
      .catch(() => {});

    api.listEvents({ endpointId: activeEndpoint.id, limit: 5 })
      .then((res) => setRecentEvents(res.events || []))
      .catch(() => {});
  }, [activeEndpoint?.id]);

  const copyCurl = () => {
    if (!activeEndpoint) return;
    const cmd = `curl -X POST "${activeEndpoint.url}" \\\n  -H "Content-Type: application/json" \\\n  -d '{"event":"checkout.completed","amount":9900}'`;
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-canvas">
      {/* Welcome Banner */}
      <div className="rounded-2xl border border-border bg-gradient-to-r from-violet-950/40 via-surface to-cyan-950/20 p-6">
        <div className="max-w-2xl space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-semibold text-violet-300">
            <Radio className="h-3 w-3" /> Live Receiver Ready
          </span>
          <h1 className="text-xl font-bold text-white sm:text-2xl">
            Webhook Reliability Playground
          </h1>
          <p className="text-xs leading-relaxed text-slate-400">
            Capture live events, test cryptographic signatures, compose test deliveries, and run chaos
            assertions against your endpoints.
          </p>
        </div>

        {/* Quick Send Command Card */}
        <div className="mt-5 rounded-xl border border-border bg-black/50 p-3.5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-mono text-[11px]">Send a test webhook to your live receiver:</span>
            <button
              onClick={copyCurl}
              className="flex items-center gap-1 text-[11px] text-violet-400 hover:text-white"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              <span>{copied ? 'Copied' : 'Copy cURL'}</span>
            </button>
          </div>
          <div className="font-mono text-xs text-cyan-300 overflow-x-auto">
            curl -X POST "{activeEndpoint?.url || 'http://localhost:4000/ingest/...'}" -H "Content-Type: application/json" -d '{`{"event":"checkout.completed","amount":9900}`}'
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4">
          <span className="text-xs text-slate-400">Total Captured Events</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-white">{stats.totalEvents}</span>
            <span className="rounded bg-violet-500/10 px-2 py-0.5 text-xs font-semibold text-violet-400">
              Live Feed
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <span className="text-xs text-slate-400">Delivery Success Rate</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-emerald-400">{stats.successRate}%</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <span className="text-xs text-slate-400">Average Processing Latency</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-cyan-400">{stats.avgLatencyMs || 25}ms</span>
            <Clock className="h-4 w-4 text-cyan-500" />
          </div>
        </div>
      </div>

      {/* Quick Access Modules */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <button
          onClick={() => navigate('/app/inbox')}
          className="flex flex-col text-left p-4 rounded-xl border border-border bg-surface hover:border-violet-500/50 transition-colors"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
            <Inbox className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-white">Webhook Inbox</span>
          <p className="mt-1 text-[11px] text-slate-400">Inspect real-time payloads and headers.</p>
        </button>

        <button
          onClick={() => navigate('/app/composer')}
          className="flex flex-col text-left p-4 rounded-xl border border-border bg-surface hover:border-violet-500/50 transition-colors"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-600/20 text-cyan-400">
            <Send className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-white">Event Composer</span>
          <p className="mt-1 text-[11px] text-slate-400">Craft and test custom JSON requests.</p>
        </button>

        <button
          onClick={() => navigate('/app/replay')}
          className="flex flex-col text-left p-4 rounded-xl border border-border bg-surface hover:border-violet-500/50 transition-colors"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600/20 text-emerald-400">
            <RotateCcw className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-white">Replay Engine</span>
          <p className="mt-1 text-[11px] text-slate-400">Replay events with response comparison.</p>
        </button>

        <button
          onClick={() => navigate('/app/chaos')}
          className="flex flex-col text-left p-4 rounded-xl border border-border bg-surface hover:border-violet-500/50 transition-colors"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-600/20 text-rose-400">
            <Flame className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-white">Chaos Lab</span>
          <p className="mt-1 text-[11px] text-slate-400">Simulate duplicates, bursts, and delays.</p>
        </button>
      </div>

      {/* Recent Events List */}
      <div className="rounded-xl border border-border bg-surface p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Latest Ingested Events
          </h3>
          <button
            onClick={() => navigate('/app/inbox')}
            className="flex items-center gap-1 text-xs text-violet-400 hover:text-white"
          >
            <span>View All</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="divide-y divide-border-subtle">
          {recentEvents.length === 0 ? (
            <p className="py-4 text-xs text-slate-500">No events captured yet. Send a test webhook above!</p>
          ) : (
            recentEvents.map((ev) => (
              <div
                key={ev.id}
                onClick={() => navigate('/app/inbox')}
                className="flex items-center justify-between py-2.5 text-xs cursor-pointer hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    {ev.method}
                  </span>
                  <span className="font-mono text-slate-200">{ev.path}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-slate-500">
                  <span>{new Date(ev.receivedAt).toLocaleTimeString()}</span>
                  <span className="text-emerald-400">HTTP {ev.statusCode}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

