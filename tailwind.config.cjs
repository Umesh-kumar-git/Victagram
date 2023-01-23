/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-gray':'#121212',
        'main-font':'#fafafa',
        'second-font':'#0062a2',
      }
    },
  },
  plugins: [],
}