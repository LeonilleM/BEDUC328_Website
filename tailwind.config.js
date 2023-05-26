/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
      "grey-custom" : "#ECEEF1",
    },
  },
},
  plugins: [],
  
}
