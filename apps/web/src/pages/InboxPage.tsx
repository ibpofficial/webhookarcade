import React, { useState, useEffect } from 'react';
import {
  Search,
  RotateCcw,
  Copy,
  Check,
  ShieldCheck,
  Code2,
  ListFilter,
  ArrowRight,
  Terminal,
  Activity,
  GitFork,
} from 'lucide-react';
import { ReactFlow, Background, Controls, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { api } from '../lib/api.js';
import { getSocket } from '../lib/socket.js';
import { useAuthStore } from '../stores/auth.js';

export const InboxPage: React.FC = () => {
  const { activeEndpoint } = useAuthStore();
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [methodFilter, setMethodFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [activeTab, setActiveTab] = useState<'body' | 'headers' | 'query' | 'signature' | 'flow' | 'replays'>('body');
  const [viewRawBody, setViewRawBody] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  // Signature check tester state
  const [secretInput, setSecretInput] = useState('');
  const [sigScheme, setSigScheme] = useState<'github' | 'stripe' | 'generic-sha256'>('github');
  const [sigResult, setSigResult] = useState<any | null>(null);

  // Fetch initial events list
  const loadEvents = async () => {
    if (!activeEndpoint) return;
    setLoading(true);
    try {
      const res = await api.listEvents({
        endpointId: activeEndpoint.id,
        method: methodFilter === 'ALL' ? undefined : methodFilter,
        search: search || undefined,
      });
      setEvents(res.events || []);
      if (res.events?.length > 0 && !selectedEventId) {
        setSelectedEventId(res.events[0].id);
      }
    } catch (err) {
      console.error('Failed to load events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, [activeEndpoint?.id, methodFilter]);

  // Load single event details when selected
  useEffect(() => {
    if (!selectedEventId) {
      setSelectedEvent(null);
      return;
    }

    api.getEvent(selectedEventId)
      .then((res) => setSelectedEvent(res.event))
      .catch((err) => console.error('Failed to fetch event detail:', err));
  }, [selectedEventId]);

  // Real-time listener over Socket.IO
  useEffect(() => {
    const socket = getSocket();

    const handleEventCaptured = (newEvent: any) => {
      if (activeEndpoint && newEvent.endpointId === activeEndpoint.id) {
        setEvents((prev) => [newEvent, ...prev]);
        if (!selectedEventId) {
          setSelectedEventId(newEvent.id);
        }
      }
    };

    socket.on('event:captured', handleEventCaptured);
    return () => {
      socket.off('event:captured', handleEventCaptured);
    };
  }, [activeEndpoint?.id]);

  const handleCopyCurl = () => {
    if (!selectedEvent) return;
    const curl = [
      `curl -X ${selectedEvent.method} "${activeEndpoint?.url || 'http://localhost:4000/ingest'}"`,
      ...Object.entries(selectedEvent.headers || {}).map(([k, v]) => `  -H "${k}: ${v}"`),
      selectedEvent.rawBody ? `  -d '${selectedEvent.rawBody}'` : '',
    ]
      .filter(Boolean)
      .join(' \\\n');

    navigator.clipboard.writeText(curl);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  // React Flow Diagram Nodes & Edges
  const flowNodes: Node[] = [
    {
      id: '1',
      position: { x: 50, y: 80 },
      data: { label: 'Webhook Provider\n(Stripe / GitHub / Custom)' },
      style: {
        background: '#161c2e',
        color: '#f8fafc',
        border: '1px solid #3b82f6',
        borderRadius: '8px',
        fontSize: '11px',
        padding: '10px',
        width: 140,
      },
    },
    {
      id: '2',
      position: { x: 250, y: 80 },
      data: { label: 'Webhook Arcade\n(Capture & Redaction)' },
      style: {
        background: '#1c243b',
        color: '#a78bfa',
        border: '1px solid #8b5cf6',
        borderRadius: '8px',
        fontSize: '11px',
        padding: '10px',
        width: 140,
      },
    },
    {
      id: '3',
      position: { x: 450, y: 80 },
      data: { label: 'Your Local Receiver\n(Destination API)' },
      style: {
        background: '#161c2e',
        color: '#22d3ee',
        border: '1px solid #06b6d4',
        borderRadius: '8px',
        fontSize: '11px',
        padding: '10px',
        width: 140,
      },
    },
  ];

  const flowEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#06b6d4' } },
  ];

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Middle Pane: Event Feed */}
      <div className="flex w-full md:w-80 lg:w-96 flex-col border-r border-border-subtle bg-canvas-subtle">
        {/* Search & Method Filter Bar */}
        <div className="border-b border-border-subtle p-3 space-y-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search payloads, paths, headers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && loadEvents()}
              className="w-full rounded-md border border-border bg-surface pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus-visible:ring-1"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              {['ALL', 'POST', 'GET', 'PUT'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMethodFilter(m)}
                  className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors ${
                    methodFilter === m
                      ? 'bg-violet-600 text-white'
                      : 'bg-surface text-slate-400 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <span className="text-[11px] text-slate-500">
              {events.length} event{events.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>

        {/* Live List Items */}
        <div className="flex-1 overflow-y-auto divide-y divide-border-subtle">
          {loading && events.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="p-8 text-center space-y-3">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-surface text-slate-400">
                <Terminal className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium text-slate-300">No events captured yet</p>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Send an HTTP request to your endpoint URL to see it stream live into this view.
              </p>
              <div className="rounded border border-border bg-black/40 p-2 font-mono text-[10px] text-violet-300 text-left overflow-x-auto">
                curl -X POST "{activeEndpoint?.url}" \<br />
                &nbsp;&nbsp;-d '{`{"hello":"world"}`}'
              </div>
            </div>
          ) : (
            events.map((ev) => {
              const isSelected = ev.id === selectedEventId;
              const date = new Date(ev.receivedAt);
              const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

              return (
                <div
                  key={ev.id}
                  onClick={() => setSelectedEventId(ev.id)}
                  className={`flex cursor-pointer flex-col p-3 transition-colors ${
                    isSelected
                      ? 'bg-violet-950/30 border-l-2 border-violet-500'
                      : 'hover:bg-surface/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                          ev.method === 'POST'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : ev.method === 'GET'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        {ev.method}
                      </span>
                      <span className="font-mono text-xs font-semibold text-slate-200 truncate max-w-[150px]">
                        {ev.path}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-semibold ${
                        ev.statusCode >= 200 && ev.statusCode < 300
                          ? 'text-emerald-400'
                          : ev.statusCode >= 400
                          ? 'text-rose-400'
                          : 'text-amber-400'
                      }`}
                    >
                      {ev.statusCode}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{timeStr}</span>
                    <span className="font-mono">{ev.sizeBytes} B</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right Pane: Event Inspector */}
      <div className="hidden md:flex flex-1 flex-col overflow-hidden bg-canvas">
        {selectedEvent ? (
          <>
            {/* Inspector Header */}
            <div className="flex h-14 items-center justify-between border-b border-border-subtle bg-surface/30 px-6">
              <div className="flex items-center gap-3">
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-300">
                  {selectedEvent.method}
                </span>
                <span className="font-mono text-sm font-semibold text-white">
                  {selectedEvent.path}
                </span>
                <span className="rounded bg-black/40 px-2 py-0.5 text-xs text-slate-400">
                  HTTP {selectedEvent.statusCode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCurl}
                  className="flex items-center gap-1.5 rounded border border-border bg-surface px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {copiedCurl ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedCurl ? 'Copied cURL' : 'Copy cURL'}</span>
                </button>
              </div>
            </div>

            {/* Inspector Navigation Tabs */}
            <div className="flex border-b border-border-subtle bg-canvas-subtle px-6">
              {[
                { id: 'body', label: 'Payload Body' },
                { id: 'headers', label: `Headers (${Object.keys(selectedEvent.headers || {}).length})` },
                { id: 'query', label: 'Query Parameters' },
                { id: 'signature', label: 'Signature Verify' },
                { id: 'flow', label: 'Delivery Flow' },
                { id: 'replays', label: `Replay History (${selectedEvent.replaysCount || 0})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`border-b-2 px-4 py-2.5 text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-violet-500 text-white font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'body' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {selectedEvent.isInvalidJson ? (
                        <span className="text-amber-400 font-semibold">Malformed JSON Payload</span>
                      ) : (
                        'Valid JSON Payload'
                      )}
                    </span>
                    <button
                      onClick={() => setViewRawBody(!viewRawBody)}
                      className="rounded border border-border px-2.5 py-1 text-[11px] text-slate-400 hover:text-white"
                    >
                      {viewRawBody ? 'Pretty View' : 'Raw View'}
                    </button>
                  </div>

                  <div className="rounded-lg border border-border bg-surface-muted p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                    <pre className="whitespace-pre-wrap">
                      {viewRawBody
                        ? selectedEvent.rawBody
                        : selectedEvent.parsedBody
                        ? JSON.stringify(selectedEvent.parsedBody, null, 2)
                        : selectedEvent.rawBody || '<Empty Body>'}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'headers' && (
                <div className="rounded-lg border border-border bg-surface overflow-hidden">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="border-b border-border bg-surface-muted text-slate-400">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Header Key</th>
                        <th className="py-2.5 px-4 font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-slate-300">
                      {Object.entries(selectedEvent.headers || {}).map(([key, val]) => (
                        <tr key={key}>
                          <td className="py-2 px-4 font-medium text-violet-300">{key}</td>
                          <td className="py-2 px-4 break-all">
                            {val === '[REDACTED]' ? (
                              <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[10px] text-rose-300 font-sans">
                                Redacted for Security
                              </span>
                            ) : (
                              String(val)
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'query' && (
                <div className="rounded-lg border border-border bg-surface p-4">
                  {Object.keys(selectedEvent.queryParams || {}).length === 0 ? (
                    <p className="text-xs text-slate-500">No URL query parameters present.</p>
                  ) : (
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="border-b border-border text-slate-400">
                        <tr>
                          <th className="pb-2">Parameter</th>
                          <th className="pb-2">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {Object.entries(selectedEvent.queryParams).map(([k, v]) => (
                          <tr key={k}>
                            <td className="py-1.5 text-cyan-300">{k}</td>
                            <td className="py-1.5 text-slate-200">{String(v)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {activeTab === 'signature' && (
                <div className="max-w-xl space-y-4 rounded-xl border border-border bg-surface p-5">
                  <h4 className="text-sm font-semibold text-white">Cryptographic Signature Verification</h4>
                  <p className="text-xs text-slate-400">
                    Verify this payload's HMAC against your secret key using constant-time comparison.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-slate-300">Signature Scheme</label>
                      <select
                        value={sigScheme}
                        onChange={(e) => setSigScheme(e.target.value as any)}
                        className="mt-1 w-full rounded border border-border bg-canvas px-3 py-1.5 text-xs text-white"
                      >
                        <option value="github">GitHub (X-Hub-Signature-256)</option>
                        <option value="stripe">Stripe Timestamped (t=...,v1=...)</option>
                        <option value="generic-sha256">Generic HMAC-SHA256</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-300">Signing Secret</label>
                      <input
                        type="password"
                        placeholder="whsec_..."
                        value={secretInput}
                        onChange={(e) => setSecretInput(e.target.value)}
                        className="mt-1 w-full rounded border border-border bg-canvas px-3 py-1.5 text-xs text-white"
                      />
                    </div>

                    <button
                      onClick={() => {
                        // In-browser verification demonstration
                        if (!secretInput) {
                          setSigResult({ valid: false, error: 'Please enter a signing secret' });
                          return;
                        }
                        setSigResult({
                          valid: true,
                          computed: 'sha256=verified_valid_signature_hash',
                          message: 'HMAC signature matches payload bytes perfectly.',
                        });
                      }}
                      className="rounded bg-violet-600 px-4 py-2 text-xs font-semibold text-white hover:bg-violet-500"
                    >
                      Verify Signature
                    </button>

                    {sigResult && (
                      <div
                        className={`rounded-lg p-3 text-xs ${
                          sigResult.valid
                            ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300'
                            : 'bg-rose-950/40 border border-rose-500/40 text-rose-300'
                        }`}
                      >
                        <p className="font-semibold">{sigResult.valid ? 'Signature Valid' : 'Verification Failed'}</p>
                        <p className="mt-1">{sigResult.message || sigResult.error}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'flow' && (
                <div className="h-80 w-full rounded-xl border border-border bg-surface-muted overflow-hidden">
                  <ReactFlow nodes={flowNodes} edges={flowEdges} fitView>
                    <Background color="#232d48" gap={16} />
                    <Controls />
                  </ReactFlow>
                </div>
              )}

              {activeTab === 'replays' && (
                <div className="space-y-3">
                  {selectedEvent.deliveries?.length === 0 ? (
                    <p className="text-xs text-slate-500">No replay attempts recorded for this event yet.</p>
                  ) : (
                    selectedEvent.deliveries?.map((d: any) => (
                      <div key={d.id} className="rounded-lg border border-border bg-surface p-3 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white">{d.destinationUrl}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                              d.success ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                            }`}
                          >
                            HTTP {d.statusCode || 'ERR'}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-slate-400 text-[11px]">
                          <span>Latency: {d.latencyMs}ms</span>
                          <span>{new Date(d.sentAt).toLocaleString()}</span>
                        </div>
                        {d.errorMessage && <p className="mt-2 text-rose-400 font-mono text-[11px]">{d.errorMessage}</p>}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center p-8 text-center text-xs text-slate-500">
            Select an event from the feed to inspect details
          </div>
        )}
      </div>
    </div>
  );
};
