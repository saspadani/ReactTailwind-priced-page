/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-bag': '#5B41FB',
        'blue2-bag': '#4456F8',
        'blue3-bag': '#53ACFF',
        'blue4-bag': '#573DFB',
        'dark-blue': '#160E4B',
        'light-purple': '#7C67FE',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
