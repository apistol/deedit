/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        fadeOut: 'fadeOut 0.7s ease-out forwards',
      },
      colors: {
        black: '#000',
        antiquewhite: {
          100: '#ffebd9',
          200: '#e6d1bf',
        },
        firebrick: '#c00c00',
        white: '#fff',
        lightcoral: '#ff8d8f',
        blanchedalmond: '#ffebc5',
        gray: 'rgba(255, 255, 255, 0.5)',
        tomato: '#e63326',
      },
      spacing: {},
      fontFamily: {
        inter: 'Inter',
      },
      borderRadius: {
        '29xl': '48px',
        '61xl': '80px',
      },
    },
    fontSize: {
      xl: '20px',
      base: '16px',
      '11xl': '30px',
      '5xl': '24px',
      lg: '18px',
      '46xl': '65px',
      '33xl': '52px',
      '20xl': '39px',
      lgi: '19px',
      '208xl': '227px',
      '72xl': '91px',
      '38xl': '57px',
      inherit: 'inherit',
    },
    // screens: {
    //   mq975: {
    //     raw: 'screen and (max-width: 975px)',
    //   },
    //   mq950: {
    //     raw: 'screen and (max-width: 950px)',
    //   },
    //   mq700: {
    //     raw: 'screen and (max-width: 700px)',
    //   },
    //   mq450: {
    //     raw: 'screen and (max-width: 450px)',
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
