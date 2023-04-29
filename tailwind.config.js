/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          // bgColor:"#27363B ",
          bgColor:"#091f2c",
          txtColor:"#FFFFFF",
          // boxColor:"#417172",
          boxColor:"#233034",
          HeaderFooter:"#233034"
         

    },
    fontFamily:{
    
      txtFont:['Slab']
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
