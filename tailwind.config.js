/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#f8fafc',          // Clean, luminous off-white/light slate
          surface: '#ffffff',     // Crisp white surface
          card: '#ffffff',        // Card background
          cardHover: '#f1f5f9',   // Hover background
          border: '#e2e8f0',      // Architectural blueprint border
          borderLight: '#cbd5e1', // Distinct hover border
          text: '#0f172a',        // Deep ink text for maximum clarity & readability
          muted: '#475569',       // Clean secondary slate
          subtle: '#64748b',      // Technical figure slate
          accent: '#0284c7',      // Clear technical blue/cyan
          accentDark: '#0369a1',
          accentLight: '#e0f2fe',
          ink: '#0a0f1d',         // Deep obsidian for high-contrast engineering blocks
          inkSurface: '#111827',
          inkBorder: '#1f293d',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        subheading: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Plus Jakarta Sans', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)",
        'grid-pattern-dark': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '40px 40px',
      }
    },
  },
  plugins: [],
}
