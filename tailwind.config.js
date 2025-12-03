/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fbfc',
        foreground: '#1a2e35',
        aqua: {
          DEFAULT: '#00bcd4',
          light: '#4dd0e1',
          dark: '#0097a7',
        },
        surface: {
          DEFAULT: '#ffffff',
          light: '#e8f4f6',
        },
        muted: '#5a7a82',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        display: ['var(--font-bricolage)'],
      },
    },
  },
  plugins: [],
}

