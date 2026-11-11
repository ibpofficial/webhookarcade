/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0a0d14',
          subtle: '#0e121d',
        },
        sidebar: {
          DEFAULT: '#101522',
          border: '#1e263d',
        },
        surface: {
          DEFAULT: '#161c2e',
          elevated: '#1c243b',
          muted: '#131826',
        },
        border: {
          DEFAULT: '#232d48',
          subtle: '#1a2238',
          focus: '#8b5cf6',
        },
        violet: {
          DEFAULT: '#8b5cf6',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          glow: 'rgba(6, 182, 212, 0.15)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'JetBrains Mono',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
