/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mpgin: {
          yellow: '#fdf100',
          lightYellow: '#fffac3',
          blue: '#0860b1',
          red: '#ea1b26',
        },
      },
    },
  },
  plugins: [],
};