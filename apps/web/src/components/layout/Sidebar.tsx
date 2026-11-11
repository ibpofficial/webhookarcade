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
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-neutral-200 bg-neutral-50 transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-0 max-lg:-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-5 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white">
              <Radio className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-neutral-900 text-sm">Webhook Arcade</span>
              <span className="ml-1.5 rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-[10px] font-semibold text-neutral-600">
                v0.1
              </span>
            </div>
          </div>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="rounded p-1 text-neutral-400 hover:text-neutral-900 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Active Endpoint Quick Switcher & Copy */}
        <div className="border-b border-neutral-200 p-3 bg-white">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-2.5">
            <div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Active Receiver
              </span>
              {workspace?.isGuest && (
                <span className="rounded border border-neutral-200 bg-neutral-100 px-1 text-[10px] text-neutral-600">Guest</span>
              )}
            </div>

            {endpoints.length > 1 ? (
              <select
                className="w-full truncate rounded border border-neutral-300 bg-white px-2 py-1 text-xs text-neutral-900 font-medium"
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
              <div className="truncate text-xs font-semibold text-neutral-900">
                {activeEndpoint?.name || 'Default Inbox'}
              </div>
            )}

            <div className="mt-2 flex items-center justify-between gap-1.5 rounded border border-neutral-200 bg-white px-2 py-1 text-[11px] font-mono text-neutral-600">
              <span className="truncate">{activeEndpoint?.url || 'http://localhost:4000/ingest/...'}</span>
              <button
                onClick={handleCopyEndpoint}
                className="ml-1 rounded p-1 text-neutral-400 hover:text-neutral-900"
                title="Copy webhook URL"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
          {navLinks.map((section) => (
            <div key={section.group}>
              <div className="px-3 pb-2 text-[10px] font-bold tracking-wider text-neutral-400">
                {section.group}
              </div>
              <nav className="space-y-0.5">
                {section.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={onCloseMobile}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-neutral-900 text-white font-semibold'
                          : 'text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-900'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <item.icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                        <span>{item.label}</span>
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* User / Workspace Footer */}
        <div className="border-t border-neutral-200 p-3 bg-white">
          <div className="flex items-center justify-between text-xs">
            <span className="truncate font-semibold text-neutral-800">{workspace?.name || 'Local Workspace'}</span>
            <span className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600">Free</span>
          </div>
        </div>
      </aside>
    </>
  );
};
