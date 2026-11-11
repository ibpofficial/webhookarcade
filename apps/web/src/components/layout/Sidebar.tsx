import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Inbox,
  Send,
  RotateCcw,
  Flame,
  FileCode2,
  BarChart3,
  Terminal,
  BookOpen,
  Settings,
  LayoutDashboard,
  Copy,
  Check,
  Radio,
  Menu,
  X,
} from 'lucide-react';
import { useAuthStore } from '../../stores/auth.js';

interface SidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpenMobile, onCloseMobile }) => {
  const { workspace, activeEndpoint, endpoints, setActiveEndpoint } = useAuthStore();
  const [copied, setCopied] = useState(false);

  const handleCopyEndpoint = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeEndpoint) return;
    navigator.clipboard.writeText(activeEndpoint.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    {
      group: 'WORKSPACE',
      items: [
        { label: 'Overview', to: '/app/overview', icon: LayoutDashboard },
        { label: 'Webhook Inbox', to: '/app/inbox', icon: Inbox },
        { label: 'Event Composer', to: '/app/composer', icon: Send },
        { label: 'Replay Engine', to: '/app/replay', icon: RotateCcw },
        { label: 'Chaos Lab', to: '/app/chaos', icon: Flame },
        { label: 'Scenarios', to: '/app/scenarios', icon: FileCode2 },
        { label: 'Analytics', to: '/app/analytics', icon: BarChart3 },
      ],
    },
    {
      group: 'DEVELOPER TOOLS',
      items: [
        { label: 'CLI & Local Forwarding', to: '/app/cli-docs', icon: Terminal },
        { label: 'API & Documentation', to: '/app/api-docs', icon: BookOpen },
        { label: 'Settings', to: '/app/settings', icon: Settings },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-0 max-lg:-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 shadow-md">
              <Radio className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="font-semibold tracking-tight text-white">Webhook Arcade</span>
              <span className="ml-1.5 rounded bg-violet-500/20 px-1.5 py-0.5 text-[10px] font-medium text-violet-300">
                v0.1
              </span>
            </div>
          </div>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="rounded p-1 text-slate-400 hover:text-white lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Active Endpoint Quick Switcher & Copy */}
        <div className="border-b border-sidebar-border p-3">
          <div className="rounded-lg border border-border-subtle bg-surface-muted p-2.5">
            <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Receiver
              </span>
              {workspace?.isGuest && (
                <span className="rounded bg-amber-500/10 px-1 text-[10px] text-amber-400">Guest Mode</span>
              )}
            </div>

            {endpoints.length > 1 ? (
              <select
                className="w-full truncate rounded border border-border bg-surface px-2 py-1 text-xs text-white"
                value={activeEndpoint?.id}
                onChange={(e) => {
                  const found = endpoints.find((ep) => ep.id === e.target.value);
                  if (found) setActiveEndpoint(found);
                }}
              >
                {endpoints.map((ep) => (
                  <option key={ep.id} value={ep.id}>
                    {ep.name}
                  </option>
                ))}
              </select>
            ) : (
              <div className="truncate text-xs font-semibold text-slate-200">
                {activeEndpoint?.name || 'Default Inbox'}
              </div>
            )}

            <div className="mt-2 flex items-center justify-between gap-1.5 rounded bg-black/40 px-2 py-1 text-[11px] font-mono text-slate-400">
              <span className="truncate">{activeEndpoint?.url || 'http://localhost:4000/ingest/...'}</span>
              <button
                onClick={handleCopyEndpoint}
                className="ml-1 rounded p-1 text-slate-400 hover:text-cyan-400 focus-visible:ring-1"
                title="Copy webhook URL"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
          {navLinks.map((section) => (
            <div key={section.group}>
              <div className="px-3 pb-2 text-[10px] font-semibold tracking-wider text-slate-400">
                {section.group}
              </div>
              <nav className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={onCloseMobile}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-violet-600/20 text-violet-300 font-semibold'
                          : 'text-slate-300 hover:bg-surface/50 hover:text-white'
                      }`
                    }
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-slate-400" />
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* User / Workspace Footer */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="truncate font-medium text-slate-300">{workspace?.name || 'Local Workspace'}</span>
            <span className="rounded bg-violet-950 px-1.5 py-0.5 text-[10px] text-violet-400">Free</span>
          </div>
        </div>
      </aside>
    </>
  );
};
