/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#0D7E73",
        navbg: "#E3E6F3"
      },
      spacing:{
        big: "1000px",
        vh90: "89vh"
      },
      backgroundSize: {
        '50%': '100%',
      },
      backgroundPosition: {
        hero: "top 20% right 0"
      }
    },
  },
  plugins: [],
}