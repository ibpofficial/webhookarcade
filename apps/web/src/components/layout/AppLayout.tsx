import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Terminal, ExternalLink } from 'lucide-react';
import { Sidebar } from './Sidebar.js';
import { useAuthStore } from '../../stores/auth.js';
import { subscribeToWorkspace } from '../../lib/socket.js';

export const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { workspace, initAuth, token, createGuestWorkspace } = useAuthStore();
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
    <div className="flex h-screen w-screen overflow-hidden bg-white text-neutral-900">
      <Sidebar
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top App Bar */}
        <header className="flex h-14 items-center justify-between border-b border-neutral-200 bg-white px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded p-1.5 text-neutral-500 hover:text-neutral-900 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-neutral-500">Playground</span>
              <span className="text-xs text-neutral-300">/</span>
              <span className="text-xs font-semibold text-neutral-900 capitalize">
                {location.pathname.split('/').pop() || 'overview'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="http://localhost:4000/docs"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900 sm:flex"
            >
              <Terminal className="h-3.5 w-3.5 text-neutral-600" />
              <span>API Reference</span>
              <ExternalLink className="h-3 w-3 text-neutral-400" />
            </a>

            {workspace?.isGuest && (
              <button
                onClick={() => navigate('/app/settings')}
                className="rounded-md bg-neutral-900 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Claim Workspace
              </button>
            )}
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
