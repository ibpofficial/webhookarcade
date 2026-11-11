/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#ffffff',
          subtle: '#fafafa',
        },
        sidebar: {
          DEFAULT: '#fcfcfd',
          border: '#e4e4e7',
        },
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#ffffff',
          muted: '#f4f4f5',
        },
        border: {
          DEFAULT: '#e4e4e7',
          subtle: '#f4f4f5',
          focus: '#09090b',
        },
        primary: {
          DEFAULT: '#09090b',
          foreground: '#ffffff',
          hover: '#27272a',
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
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
