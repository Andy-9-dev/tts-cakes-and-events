import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light warm premium palette
        bg: {
          cream: '#FBF6EE',      // Primary background
          white: '#FFFFFF',      // Card surface
          blush: '#FFF1EC',      // Alternate sections
        },
        text: {
          charcoal: '#2A2320',   // Primary text
          muted: '#6B605A',      // Secondary text
        },
        accent: {
          coral: '#E8493F',      // Decorative accents
          'coral-dark': '#C9372E', // Button text, links (AA contrast)
          gold: '#F5B335',       // Small touches only
        },
        dark: {
          bg: '#1A1514',         // Dark section background
        },
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(42, 35, 32, 0.06)',
        'soft-md': '0 4px 20px rgba(42, 35, 32, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
