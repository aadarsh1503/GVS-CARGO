/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], // Add this line for Roboto font
      },
      colors: {
        customGray: '#999190',
        GrayDark: '#726968',
        YellowDark: '#F0DC13',
        Graytext: '#7A7A7A',
        DarkYellow : '#FFBE0D',
        DarkOrange:'#F59608',
        GrayFoot:'#565656',
        YellowPoint :'#FEDF51',
        GrayBar:'#8B7F7E',
        YellowLight:'#F5DC4A'
      },
      backgroundImage: {
        'stripes': "linear-gradient(45deg, #ccac00 25%, transparent 25%, transparent 50%, #ccac00 50%, #ccac00 75%, transparent 75%, transparent)",
      },
      backgroundSize: {
        'stripes': '10px 10px',
      },
      borderWidth: {
        40: '40px',
        20: '20px',
      },
    },
  },
  plugins: [],
}
