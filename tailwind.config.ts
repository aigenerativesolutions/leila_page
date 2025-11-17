import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F4F2',
        accent: '#9D805D',
        'text-dark': '#292323',
        'text-secondary': '#524335',
        'gray-medium': '#605B5B',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
