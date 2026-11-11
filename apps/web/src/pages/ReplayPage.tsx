import React, { useState, useEffect } from 'react';
import { RotateCcw, ArrowRight, Check, X, ShieldAlert, GitCompare } from 'lucide-react';
import { api } from '../lib/api.js';
import { useAuthStore } from '../stores/auth.js';

export const ReplayPage: React.FC = () => {
  const { activeEndpoint } = useAuthStore();
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string>('');
  const [destinationUrl, setDestinationUrl] = useState('http://127.0.0.1:4000/demo/idempotent');
  const [overridePayload, setOverridePayload] = useState('');
  const [replaying, setReplaying] = useState(false);
  const [comparison, setComparison] = useState<any | null>(null);

  useEffect(() => {
    if (!activeEndpoint) return;
    api.listEvents({ endpointId: activeEndpoint.id })
      .then((res) => {
        setEvents(res.events || []);
        if (res.events?.length > 0 && !selectedEventId) {
          setSelectedEventId(res.events[0].id);
        }
      })
      .catch((err) => console.error('Failed to load events:', err));
  }, [activeEndpoint?.id]);

  useEffect(() => {
    if (!selectedEventId) return;
    api.getEvent(selectedEventId)
      .then((res) => {
        setOverridePayload(res.event.rawBody || '');
      })
      .catch((err) => console.error('Failed to load event for replay:', err));
  }, [selectedEventId]);

  const handleReplay = async () => {
    if (!selectedEventId || !destinationUrl) return;
    setReplaying(true);
    setComparison(null);

    try {
      const res = await api.replayEvent(selectedEventId, {
        destinationUrl,
        overridePayload,
      });
      setComparison(res.comparison);
    } catch (err: unknown) {
      setComparison({
        error: err instanceof Error ? err.message : String(err),
      });
    } finally {
      setReplaying(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-canvas">
      <div>
        <h2 className="text-lg font-bold text-white">Replay Engine</h2>
        <p className="text-xs text-slate-400">
          Replay captured webhooks to any endpoint with SSRF safety, payload tuning, and response comparison.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column: Replay Setup */}
        <div className="space-y-4 rounded-xl border border-border bg-surface p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Replay Configuration
          </h3>

          <div>
            <label className="text-xs font-medium text-slate-300">Select Captured Event</label>
            <select
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-canvas px-3 py-2 text-xs text-white"
            >
              {events.length === 0 && <option value="">No captured events available</option>}
              {events.map((ev) => (
                <option key={ev.id} value={ev.id}>
                  {ev.method} {ev.path} — {new Date(ev.receivedAt).toLocaleTimeString()} ({ev.id.substring(0, 8)})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300">Destination URL (SSRF Protected)</label>
            <input
              type="url"
              value={destinationUrl}
              onChange={(e) => setDestinationUrl(e.target.value)}
              placeholder="https://your-server.com/webhook"
              className="mt-1 w-full rounded-lg border border-border bg-canvas px-3 py-2 text-xs text-white"
            />
            <p className="mt-1 text-[11px] text-slate-500">
              Outbound requests use pinned DNS resolution to block private RFC 1918 networks and cloud metadata.
            </p>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300">Editable Payload</label>
            <textarea
              rows={8}
              value={overridePayload}
              onChange={(e) => setOverridePayload(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-surface-muted p-3 font-mono text-xs text-slate-200"
            />
          </div>

          <button
            onClick={handleReplay}
            disabled={replaying || !selectedEventId}
            className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2 text-xs font-semibold text-white hover:bg-violet-500 disabled:opacity-50"
          >
            <RotateCcw className={`h-3.5 w-3.5 ${replaying ? 'animate-spin' : ''}`} />
            <span>{replaying ? 'Dispatching Replay...' : 'Dispatch Replay'}</span>
          </button>
        </div>

        {/* Right Column: Side-by-Side Comparison Diff */}
        <div className="space-y-4 rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center gap-2">
            <GitCompare className="h-4 w-4 text-cyan-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Response Comparison
            </h3>
          </div>

          {comparison ? (
            comparison.error ? (
              <div className="rounded-lg border border-rose-500/30 bg-rose-950/20 p-4 text-xs text-rose-300">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldAlert className="h-4 w-4 text-rose-400" />
                  <span>Replay Dispatch Failed</span>
                </div>
                <p className="mt-1 font-mono">{comparison.error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-canvas p-3">
                    <span className="text-[11px] text-slate-400">Original Response</span>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-white">HTTP {comparison.originalStatus}</span>
                      <span className="text-xs text-slate-500">{comparison.originalLatencyMs || 50}ms</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-canvas p-3">
                    <span className="text-[11px] text-slate-400">Replayed Response</span>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-emerald-400">
                        HTTP {comparison.replayedStatus}
                      </span>
                      <span className="text-xs text-slate-500">{comparison.replayedLatencyMs}ms</span>
                    </div>
                  </div>
                </div>

                {/* Diff Viewer */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Body Match Status</span>
                    {comparison.bodyDiff?.isIdentical ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <Check className="h-3 w-3" /> Identical Body
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-amber-400 font-medium">
                        <X className="h-3 w-3" /> Differentiated Response
                      </span>
                    )}
                  </div>

                  <div className="rounded-lg border border-border bg-surface-muted p-3 font-mono text-xs text-slate-200 overflow-x-auto max-h-60">
                    <pre className="whitespace-pre-wrap">{comparison.bodyDiff?.replayed || '<Empty Response Body>'}</pre>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="rounded-lg border border-border bg-canvas p-8 text-center text-xs text-slate-500">
              Select an event and click Dispatch Replay to compare original and replayed outcomes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
