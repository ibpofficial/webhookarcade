import React, { useState } from 'react';
import { Settings, Shield, Sliders, Trash2, CheckCircle2 } from 'lucide-react';
import { useAuthStore } from '../stores/auth.js';
import { api } from '../lib/api.js';

export const SettingsPage: React.FC = () => {
  const { workspace, activeEndpoint, refreshEndpoints } = useAuthStore();
  const [claimEmail, setClaimEmail] = useState('');
  const [claimPassword, setClaimPassword] = useState('');
  const [claimName, setClaimName] = useState('');
  const [claiming, setClaiming] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);

  // Response Simulator Rules Form State
  const [simStatusCode, setSimStatusCode] = useState(200);
  const [simDelayMs, setSimDelayMs] = useState(0);
  const [simBody, setSimBody] = useState('{"received": true}');
  const [savingRules, setSavingRules] = useState(false);
  const [rulesSaved, setRulesSaved] = useState(false);

  const handleClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!claimEmail || !claimPassword) return;
    setClaiming(true);

    try {
      await api.register({
        email: claimEmail,
        password: claimPassword,
        name: claimName || 'Developer',
        claimWorkspaceId: workspace?.id,
      });
      setClaimSuccess(true);
      setTimeout(() => window.location.reload(), 1500);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Claim failed');
    } finally {
      setClaiming(false);
    }
  };

  const handleSaveResponseRules = async () => {
    if (!activeEndpoint) return;
    setSavingRules(true);
    setRulesSaved(false);

    try {
      await api.updateResponseRules(activeEndpoint.id, {
        statusCode: Number(simStatusCode),
        delayMs: Number(simDelayMs),
        body: simBody,
        contentType: 'application/json',
        headers: { 'x-arcade-simulated': 'true' },
      });
      setRulesSaved(true);
      setTimeout(() => setRulesSaved(false), 2000);
      refreshEndpoints();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to update response rules');
    } finally {
      setSavingRules(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-8 bg-canvas max-w-4xl">
      <div>
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-violet-400" />
          <h2 className="text-lg font-bold text-white">Settings</h2>
        </div>
        <p className="text-xs text-slate-400">
          Manage workspace settings, claim guest sessions, and tune endpoint response simulator behavior.
        </p>
      </div>

      {/* Guest Claiming Section */}
      {workspace?.isGuest && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-950/10 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-amber-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Claim Guest Workspace
            </h3>
          </div>
          <p className="text-xs text-slate-300">
            You are currently using an ephemeral guest workspace. Register with an email to persist your
            endpoints, chaos suites, and captured history permanently.
          </p>

          {claimSuccess ? (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>Workspace claimed! Reloading session...</span>
            </div>
          ) : (
            <form onSubmit={handleClaim} className="grid gap-3 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Full Name"
                value={claimName}
                onChange={(e) => setClaimName(e.target.value)}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-white"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={claimEmail}
                onChange={(e) => setClaimEmail(e.target.value)}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-white"
                required
              />
              <input
                type="password"
                placeholder="Password (min 8 chars)"
                value={claimPassword}
                onChange={(e) => setClaimPassword(e.target.value)}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-white"
                required
              />
              <button
                type="submit"
                disabled={claiming}
                className="sm:col-span-3 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-black hover:bg-amber-400 disabled:opacity-50"
              >
                {claiming ? 'Claiming Workspace...' : 'Claim This Workspace'}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Response Simulator Configuration */}
      <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Sliders className="h-4 w-4 text-cyan-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Response Simulator Configuration
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Configure what your live endpoint returns to senders (status codes, artificial latency, and custom bodies).
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-slate-300">HTTP Status Code</label>
            <input
              type="number"
              value={simStatusCode}
              onChange={(e) => setSimStatusCode(parseInt(e.target.value, 10))}
              className="mt-1 w-full rounded border border-border bg-canvas px-3 py-1.5 text-xs text-white"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300">Artificial Latency Delay (ms)</label>
            <input
              type="number"
              value={simDelayMs}
              onChange={(e) => setSimDelayMs(parseInt(e.target.value, 10))}
              className="mt-1 w-full rounded border border-border bg-canvas px-3 py-1.5 text-xs text-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-slate-300">Response Body</label>
            <textarea
              rows={4}
              value={simBody}
              onChange={(e) => setSimBody(e.target.value)}
              className="mt-1 w-full rounded border border-border bg-canvas p-3 font-mono text-xs text-white"
            />
          </div>
        </div>

        <button
          onClick={handleSaveResponseRules}
          disabled={savingRules}
          className="rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white hover:bg-violet-500 disabled:opacity-50"
        >
          {rulesSaved ? 'Saved!' : savingRules ? 'Saving...' : 'Save Simulator Rules'}
        </button>
      </div>

      {/* Danger Zone */}
      <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Trash2 className="h-4 w-4 text-rose-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300">
            Danger Zone
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Delete endpoint history and purge captured events from the database.
        </p>
        <button
          onClick={() => {
            if (confirm('Are you sure you want to purge event history?')) {
              window.location.reload();
            }
          }}
          className="rounded-lg border border-rose-500/40 bg-surface px-3 py-1.5 text-xs font-medium text-rose-400 hover:bg-rose-500/10"
        >
          Purge Event History
        </button>
      </div>
    </div>
  );
};

