import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppLayout } from './components/layout/AppLayout.js';
import { LandingPage } from './pages/LandingPage.js';
import { OverviewPage } from './pages/OverviewPage.js';
import { InboxPage } from './pages/InboxPage.js';
import { ComposerPage } from './pages/ComposerPage.js';
import { ReplayPage } from './pages/ReplayPage.js';
import { ChaosLabPage } from './pages/ChaosLabPage.js';
import { ScenariosPage } from './pages/ScenariosPage.js';
import { AnalyticsPage } from './pages/AnalyticsPage.js';
import { CliDocsPage } from './pages/CliDocsPage.js';
import { SettingsPage } from './pages/SettingsPage.js';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Playground App Shell */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/inbox" replace />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="inbox" element={<InboxPage />} />
            <Route path="composer" element={<ComposerPage />} />
            <Route path="replay" element={<ReplayPage />} />
            <Route path="chaos" element={<ChaosLabPage />} />
            <Route path="scenarios" element={<ScenariosPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="cli-docs" element={<CliDocsPage />} />
            <Route path="api-docs" element={<CliDocsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
