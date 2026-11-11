const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('arcade_token');
  const headers: Record<string, string> = {
    'content-type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  };

  if (token && !headers['authorization']) {
    headers['authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    let errorMsg = `HTTP Error ${res.status}`;
    try {
      const json = await res.json();
      errorMsg = json.message || json.error || errorMsg;
    } catch {
      // ignore
    }
    throw new Error(errorMsg);
  }

  return res.json() as Promise<T>;
}

export const api = {
  // Auth
  createGuest: () => apiFetch<{ token: string; workspace: any; endpoint: any }>('/api/auth/guest', { method: 'POST' }),
  getMe: () => apiFetch<any>('/api/auth/me'),
  register: (data: any) => apiFetch<any>('/api/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data: any) => apiFetch<any>('/api/auth/login', { method: 'POST', body: JSON.stringify(data) }),

  // Endpoints
  listEndpoints: () => apiFetch<{ endpoints: any[] }>('/api/endpoints'),
  createEndpoint: (data: any) => apiFetch<{ endpoint: any }>('/api/endpoints', { method: 'POST', body: JSON.stringify(data) }),
  getEndpoint: (id: string) => apiFetch<{ endpoint: any }>(`/api/endpoints/${id}`),
  updateEndpoint: (id: string, data: any) => apiFetch<{ endpoint: any }>(`/api/endpoints/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  updateResponseRules: (id: string, rules: any) => apiFetch<{ rule: any }>(`/api/endpoints/${id}/rules`, { method: 'PUT', body: JSON.stringify(rules) }),
  deleteEndpoint: (id: string) => apiFetch<any>(`/api/endpoints/${id}`, { method: 'DELETE' }),

  // Events
  listEvents: (params: Record<string, any> = {}) => {
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null && v !== '') q.set(k, String(v));
    }
    const queryStr = q.toString() ? `?${q.toString()}` : '';
    return apiFetch<{ events: any[]; nextCursor: string | null }>(`/api/events${queryStr}`);
  },
  getEvent: (id: string) => apiFetch<{ event: any }>(`/api/events/${id}`),
  sendEvent: (data: any) => apiFetch<any>('/api/events/send', { method: 'POST', body: JSON.stringify(data) }),
  deleteEvent: (id: string) => apiFetch<any>(`/api/events/${id}`, { method: 'DELETE' }),

  // Replay
  replayEvent: (id: string, data: any) => apiFetch<any>(`/api/events/${id}/replay`, { method: 'POST', body: JSON.stringify(data) }),
  getReplays: (id: string) => apiFetch<{ replays: any[] }>(`/api/events/${id}/replays`),

  // Scenarios & Chaos
  listScenarios: () => apiFetch<{ scenarios: any[] }>('/api/scenarios'),
  createScenario: (data: any) => apiFetch<{ scenario: any }>('/api/scenarios', { method: 'POST', body: JSON.stringify(data) }),
  getScenario: (id: string) => apiFetch<{ scenario: any }>(`/api/scenarios/${id}`),
  runScenario: (id: string, data?: any) => apiFetch<any>(`/api/scenarios/${id}/run`, { method: 'POST', body: JSON.stringify(data || {}) }),
  getTestRun: (id: string) => apiFetch<{ testRun: any }>(`/api/test-runs/${id}`),

  // Analytics & Templates
  getAnalytics: () => apiFetch<any>('/api/analytics'),
  listTemplates: () => apiFetch<{ templates: any[] }>('/api/templates'),
};
