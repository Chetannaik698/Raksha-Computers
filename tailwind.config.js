/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: 'rgb(var(--bg-navy) / <alpha-value>)',
        deep: 'rgb(var(--bg-deep) / <alpha-value>)',
        edge: 'rgb(var(--bg-edge) / <alpha-value>)',
        ink: 'rgb(var(--bg-ink) / <alpha-value>)',
        paper: 'rgb(var(--text-paper) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        // Logo Blue & Cyan
        electric: '#0066FF',
        cobalt: '#0052D4',
        cyan: '#00D2FF',
        // Logo Orange
        orange: {
          DEFAULT: '#FF6200',
          500: '#FF6200',
          600: '#EA580C',
        },
        // Logo Yellow & Gold
        yellow: {
          DEFAULT: '#FFB800',
          500: '#FFB800',
          400: '#FFC72C',
        },
        amber: '#FFA000',
        gold: '#FFC837',
        // Backward-compatible mappings (transforms previous salmon-red into logo flame & yellow)
        red: '#FF5E00',
        hot: '#FFB800'
      },
      fontFamily: {
        display: ['Unbounded', 'Arial Black', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
}
