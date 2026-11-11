import React, { useState, useEffect } from 'react';
import { RotateCcw, Check, X, ShieldAlert, GitCompare } from 'lucide-react';
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
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-white text-neutral-900">
      <div>
        <h2 className="text-lg font-bold text-neutral-900">Replay Engine</h2>
        <p className="text-xs text-neutral-500">
          Replay captured webhooks to any endpoint with SSRF safety, payload tuning, and response comparison.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column: Replay Setup */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Replay Configuration
          </h3>

          <div>
            <label className="text-xs font-medium text-neutral-700">Select Captured Event</label>
            <select
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(e.target.value)}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 font-medium"
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
            <label className="text-xs font-medium text-neutral-700">Destination URL (SSRF Protected)</label>
            <input
              type="url"
              value={destinationUrl}
              onChange={(e) => setDestinationUrl(e.target.value)}
              placeholder="https://your-server.com/webhook"
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900"
            />
            <p className="mt-1 text-[11px] text-neutral-500">
              Outbound requests use pinned DNS resolution to block private RFC 1918 networks and cloud metadata.
            </p>
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-700">Editable Payload</label>
            <textarea
              rows={8}
              value={overridePayload}
              onChange={(e) => setOverridePayload(e.target.value)}
              className="mt-1 w-full rounded-md border border-neutral-200 bg-neutral-50 p-3 font-mono text-xs text-neutral-900"
            />
          </div>

          <button
            onClick={handleReplay}
            disabled={replaying || !selectedEventId}
            className="flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors"
          >
            <RotateCcw className={`h-3.5 w-3.5 ${replaying ? 'animate-spin' : ''}`} />
            <span>{replaying ? 'Dispatching Replay...' : 'Dispatch Replay'}</span>
          </button>
        </div>

        {/* Right Column: Side-by-Side Comparison Diff */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <GitCompare className="h-4 w-4 text-neutral-700" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Response Comparison
            </h3>
          </div>

          {comparison ? (
            comparison.error ? (
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldAlert className="h-4 w-4 text-rose-600" />
                  <span>Replay Dispatch Failed</span>
                </div>
                <p className="mt-1 font-mono text-rose-700">{comparison.error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
                    <span className="text-[11px] text-neutral-500">Original Response</span>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-neutral-900">HTTP {comparison.originalStatus}</span>
                      <span className="text-xs text-neutral-500">{comparison.originalLatencyMs || 50}ms</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
                    <span className="text-[11px] text-neutral-500">Replayed Response</span>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-neutral-900">
                        HTTP {comparison.replayedStatus}
                      </span>
                      <span className="text-xs text-neutral-500">{comparison.replayedLatencyMs}ms</span>
                    </div>
                  </div>
                </div>

                {/* Diff Viewer */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">Body Match Status</span>
                    {comparison.bodyDiff?.isIdentical ? (
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                        <Check className="h-3 w-3 text-emerald-600" /> Identical Body
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-amber-700 font-semibold">
                        <X className="h-3 w-3 text-amber-600" /> Differentiated Response
                      </span>
                    )}
                  </div>

                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 font-mono text-xs text-neutral-900 overflow-x-auto max-h-60">
                    <pre className="whitespace-pre-wrap">{comparison.bodyDiff?.replayed || '<Empty Response Body>'}</pre>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="rounded-lg border border-neutral-200 bg-neutral-50/50 p-8 text-center text-xs text-neutral-400">
              Select an event and click Dispatch Replay to compare original and replayed outcomes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
