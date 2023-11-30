/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    fontFamily:{
      body:['Roboto']
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',

        redMain: "#BF2E2E",
        redTitle:"#FFEBC5",
        redSubTitle:"#FF8DD5",
        yellowMain: "#000000",
        yellowTitle:"#FFFFFF",
        yellowSubTitle:"#FDFF8D",
        greenMain: "#000000",
        greenTitle:"#FFFFFF",
        greenSubTitle:"#00B71D"
      },
      spacing: {
        28: '7rem',
      },
      container: {
        center:false
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
