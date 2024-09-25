/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        greenBack: '#56A74A',
        secondary: '#1D1D1D',
        tertiary: '#F2EFE6',
        pumpkin: {
          'DEFAULT': '#F29B3E'
        },
        bone: '#F6F6F6'
      },
    },
  },
  plugins: [],
}