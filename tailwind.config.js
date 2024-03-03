/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm' : "640px",
      'md' : "768px",
      "lg" : "1024px",
      "xl" : "1280px",
      "2xl" : "1536px"
    },
    colors:{
      "primary-1":'#4B4643',
      "primary-2":'#DCDEDD',
      "primary-3":'#F9F9F9',
      "primary-4":'#74483F',
    }, 
    // spacing:{
    //     '7.5' : "7.5%"
    // },
    extend: {},
  },
  plugins: [],
}