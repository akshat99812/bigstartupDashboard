/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aktiv-regular': ['AktivGrotesk-Regular', 'sans-serif'],
        'aktiv-medium': ['AktivGrotesk-Medium', 'sans-serif'],
        'aktiv-bold': ['AktivGrotesk-Bold', 'sans-serif'],
        'aktiv-xbold': ['AktivGrotesk-XBold', 'sans-serif'],
      },
      height: {
        '750': '750px',
        '75':'75px',
        '192':'192px',
      },
      width:{
        '455':'455px',
        '400':'400px'
      },
      colors:{
        'btnRed':'#FC1C00',

      },
      padding:{
        '500':'500px',
        '290':'290px'
      }
    },
  },
  plugins: [],
}