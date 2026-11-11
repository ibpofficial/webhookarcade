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
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-white text-neutral-900">
      {/* Welcome Banner */}
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
        <div className="max-w-2xl space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-xs font-semibold text-neutral-800">
            <Radio className="h-3 w-3" /> Live Receiver Ready
          </span>
          <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">
            Webhook Reliability Playground
          </h1>
          <p className="text-xs leading-relaxed text-neutral-600">
            Capture live events, test cryptographic signatures, compose test deliveries, and run chaos
            assertions against your endpoints.
          </p>
        </div>

        {/* Quick Send Command Card */}
        <div className="mt-5 rounded-md border border-neutral-200 bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-neutral-600 mb-2">
            <span className="font-mono text-[11px] font-medium">Send a test webhook to your live receiver:</span>
            <button
              onClick={copyCurl}
              className="flex items-center gap-1 text-[11px] font-semibold text-neutral-900 hover:text-neutral-600"
            >
              {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
              <span>{copied ? 'Copied' : 'Copy cURL'}</span>
            </button>
          </div>
          <div className="font-mono text-xs text-neutral-900 overflow-x-auto bg-neutral-50 p-2.5 rounded border border-neutral-200">
            curl -X POST "{activeEndpoint?.url || 'http://localhost:4000/ingest/...'}" -H "Content-Type: application/json" -d '{`{"event":"checkout.completed","amount":9900}`}'
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-xs text-neutral-500 font-medium">Total Captured Events</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-neutral-900">{stats.totalEvents}</span>
            <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-700">
              Live Feed
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-xs text-neutral-500 font-medium">Delivery Success Rate</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-neutral-900">{stats.successRate}%</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-xs text-neutral-500 font-medium">Average Processing Latency</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-neutral-900">{stats.avgLatencyMs || 25}ms</span>
            <Clock className="h-4 w-4 text-neutral-600" />
          </div>
        </div>
      </div>

      {/* Quick Access Modules */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <button
          onClick={() => navigate('/app/inbox')}
          className="flex flex-col text-left p-4 rounded-lg border border-neutral-200 bg-white hover:border-neutral-400 transition-colors shadow-sm"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
            <Inbox className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-neutral-900">Webhook Inbox</span>
          <p className="mt-1 text-[11px] text-neutral-500">Inspect real-time payloads and headers.</p>
        </button>

        <button
          onClick={() => navigate('/app/composer')}
          className="flex flex-col text-left p-4 rounded-lg border border-neutral-200 bg-white hover:border-neutral-400 transition-colors shadow-sm"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
            <Send className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-neutral-900">Event Composer</span>
          <p className="mt-1 text-[11px] text-neutral-500">Craft and test custom JSON requests.</p>
        </button>

        <button
          onClick={() => navigate('/app/replay')}
          className="flex flex-col text-left p-4 rounded-lg border border-neutral-200 bg-white hover:border-neutral-400 transition-colors shadow-sm"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
            <RotateCcw className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-neutral-900">Replay Engine</span>
          <p className="mt-1 text-[11px] text-neutral-500">Replay events with response comparison.</p>
        </button>

        <button
          onClick={() => navigate('/app/chaos')}
          className="flex flex-col text-left p-4 rounded-lg border border-neutral-200 bg-white hover:border-neutral-400 transition-colors shadow-sm"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
            <Flame className="h-5 w-5" />
          </div>
          <span className="mt-3 text-xs font-bold text-neutral-900">Chaos Lab</span>
          <p className="mt-1 text-[11px] text-neutral-500">Simulate duplicates, bursts, and delays.</p>
        </button>
      </div>

      {/* Recent Events List */}
      <div className="rounded-lg border border-neutral-200 bg-white p-5 space-y-3 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Latest Ingested Events
          </h3>
          <button
            onClick={() => navigate('/app/inbox')}
            className="flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-neutral-600"
          >
            <span>View All</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="divide-y divide-neutral-200">
          {recentEvents.length === 0 ? (
            <p className="py-4 text-xs text-neutral-400">No events captured yet. Send a test webhook above!</p>
          ) : (
            recentEvents.map((ev) => (
              <div
                key={ev.id}
                onClick={() => navigate('/app/inbox')}
                className="flex items-center justify-between py-2.5 text-xs cursor-pointer hover:bg-neutral-50 px-2 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">
                    {ev.method}
                  </span>
                  <span className="font-mono text-neutral-900 font-medium">{ev.path}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-500">
                  <span>{new Date(ev.receivedAt).toLocaleTimeString()}</span>
                  <span className="font-bold text-emerald-700">HTTP {ev.statusCode}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
