import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-error/ },
    { pattern: /text-error/ },
    { pattern: /border-error/ },
    { pattern: /ring-error/ },
    { pattern: /shadow-error/ },
    { pattern: /bg-error\/\d+/ },
    { pattern: /hover:bg-error/ },
    { pattern: /hover:text-error/ },
    { pattern: /hover:border-error/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: '#18181B',
        secondary: '#27272A',
        cta: '#F8FAFC',
        background: '#000000',
        text: '#FAFAFA',
        mint: {
          DEFAULT: '#2DBD8A',
          light: '#5ECFA6',
          dark: '#1E9B6E',
          pale: '#E8F7F2',
          glow: 'rgba(45,189,138,0.15)',
        },
        navy: '#0D2137',
        slate: '#4A5568',
        muted: '#8FA3A0',
        error: '#E53E3E',
        success: '#2DBD8A',
        surface: {
          DEFAULT: '#F4F8F6',
          raised: '#EDF4F0',
        },
        border: {
          DEFAULT: '#E2EDE9',
          active: 'rgba(45,189,138,0.4)',
        },
        'off-white': '#FAFCFB',
        'warm-white': '#FFF8F5',
      },
    },
  },
  plugins: [],
} satisfies Config
