/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        'background-light': '#F3F4F6',
        'background-dark': '#111111',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
