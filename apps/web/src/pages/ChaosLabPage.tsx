import React, { useState } from 'react';
import {
  Flame,
  Play,
  CheckCircle2,
  XCircle,
  Copy,
  Clock,
  Shuffle,
  ShieldAlert,
  Zap,
} from 'lucide-react';
import { api } from '../lib/api.js';
import { useAuthStore } from '../stores/auth.js';

export const ChaosLabPage: React.FC = () => {
  const { workspace } = useAuthStore();
  const [destinationUrl, setDestinationUrl] = useState('http://127.0.0.1:4000/demo/idempotent');
  const [activePreset, setActivePreset] = useState<'duplicate' | 'burst' | 'delay' | 'badsig' | 'out_of_order'>('duplicate');
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState<{ completed: number; total: number } | null>(null);
  const [report, setReport] = useState<any | null>(null);

  // Preset Configurations
  const presets = [
    {
      id: 'duplicate',
      name: 'Duplicate Storm',
      icon: Copy,
      desc: '3 identical requests in quick succession to verify idempotency',
      steps: [
        {
          id: 's_dup',
          type: 'duplicate',
          name: 'Send 3 identical deliveries',
          enabled: true,
          config: { duplicateCount: 3, delayMs: 40 },
        },
      ],
      assertions: [
        {
          id: 'a_status',
          type: 'status_equals',
          description: 'All deliveries must return HTTP 200',
          enabled: true,
          expected: 200,
        },
        {
          id: 'a_idempotent',
          type: 'idempotent_processed_once',
          description: 'Receiver recognizes duplicates without double execution',
          enabled: true,
        },
      ],
    },
    {
      id: 'burst',
      name: 'Concurrency Spike',
      icon: Zap,
      desc: '10 requests dispatched simultaneously to test server throughput',
      steps: [
        {
          id: 's_burst',
          type: 'burst',
          name: '10 concurrent deliveries',
          enabled: true,
          config: { burstCount: 10, burstConcurrency: 5 },
        },
      ],
      assertions: [
        {
          id: 'a_latency',
          type: 'latency_below_ms',
          description: 'p95 latency must remain under 600ms',
          enabled: true,
          max: 600,
        },
      ],
    },
    {
      id: 'delay',
      name: 'Network Latency Jitter',
      icon: Clock,
      desc: 'Simulates 500ms network delay before delivery arrives',
      steps: [
        {
          id: 's_del',
          type: 'delay',
          name: 'Artificial network latency delay',
          enabled: true,
          config: { delayMs: 500 },
        },
      ],
      assertions: [
        {
          id: 'a_status',
          type: 'status_equals',
          description: 'Delayed delivery successfully processed',
          enabled: true,
          expected: 200,
        },
      ],
    },
    {
      id: 'badsig',
      name: 'Tampered Signature',
      icon: ShieldAlert,
      desc: 'Alters HMAC signature bytes to verify security rejection',
      steps: [
        {
          id: 's_badsig',
          type: 'bad_signature',
          name: 'Corrupt X-Hub-Signature-256 header',
          enabled: true,
          config: { badSignatureKey: 'x-hub-signature-256' },
        },
      ],
      assertions: [
        {
          id: 'a_status',
          type: 'status_equals',
          description: 'Receiver rejects tampered payload',
          enabled: true,
          expected: 401,
        },
      ],
    },
    {
      id: 'out_of_order',
      name: 'Out-of-Order Delivery',
      icon: Shuffle,
      desc: 'Dispatches Event 2 (fulfillment) before Event 1 (creation)',
      steps: [
        {
          id: 's_ooo',
          type: 'out_of_order',
          name: 'Swap sequential event arrival order',
          enabled: true,
          config: { orderGapMs: 150 },
        },
      ],
      assertions: [
        {
          id: 'a_handled',
          type: 'status_range',
          description: 'Responses return valid status codes [200, 422]',
          enabled: true,
          min: 200,
          max: 422,
        },
      ],
    },
  ];

  const currentPreset = presets.find((p) => p.id === activePreset)!;

  const handleRunChaos = async () => {
    if (!workspace) return;
    setRunning(true);
    setProgress({ completed: 0, total: currentPreset.steps.length * 3 });
    setReport(null);

    try {
      // 1. Create Scenario
      const scRes = await api.createScenario({
        name: `Chaos Run: ${currentPreset.name}`,
        description: currentPreset.desc,
        destinationUrl,
        basePayload: JSON.stringify({
          id: 'evt_chaos_' + Math.random().toString(36).substring(2, 9),
          event: 'payment.succeeded',
          amount: 4999,
          timestamp: new Date().toISOString(),
        }),
        baseHeaders: { 'content-type': 'application/json' },
        steps: currentPreset.steps,
        assertions: currentPreset.assertions,
        rngSeed: 12345,
      });

      // 2. Run Scenario
      const runRes = await api.runScenario(scRes.scenario.id);
      setReport(runRes.report);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Execution failed');
    } finally {
      setRunning(false);
      setProgress(null);
    }
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-white text-neutral-900">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-neutral-900" />
            <h2 className="text-lg font-bold text-neutral-900">Chaos Lab</h2>
          </div>
          <p className="text-xs text-neutral-500">
            Simulate real-world network and webhook delivery failures with automated assertion checking.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="url"
            value={destinationUrl}
            onChange={(e) => setDestinationUrl(e.target.value)}
            className="w-72 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900 focus-visible:outline-none"
            placeholder="Target URL..."
          />

          <button
            onClick={handleRunChaos}
            disabled={running}
            className="flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
          >
            <Play className={`h-3.5 w-3.5 fill-current ${running ? 'animate-pulse' : ''}`} />
            <span>{running ? (progress ? `Executing (${progress.completed}/${progress.total})...` : 'Executing Suite...') : 'Run Chaos Suite'}</span>
          </button>
        </div>
      </div>

      {/* Preset Cards */}
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {presets.map((preset) => {
          const isSelected = activePreset === preset.id;
          const Icon = preset.icon;

          return (
            <button
              key={preset.id}
              onClick={() => setActivePreset(preset.id as any)}
              className={`flex flex-col text-left p-3.5 rounded-lg border transition-all ${
                isSelected
                  ? 'border-neutral-900 bg-neutral-100 shadow-sm'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-md ${
                  isSelected ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700'
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="mt-3 text-xs font-bold text-neutral-900">{preset.name}</span>
              <p className="mt-1 text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                {preset.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Results View */}
      {report ? (
        <div className="space-y-6">
          {/* Executive Summary Card */}
          <div
            className={`rounded-lg border p-5 shadow-sm ${
              report.allPassed
                ? 'border-emerald-200 bg-emerald-50'
                : 'border-rose-200 bg-rose-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {report.allPassed ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-rose-600" />
                )}
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">
                    {report.allPassed ? 'All Chaos Assertions Passed' : 'Chaos Assertions Failed'}
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Completed {report.totalDeliveries} deliveries in {report.durationMs}ms
                  </p>
                </div>
              </div>

              <div className="flex gap-4 text-xs font-mono">
                <div>
                  <span className="text-neutral-500">Min:</span> <span className="font-bold text-neutral-900">{report.latencyStats.min}ms</span>
                </div>
                <div>
                  <span className="text-neutral-500">Avg:</span> <span className="font-bold text-neutral-900">{report.latencyStats.avg}ms</span>
                </div>
                <div>
                  <span className="text-neutral-500">p95:</span> <span className="font-bold text-neutral-900">{report.latencyStats.p95}ms</span>
                </div>
                <div>
                  <span className="text-neutral-500">Max:</span> <span className="font-bold text-neutral-900">{report.latencyStats.max}ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Assertions Evaluation Table */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5 space-y-3 shadow-sm">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Assertion Evaluation Matrix
            </h4>

            <div className="divide-y divide-neutral-200">
              {report.assertions.map((a: any) => (
                <div key={a.assertionId} className="flex items-center justify-between py-2.5 text-xs">
                  <div className="flex items-center gap-2.5">
                    {a.passed ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-rose-600" />
                    )}
                    <span className="text-neutral-900 font-medium">{a.description}</span>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] font-mono">
                    {a.actual && <span className="text-neutral-500">Actual: {String(a.actual)}</span>}
                    <span
                      className={`rounded px-1.5 py-0.5 font-bold border ${
                        a.passed ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'
                      }`}
                    >
                      {a.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliveries Timeline */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5 space-y-3 shadow-sm">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Deliveries Timeline ({report.deliveries.length})
            </h4>

            <div className="divide-y divide-neutral-200">
              {report.deliveries.map((del: any) => (
                <div key={del.attemptId} className="flex items-center justify-between py-2 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-neutral-500">{del.attemptId}</span>
                    <span className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[10px] text-neutral-700">
                      {del.stepType}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 font-mono text-[11px]">
                    <span className="text-neutral-500">{del.latencyMs}ms</span>
                    <span
                      className={`font-bold ${
                        del.success ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      HTTP {del.statusCode || 'ERR'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-neutral-200 bg-neutral-50/50 p-12 text-center text-xs text-neutral-400">
          Select a chaos scenario preset above and click "Run Chaos Suite" to inspect failure resilience.
        </div>
      )}
    </div>
  );
};
