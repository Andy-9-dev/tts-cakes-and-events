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
        // Brand colors as CSS variables
        bg: {
          primary: '#0F0F0F',
          surface: '#1A1A1A',
        },
        accent: {
          coral: '#E8493F',
          gold: '#F5B335',
        },
        text: {
          primary: '#F7F2EA',
          muted: '#B8B2A7',
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
    },
  },
  plugins: [],
}
export default config
