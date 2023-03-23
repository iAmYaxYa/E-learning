/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main : '#007FFF',
        rgba : 'rgba(0,0,0,0.7)',
        skeleton : '#ddd',
      },
      fontFamily:{
        Roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}
