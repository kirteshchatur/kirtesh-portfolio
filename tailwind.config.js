/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fbfbfe',
          dark: '#0a0a0d',
        },
        surface: {
          light: '#ffffff',
          dark: '#121217',
          'dark-elevated': '#181820',
        },
        border: {
          light: '#e5e7eb',
          dark: '#23232b',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          subtle: 'rgba(59, 130, 246, 0.1)',
        },
        muted: {
          light: '#6b7280',
          dark: '#9ca3af',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
