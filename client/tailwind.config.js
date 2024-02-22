/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: ['Roboto'],
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',

        redMain: '#BF2E2E',
        redTitle: '#FFEBC5',
        redSubTitle: '#FF8DD5',
        yellowMain: '#000000',
        yellowTitle: '#FFFFFF',
        yellowSubTitle: '#FDFF8D',
        greenMain: '#000000',
        greenTitle: '#FFFFFF',
        greenSubTitle: '#00B71D',
      },
      backgroundImage: {
        'beautiful-gradient':
          'linear-gradient(135deg, #BF00A9 0%, #BF2E2E 50%, #FF711D 100%)',
      },
      spacing: {
        28: '7rem',
      },
      container: {
        center: false,
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
};
