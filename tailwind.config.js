/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          bgColor:"#27363B ",
          // bgColor:"#0c0d11",
          txtColor:"#FFFFFF",
          boxColor:"#417172",
          // boxColor:"#171a25",
          HeaderFooter:"#233034"
         

    },
    fontFamily:{
      txtFont:['Gugi']
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    letterSpacing:{
      widest:'.1rem',
      widested:'.3rem'
    }

  },
  },
  plugins: [   require('tailwind-scrollbar')({ nocompatible: true }),],
}
