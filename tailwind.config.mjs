import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090d16',
          card: '#111726',
          surface: '#111726',
          hover: '#161f33',
          border: '#1e293b',
          borderHover: '#334155',
          muted: '#64748b',
          text: '#94a3b8',
          heading: '#f8fafc',
        },
        neon: {
          green: '#00ff66',
          cyan: '#00f0ff',
          emerald: '#10b981',
          purple: '#b026ff',
          pink: '#ff007f',
          yellow: '#facc15',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        brand: ['Orbitron', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 102, 0.35)',
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.35)',
        'neon-glow': '0 0 25px rgba(0, 255, 102, 0.2), 0 0 10px rgba(0, 240, 255, 0.2)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 2.5s ease-in-out infinite alternate',
        'radar-sweep': 'radar 4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 4px rgba(0,255,102,0.4))' },
          '100%': { filter: 'drop-shadow(0 0 14px rgba(0,255,102,0.85))' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};
