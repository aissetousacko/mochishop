import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
        sintony: ['Sintony', 'sans-serif'],
      },
      fontSize: {
        base: '24px',
      },
      colors: {
        background: '#F9F4F4',
        primary: '#E35A5A',
        'primary-20': '#F4D5D5',
        secondary: '#E0D89A',
        'secondary-50': '#ECE6C7',
        accent: '#C0CF64',
        'accent-10': '#F7F2EB',
      },
      backgroundImage: {
        'section-home': "url('/home-section.png')",
      },
    },
  },
  plugins: [],
}
export default config
