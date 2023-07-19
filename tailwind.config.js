/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      OpenSans : ['Open Sans' , 'sans-serif']
    },
    gridTemplateColumns: {
      'folderItems' : 'repeat(auto-fill, minmax(200px , 320px))'
    },

  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
  
}

