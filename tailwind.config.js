/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors:{
        primary_color:"#121212",
        footer_color:"#000000",
        hover:"#1A1A1A",
        paragrafo:"#F7F7F7",
         sound:"#4D4D4D",
       }
    },
  },
  plugins: [],
}

