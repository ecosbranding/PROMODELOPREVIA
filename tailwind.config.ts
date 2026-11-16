import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50:  '#fdf6f4',
          100: '#fbeaee',
          200: '#f0c3cf',
          500: '#d4849a',
          700: '#b95f78',
        },
        ink: {
          900: '#121212',
          700: '#1c1c1c',
          500: '#5a5250',
          400: '#6b605d',
          300: '#d9cfcc',
          200: '#e2d4d1',
        },
        accent: {
          urgente: '#f0c3cf',
          urgenteText: '#8a2a3f',
          puntual: '#fbefdc',
          puntualText: '#7a4a12',
        },
      },
      fontFamily: {
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif:  ['var(--font-playfair)', 'serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
      },
      boxShadow: {
        card: '0 2px 14px rgba(60,20,30,.07)',
      },
      aspectRatio: {
        'portrait': '3 / 4',
      },
    },
  },
  plugins: [],
} satisfies Config
