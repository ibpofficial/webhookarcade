import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { api } from '../lib/api.js';

export const AnalyticsPage: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    api.getAnalytics()
      .then((res) => setData(res))
      .catch((err) => console.error('Failed to load analytics:', err));
  }, []);

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-white text-neutral-900">
      <div>
        <h2 className="text-lg font-bold text-neutral-900">Delivery & Reliability Analytics</h2>
        <p className="text-xs text-neutral-500">
          Track webhook throughput, failure distributions, and response latency over time.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-xs text-neutral-500 font-medium">Total Captured</span>
          <p className="mt-1 text-2xl font-bold text-neutral-900">{data?.totalEvents || 0}</p>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-xs text-neutral-500 font-medium">Success Rate</span>
          <p className="mt-1 text-2xl font-bold text-neutral-900">{data?.successRate || 100}%</p>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-xs text-neutral-500 font-medium">Error Rate</span>
          <p className="mt-1 text-2xl font-bold text-neutral-900">{data?.errorRate || 0}%</p>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-xs text-neutral-500 font-medium">p95 Latency</span>
          <p className="mt-1 text-2xl font-bold text-neutral-900">
            {data?.latencyStats?.p95 !== undefined ? `${data.latencyStats.p95}ms` : '0ms'}
          </p>
        </div>
      </div>

      {/* Volume Chart */}
      <div className="rounded-lg border border-neutral-200 bg-white p-5 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-neutral-700" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
              Event Ingestion Volume
            </h3>
          </div>
          <span className="text-xs text-neutral-400">Hourly Distribution</span>
        </div>

        <div className="h-64 w-full">
          {data?.volumeOverTime?.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.volumeOverTime}>
                <XAxis dataKey="time" stroke="#71717a" fontSize={11} />
                <YAxis stroke="#71717a" fontSize={11} />
                <Tooltip
                  contentStyle={{ background: '#ffffff', border: '1px solid #e4e4e7', borderRadius: '6px', color: '#09090b' }}
                />
                <Bar dataKey="count" fill="#18181b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-neutral-400">
              No historical volume recorded yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
