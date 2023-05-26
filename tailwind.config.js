/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' : ['Encode Sans', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
      "grey-custom" : "#ECEEF1",
      "uw-purple": "#4b2e83",
      "uw-gold": "#85754d",
    },
  },
},
  plugins: [],
  
}

