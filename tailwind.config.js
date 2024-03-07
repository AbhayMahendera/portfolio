/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [`./views/**/*.html`], // all .html files
  theme: {
    extend: {
      colors: {
        'mc-1': '#282535',
        'mc-2': '#4F4557',
        'mc-3': '#6D5D6E',
        'mc-4': '#F4EEE0',
        'mc-1-d' : '#1F232D',
        'mc-text' : '#AFB3C3',
        'mc-text-d' : '#6B7080',
      },
      screens: {
        'bigger-phone': '580px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

