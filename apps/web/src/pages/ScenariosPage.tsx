import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileCode2, Play, Plus, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { api } from '../lib/api.js';

export const ScenariosPage: React.FC = () => {
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadScenarios = async () => {
    setLoading(true);
    try {
      const res = await api.listScenarios();
      setScenarios(res.scenarios || []);
    } catch (err) {
      console.error('Failed to load scenarios:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadScenarios();
  }, []);

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-white text-neutral-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-neutral-900">Chaos & Test Scenarios</h2>
          <p className="text-xs text-neutral-500">
            Save, configure, and re-run reproducible webhook test suites and fault injection runs.
          </p>
        </div>

        <button
          onClick={() => navigate('/app/chaos')}
          className="flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>New Scenario</span>
        </button>
      </div>

      <div className="grid gap-4">
        {loading ? (
          <p className="text-xs text-neutral-500">Loading scenarios...</p>
        ) : scenarios.length === 0 ? (
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center text-xs text-neutral-500 space-y-3">
            <FileCode2 className="mx-auto h-8 w-8 text-neutral-400" />
            <p className="font-semibold text-neutral-800">No test scenarios created yet</p>
            <p>Create and save chaos runs from the Chaos Lab to execute automated assertion suites.</p>
          </div>
        ) : (
          scenarios.map((sc) => (
            <div
              key={sc.id}
              className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-400 transition-colors shadow-sm"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-neutral-900">{sc.name}</span>
                  <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-600 font-medium">
                    {sc.stepsCount} step{sc.stepsCount === 1 ? '' : 's'} · {sc.assertionsCount} assertion{sc.assertionsCount === 1 ? '' : 's'}
                  </span>
                </div>
                <p className="text-xs text-neutral-600">{sc.description || sc.destinationUrl}</p>
                {sc.lastRun && (
                  <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-neutral-500">
                    <Clock className="h-3 w-3" />
                    <span>Last Run: {new Date(sc.lastRun.startedAt).toLocaleString()}</span>
                    {sc.lastRun.allPassed ? (
                      <span className="text-emerald-700 font-medium flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Passed
                      </span>
                    ) : (
                      <span className="text-rose-700 font-medium flex items-center gap-1">
                        <XCircle className="h-3 w-3 text-rose-600" /> Failed
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/app/chaos')}
                  className="flex items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-50"
                >
                  <Play className="h-3 w-3 fill-current text-neutral-900" />
                  <span>Run Suite</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
