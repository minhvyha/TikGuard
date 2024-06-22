/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        text: {
          50: '#f0f1f5',
          100: '#e0e2eb',
          200: '#c2c5d6',
          300: '#a3a8c2',
          400: '#858bad',
          500: '#666f99',
          600: '#52587a',
          700: '#3d425c',
          800: '#292c3d',
          900: '#14161f',
          950: '#0a0b0f',
        },
        background: {
          50: '#f0f1f4',
          100: '#e2e3e9',
          200: '#c4c7d4',
          300: '#a7aabe',
          400: '#8a8ea8',
          500: '#6c7293',
          600: '#575b75',
          700: '#414458',
          800: '#2b2e3b',
          900: '#16171d',
          950: '#0b0b0f',
        },
        primary: {
          50: '#eceef9',
          100: '#d8ddf3',
          200: '#b1bae7',
          300: '#8b98da',
          400: '#6476ce',
          500: '#3d53c2',
          600: '#31439b',
          700: '#253274',
          800: '#18214e',
          900: '#0c1127',
          950: '#060813',
        },
        secondary: {
          50: '#e9ecfb',
          100: '#d4d9f7',
          200: '#a9b3ef',
          300: '#7e8ee7',
          400: '#5368df',
          500: '#2842d7',
          600: '#2035ac',
          700: '#182881',
          800: '#101a56',
          900: '#080d2b',
          950: '#040716',
        },
        accent: {
          50: '#e7ebfd',
          100: '#d0d6fb',
          200: '#a1aef7',
          300: '#7185f4',
          400: '#425cf0',
          500: '#1334ec',
          600: '#0f29bd',
          700: '#0b1f8e',
          800: '#08155e',
          900: '#040a2f',
          950: '#020518',
        },
      },
    },
  },
  plugins: [],
};
