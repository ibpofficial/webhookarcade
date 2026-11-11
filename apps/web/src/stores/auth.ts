import { create } from 'zustand';
import { api } from '../lib/api.js';

interface WorkspaceInfo {
  id: string;
  name: string;
  isGuest: boolean;
}

interface EndpointInfo {
  id: string;
  name: string;
  tokenPrefix: string;
  fullToken?: string;
  url: string;
}

interface AuthState {
  token: string | null;
  workspace: WorkspaceInfo | null;
  activeEndpoint: EndpointInfo | null;
  endpoints: EndpointInfo[];
  isLoading: boolean;
  initAuth: () => Promise<void>;
  createGuestWorkspace: () => Promise<void>;
  setActiveEndpoint: (endpoint: EndpointInfo) => void;
  refreshEndpoints: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  token: localStorage.getItem('arcade_token'),
  workspace: null,
  activeEndpoint: null,
  endpoints: [],
  isLoading: false,

  initAuth: async () => {
    const existingToken = localStorage.getItem('arcade_token');
    if (!existingToken) {
      return;
    }

    set({ isLoading: true });
    try {
      const me = await api.getMe();
      const endpointsRes = await api.listEndpoints();
      const endpoints = endpointsRes.endpoints || [];

      set({
        token: existingToken,
        workspace: me.workspace || { id: me.workspaceId, name: 'Workspace', isGuest: me.isGuest },
        endpoints,
        activeEndpoint: endpoints[0] || null,
        isLoading: false,
      });
    } catch {
      localStorage.removeItem('arcade_token');
      set({ token: null, workspace: null, activeEndpoint: null, isLoading: false });
    }
  },

  createGuestWorkspace: async () => {
    set({ isLoading: true });
    try {
      const res = await api.createGuest();
      localStorage.setItem('arcade_token', res.token);
      set({
        token: res.token,
        workspace: res.workspace,
        activeEndpoint: res.endpoint,
        endpoints: [res.endpoint],
        isLoading: false,
      });
    } catch (err) {
      set({ isLoading: false });
      throw err;
    }
  },

  setActiveEndpoint: (endpoint) => {
    set({ activeEndpoint: endpoint });
  },

  refreshEndpoints: async () => {
    try {
      const endpointsRes = await api.listEndpoints();
      const endpoints = endpointsRes.endpoints || [];
      const current = get().activeEndpoint;
      const matched = endpoints.find((e) => e.id === current?.id) || endpoints[0] || null;
      set({ endpoints, activeEndpoint: matched });
    } catch {
      // ignore
    }
  },

  logout: () => {
    localStorage.removeItem('arcade_token');
    set({ token: null, workspace: null, activeEndpoint: null, endpoints: [] });
  },
}));
