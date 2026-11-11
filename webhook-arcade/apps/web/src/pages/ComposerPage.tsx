import React, { useState, useEffect } from 'react';
import { Send, Plus, Trash2, CheckCircle2, XCircle, Clock, BookTemplate } from 'lucide-react';
import { api } from '../lib/api.js';

export const ComposerPage: React.FC = () => {
  const [destinationUrl, setDestinationUrl] = useState('http://127.0.0.1:4000/demo/idempotent');
  const [method, setMethod] = useState('POST');
  const [headers, setHeaders] = useState<{ key: string; value: string }[]>([
    { key: 'Content-Type', value: 'application/json' },
    { key: 'User-Agent', value: 'Webhook-Arcade-Composer/0.1' },
  ]);
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        id: 'evt_composer_' + Math.random().toString(36).substring(2, 9),
        event: 'order.created',
        amount: 8900,
        currency: 'USD',
        customer: 'alex.morgan@example.com',
      },
      null,
      2,
    ),
  );
  const [templates, setTemplates] = useState<any[]>([]);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  useEffect(() => {
    api.listTemplates()
      .then((res) => setTemplates(res.templates || []))
      .catch((err) => console.error('Failed to load templates:', err));
  }, []);

  const handleApplyTemplate = (tpl: any) => {
    setPayload(tpl.payload);
    setMethod(tpl.method || 'POST');
    const hdrArr = Object.entries(tpl.defaultHeaders || {}).map(([key, value]) => ({
      key,
      value: String(value),
    }));
    setHeaders(hdrArr);
  };

  const handleSend = async () => {
    setSending(true);
    setResult(null);

    const headerObj: Record<string, string> = {};
    for (const h of headers) {
      if (h.key.trim()) headerObj[h.key.trim()] = h.value;
    }

    try {
      const res = await api.sendEvent({
        destinationUrl,
        method,
        headers: headerObj,
        payload,
      });
      setResult({ success: true, ...res.delivery });
    } catch (err: unknown) {
      setResult({
        success: false,
        error: err instanceof Error ? err.message : String(err),
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col lg:flex-row overflow-hidden bg-white text-neutral-900">
      {/* Left Form: Configuration */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 border-r border-neutral-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-neutral-900">Event Composer</h2>
            <p className="text-xs text-neutral-500">Craft, validate, and dispatch custom webhook payloads.</p>
          </div>

          {/* Template Picker */}
          {templates.length > 0 && (
            <div className="flex items-center gap-2">
              <BookTemplate className="h-4 w-4 text-neutral-600" />
              <select
                onChange={(e) => {
                  const t = templates.find((item) => item.id === e.target.value);
                  if (t) handleApplyTemplate(t);
                }}
                defaultValue=""
                className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs text-neutral-800 font-medium"
              >
                <option value="" disabled>Load Provider Template...</option>
                {templates.map((tpl) => (
                  <option key={tpl.id} value={tpl.id}>
                    {tpl.name} ({tpl.provider})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Method & Destination */}
        <div className="flex gap-3">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-900 focus-visible:outline-none"
          >
            {['POST', 'GET', 'PUT', 'PATCH', 'DELETE'].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <input
            type="url"
            value={destinationUrl}
            onChange={(e) => setDestinationUrl(e.target.value)}
            placeholder="https://your-api.com/webhooks"
            className="flex-1 rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus-visible:outline-none"
          />

          <button
            onClick={handleSend}
            disabled={sending}
            className="flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
          >
            <Send className="h-3.5 w-3.5" />
            <span>{sending ? 'Sending...' : 'Send Event'}</span>
          </button>
        </div>

        {/* Headers Editor */}
        <div className="rounded-lg border border-neutral-200 bg-white p-4 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-800">HTTP Headers</span>
            <button
              onClick={() => setHeaders([...headers, { key: '', value: '' }])}
              className="flex items-center gap-1 text-[11px] font-semibold text-neutral-900 hover:text-neutral-600"
            >
              <Plus className="h-3 w-3" />
              <span>Add Header</span>
            </button>
          </div>

          <div className="space-y-2">
            {headers.map((h, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Header Name"
                  value={h.key}
                  onChange={(e) => {
                    const copy = [...headers];
                    copy[i]!.key = e.target.value;
                    setHeaders(copy);
                  }}
                  className="w-1/3 rounded border border-neutral-300 bg-white px-2.5 py-1 text-xs text-neutral-900 placeholder-neutral-400 font-mono"
                />
                <input
                  type="text"
                  placeholder="Header Value"
                  value={h.value}
                  onChange={(e) => {
                    const copy = [...headers];
                    copy[i]!.value = e.target.value;
                    setHeaders(copy);
                  }}
                  className="flex-1 rounded border border-neutral-300 bg-white px-2.5 py-1 text-xs text-neutral-900 placeholder-neutral-400 font-mono"
                />
                <button
                  onClick={() => setHeaders(headers.filter((_, idx) => idx !== i))}
                  className="p-1 text-neutral-400 hover:text-rose-600"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Payload Body Editor */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-neutral-800">Request Body (JSON)</label>
          <textarea
            rows={12}
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs text-neutral-900 focus-visible:outline-none"
          />
        </div>
      </div>

      {/* Right Column: Execution Result */}
      <div className="w-full lg:w-96 overflow-y-auto p-6 bg-neutral-50/50">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
          Delivery Response
        </h3>

        {result ? (
          <div className="space-y-4">
            <div
              className={`rounded-lg border p-4 shadow-sm ${
                result.success
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                  : 'border-rose-200 bg-rose-50 text-rose-900'
              }`}
            >
              <div className="flex items-center gap-2">
                {result.success ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-rose-600" />
                )}
                <span className="font-semibold text-xs">
                  {result.success ? `HTTP ${result.statusCode} ${result.statusText || 'OK'}` : 'Delivery Failed'}
                </span>
              </div>
              {result.latencyMs !== undefined && (
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-neutral-600">
                  <Clock className="h-3 w-3" />
                  <span>Latency: {result.latencyMs}ms</span>
                </div>
              )}
              {result.error && <p className="mt-2 text-xs font-mono text-rose-700">{result.error}</p>}
            </div>

            {result.body && (
              <div className="space-y-1.5">
                <span className="text-xs text-neutral-600 font-medium">Response Body</span>
                <div className="rounded-lg border border-neutral-200 bg-white p-3 font-mono text-xs text-neutral-900 overflow-x-auto max-h-60 shadow-sm">
                  <pre className="whitespace-pre-wrap">{result.body}</pre>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center text-xs text-neutral-400 shadow-sm">
            Dispatch an event to inspect real-time response latency and headers.
          </div>
        )}
      </div>
    </div>
  );
};
