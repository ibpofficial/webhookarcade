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
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-8 bg-white text-neutral-900 max-w-4xl">
      <div>
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-neutral-900" />
          <h2 className="text-lg font-bold text-neutral-900">Settings</h2>
        </div>
        <p className="text-xs text-neutral-500">
          Manage workspace settings, claim guest sessions, and tune endpoint response simulator behavior.
        </p>
      </div>

      {/* Guest Claiming Section */}
      {workspace?.isGuest && (
        <div className="rounded-lg border border-neutral-300 bg-neutral-50 p-5 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-neutral-800" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Claim Guest Workspace
            </h3>
          </div>
          <p className="text-xs text-neutral-600">
            You are currently using an ephemeral guest workspace. Register with an email to persist your
            endpoints, chaos suites, and captured history permanently.
          </p>

          {claimSuccess ? (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Workspace claimed! Reloading session...</span>
            </div>
          ) : (
            <form onSubmit={handleClaim} className="grid gap-3 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Full Name"
                value={claimName}
                onChange={(e) => setClaimName(e.target.value)}
                className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={claimEmail}
                onChange={(e) => setClaimEmail(e.target.value)}
                className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900"
                required
              />
              <input
                type="password"
                placeholder="Password (min 8 chars)"
                value={claimPassword}
                onChange={(e) => setClaimPassword(e.target.value)}
                className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900"
                required
              />
              <button
                type="submit"
                disabled={claiming}
                className="sm:col-span-3 rounded-md bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors"
              >
                {claiming ? 'Claiming Workspace...' : 'Claim This Workspace'}
              </button>
            </form>
          )}
        </div>
      )}

      {/* Response Simulator Configuration */}
      <div className="rounded-lg border border-neutral-200 bg-white p-5 space-y-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Sliders className="h-4 w-4 text-neutral-900" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
            Response Simulator Configuration
          </h3>
        </div>
        <p className="text-xs text-neutral-600">
          Configure what your live endpoint returns to senders (status codes, artificial latency, and custom bodies).
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-neutral-700">HTTP Status Code</label>
            <input
              type="number"
              value={simStatusCode}
              onChange={(e) => setSimStatusCode(parseInt(e.target.value, 10))}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-700">Artificial Latency Delay (ms)</label>
            <input
              type="number"
              value={simDelayMs}
              onChange={(e) => setSimDelayMs(parseInt(e.target.value, 10))}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-900"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-neutral-700">Response Body</label>
            <textarea
              rows={4}
              value={simBody}
              onChange={(e) => setSimBody(e.target.value)}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white p-3 font-mono text-xs text-neutral-900"
            />
          </div>
        </div>

        <button
          onClick={handleSaveResponseRules}
          disabled={savingRules}
          className="rounded-md bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors"
        >
          {rulesSaved ? 'Saved!' : savingRules ? 'Saving...' : 'Save Simulator Rules'}
        </button>
      </div>

      {/* Danger Zone */}
      <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Trash2 className="h-4 w-4 text-rose-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800">
            Danger Zone
          </h3>
        </div>
        <p className="text-xs text-neutral-600">
          Delete endpoint history and purge captured events from the database.
        </p>
        <button
          onClick={() => {
            if (confirm('Are you sure you want to purge event history?')) {
              window.location.reload();
            }
          }}
          className="rounded-md border border-rose-300 bg-white px-3 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-50 transition-colors"
        >
          Purge Event History
        </button>
      </div>
    </div>
  );
};
