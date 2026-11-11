import { io, Socket } from 'socket.io-client';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    const token = localStorage.getItem('arcade_token');
    socket = io(API_BASE, {
      auth: { token },
      autoConnect: true,
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => {
      console.log('[Socket] Connected to Webhook Arcade server');
    });

    socket.on('disconnect', () => {
      console.log('[Socket] Disconnected from server');
    });
  }

  return socket;
}

export function subscribeToWorkspace(workspaceId: string): void {
  const s = getSocket();
  s.emit('join:workspace', workspaceId);
}

