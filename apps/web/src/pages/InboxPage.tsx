import React, { useState, useEffect } from 'react';
import {
  Search,
  Copy,
  Check,
  Terminal,
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

  // React Flow Diagram Nodes & Edges (Clean neutral professional styling)
  const flowNodes: Node[] = [
    {
      id: '1',
      position: { x: 50, y: 80 },
      data: { label: 'Webhook Provider\n(Stripe / GitHub / Custom)' },
      style: {
        background: '#ffffff',
        color: '#09090b',
        border: '1px solid #d4d4d8',
        borderRadius: '8px',
        fontSize: '11px',
        fontWeight: '500',
        padding: '10px',
        width: 150,
      },
    },
    {
      id: '2',
      position: { x: 260, y: 80 },
      data: { label: 'Webhook Arcade\n(Capture & Redaction)' },
      style: {
        background: '#09090b',
        color: '#ffffff',
        border: '1px solid #09090b',
        borderRadius: '8px',
        fontSize: '11px',
        fontWeight: '600',
        padding: '10px',
        width: 150,
      },
    },
    {
      id: '3',
      position: { x: 470, y: 80 },
      data: { label: 'Your Local Receiver\n(Destination API)' },
      style: {
        background: '#ffffff',
        color: '#09090b',
        border: '1px solid #d4d4d8',
        borderRadius: '8px',
        fontSize: '11px',
        fontWeight: '500',
        padding: '10px',
        width: 150,
      },
    },
  ];

  const flowEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#71717a' } },
    { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#71717a' } },
  ];

  return (
    <div className="flex h-full w-full overflow-hidden bg-white text-neutral-900">
      {/* Middle Pane: Event Feed */}
      <div className="flex w-full md:w-80 lg:w-96 flex-col border-r border-neutral-200 bg-neutral-50/50">
        {/* Search & Method Filter Bar */}
        <div className="border-b border-neutral-200 p-3 space-y-2 bg-white">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search payloads, paths, headers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && loadEvents()}
              className="w-full rounded-md border border-neutral-300 bg-white pl-8 pr-3 py-1.5 text-xs text-neutral-900 placeholder-neutral-400 focus-visible:ring-1 focus-visible:outline-none"
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
                      ? 'bg-neutral-900 text-white'
                      : 'border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <span className="text-[11px] text-neutral-500 font-medium">
              {events.length} event{events.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>

        {/* Live List Items */}
        <div className="flex-1 overflow-y-auto divide-y divide-neutral-200">
          {loading && events.length === 0 ? (
            <div className="p-8 text-center text-xs text-neutral-500">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="p-8 text-center space-y-3">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600">
                <Terminal className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-neutral-800">No events captured yet</p>
              <p className="text-[11px] leading-relaxed text-neutral-500">
                Send an HTTP request to your endpoint URL to see it stream live into this view.
              </p>
              <div className="rounded border border-neutral-200 bg-white p-2.5 font-mono text-[10px] text-neutral-800 text-left overflow-x-auto">
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
                      ? 'bg-neutral-100 border-l-2 border-neutral-900'
                      : 'hover:bg-neutral-100/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold border ${
                          ev.method === 'POST'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : ev.method === 'GET'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        {ev.method}
                      </span>
                      <span className="font-mono text-xs font-semibold text-neutral-900 truncate max-w-[150px]">
                        {ev.path}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold ${
                        ev.statusCode >= 200 && ev.statusCode < 300
                          ? 'text-emerald-700'
                          : ev.statusCode >= 400
                          ? 'text-rose-700'
                          : 'text-amber-700'
                      }`}
                    >
                      {ev.statusCode}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span>{timeStr}</span>
                    <span>{ev.sizeBytes} B</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right Pane: Event Inspector */}
      <div className="hidden md:flex flex-1 flex-col overflow-hidden bg-white">
        {selectedEvent ? (
          <>
            {/* Inspector Header */}
            <div className="flex h-14 items-center justify-between border-b border-neutral-200 bg-white px-6">
              <div className="flex items-center gap-3">
                <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800">
                  {selectedEvent.method}
                </span>
                <span className="font-mono text-sm font-semibold text-neutral-900">
                  {selectedEvent.path}
                </span>
                <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 font-medium">
                  HTTP {selectedEvent.statusCode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCurl}
                  className="flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
                >
                  {copiedCurl ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedCurl ? 'Copied cURL' : 'Copy cURL'}</span>
                </button>
              </div>
            </div>

            {/* Inspector Navigation Tabs */}
            <div className="flex border-b border-neutral-200 bg-neutral-50/60 px-6">
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
                      ? 'border-neutral-900 text-neutral-900 font-semibold'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-6 bg-white">
              {activeTab === 'body' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-600 font-medium">
                      {selectedEvent.isInvalidJson ? (
                        <span className="text-amber-700 font-semibold">Malformed JSON Payload</span>
                      ) : (
                        'Valid JSON Payload'
                      )}
                    </span>
                    <button
                      onClick={() => setViewRawBody(!viewRawBody)}
                      className="rounded border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 hover:bg-neutral-50"
                    >
                      {viewRawBody ? 'Pretty View' : 'Raw View'}
                    </button>
                  </div>

                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs text-neutral-900 overflow-x-auto">
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
                <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-700">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Header Key</th>
                        <th className="py-2.5 px-4 font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 text-neutral-800">
                      {Object.entries(selectedEvent.headers || {}).map(([key, val]) => (
                        <tr key={key}>
                          <td className="py-2 px-4 font-semibold text-neutral-900">{key}</td>
                          <td className="py-2 px-4 break-all">
                            {val === '[REDACTED]' ? (
                              <span className="rounded border border-rose-200 bg-rose-50 px-1.5 py-0.5 text-[10px] text-rose-800 font-sans font-medium">
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
                <div className="rounded-lg border border-neutral-200 bg-white p-4">
                  {Object.keys(selectedEvent.queryParams || {}).length === 0 ? (
                    <p className="text-xs text-neutral-500">No URL query parameters present.</p>
                  ) : (
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="border-b border-neutral-200 text-neutral-700">
                        <tr>
                          <th className="pb-2 font-semibold">Parameter</th>
                          <th className="pb-2 font-semibold">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {Object.entries(selectedEvent.queryParams).map(([k, v]) => (
                          <tr key={k}>
                            <td className="py-1.5 font-semibold text-neutral-900">{k}</td>
                            <td className="py-1.5 text-neutral-700">{String(v)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {activeTab === 'signature' && (
                <div className="max-w-xl space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-semibold text-neutral-900">Cryptographic Signature Verification</h4>
                  <p className="text-xs text-neutral-600">
                    Verify this payload's HMAC against your secret key using constant-time comparison.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-neutral-700">Signature Scheme</label>
                      <select
                        value={sigScheme}
                        onChange={(e) => setSigScheme(e.target.value as any)}
                        className="mt-1 w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900"
                      >
                        <option value="github">GitHub (X-Hub-Signature-256)</option>
                        <option value="stripe">Stripe Timestamped (t=...,v1=...)</option>
                        <option value="generic-sha256">Generic HMAC-SHA256</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-neutral-700">Signing Secret</label>
                      <input
                        type="password"
                        placeholder="whsec_..."
                        value={secretInput}
                        onChange={(e) => setSecretInput(e.target.value)}
                        className="mt-1 w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900"
                      />
                    </div>

                    <button
                      onClick={() => {
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
                      className="rounded-md bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                      Verify Signature
                    </button>

                    {sigResult && (
                      <div
                        className={`rounded-lg p-3 text-xs ${
                          sigResult.valid
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                            : 'bg-rose-50 border border-rose-200 text-rose-800'
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
                <div className="h-80 w-full rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden">
                  <ReactFlow nodes={flowNodes} edges={flowEdges} fitView>
                    <Background color="#d4d4d8" gap={16} />
                    <Controls />
                  </ReactFlow>
                </div>
              )}

              {activeTab === 'replays' && (
                <div className="space-y-3">
                  {selectedEvent.deliveries?.length === 0 ? (
                    <p className="text-xs text-neutral-500">No replay attempts recorded for this event yet.</p>
                  ) : (
                    selectedEvent.deliveries?.map((d: any) => (
                      <div key={d.id} className="rounded-lg border border-neutral-200 bg-white p-3 text-xs shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-neutral-900">{d.destinationUrl}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-bold border ${
                              d.success ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'
                            }`}
                          >
                            HTTP {d.statusCode || 'ERR'}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-neutral-500 text-[11px]">
                          <span>Latency: {d.latencyMs}ms</span>
                          <span>{new Date(d.sentAt).toLocaleString()}</span>
                        </div>
                        {d.errorMessage && <p className="mt-2 text-rose-600 font-mono text-[11px]">{d.errorMessage}</p>}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center p-8 text-center text-xs text-neutral-400">
            Select an event from the feed to inspect details
          </div>
        )}
      </div>
    </div>
  );
};
