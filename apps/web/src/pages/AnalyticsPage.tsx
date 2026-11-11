import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import { api } from '../lib/api.js';

export const AnalyticsPage: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    api.getAnalytics()
      .then((res) => setData(res))
      .catch((err) => console.error('Failed to load analytics:', err));
  }, []);

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-canvas">
      <div>
        <h2 className="text-lg font-bold text-white">Delivery & Reliability Analytics</h2>
        <p className="text-xs text-slate-400">
          Track webhook throughput, failure distributions, and response latency over time.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-surface p-4">
          <span className="text-xs text-slate-400">Total Captured</span>
          <p className="mt-1 text-2xl font-bold text-white">{data?.totalEvents || 0}</p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <span className="text-xs text-slate-400">Success Rate</span>
          <p className="mt-1 text-2xl font-bold text-emerald-400">{data?.successRate || 100}%</p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <span className="text-xs text-slate-400">Error Rate</span>
          <p className="mt-1 text-2xl font-bold text-rose-400">{data?.errorRate || 0}%</p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <span className="text-xs text-slate-400">p95 Latency</span>
          <p className="mt-1 text-2xl font-bold text-cyan-400">
            {data?.latencyStats?.p95 || 35}ms
          </p>
        </div>
      </div>

      {/* Volume Chart */}
      <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-violet-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Event Ingestion Volume
            </h3>
          </div>
          <span className="text-xs text-slate-500">Hourly Distribution</span>
        </div>

        <div className="h-64 w-full">
          {data?.volumeOverTime?.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.volumeOverTime}>
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{ background: '#161c2e', border: '1px solid #232d48', borderRadius: '8px' }}
                />
                <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-slate-500">
              No historical volume recorded yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

