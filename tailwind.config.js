/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#fafe11',
        text: '#212121',
        'primary-dark': '#e8e50f',
      },
    },
  },
  plugins: [],
};