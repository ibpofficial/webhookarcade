import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Terminal, ExternalLink } from 'lucide-react';
import { Sidebar } from './Sidebar.js';
import { useAuthStore } from '../../stores/auth.js';
import { subscribeToWorkspace } from '../../lib/socket.js';

export const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { workspace, initAuth, isLoading, token, createGuestWorkspace } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If no token exists, automatically create guest workspace so playground works immediately
    if (!token && !localStorage.getItem('arcade_token')) {
      createGuestWorkspace().catch((err) => {
        console.error('Failed to create guest workspace:', err);
      });
    } else {
      initAuth();
    }
  }, []);

  useEffect(() => {
    if (workspace?.id) {
      subscribeToWorkspace(workspace.id);
    }
  }, [workspace?.id]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-canvas text-slate-100">
      <Sidebar
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top App Bar */}
        <header className="flex h-14 items-center justify-between border-b border-border-subtle bg-canvas-subtle px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded p-1.5 text-slate-400 hover:text-white lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-400">Playground</span>
              <span className="text-xs text-slate-600">/</span>
              <span className="text-xs font-semibold text-slate-200 capitalize">
                {location.pathname.split('/').pop() || 'overview'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="http://localhost:4000/docs"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded border border-border px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-violet-500/50 hover:text-white sm:flex"
            >
              <Terminal className="h-3.5 w-3.5 text-violet-400" />
              <span>API Reference</span>
              <ExternalLink className="h-3 w-3 text-slate-500" />
            </a>

            {workspace?.isGuest && (
              <button
                onClick={() => navigate('/app/settings')}
                className="rounded bg-violet-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-violet-500"
              >
                Claim Workspace
              </button>
            )}
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
