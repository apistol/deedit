/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fontFamily: {
      body: ["Inter"],
    },
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",

        sex1: "#FFEBC5",
        sex2: "#FF8D8F",
        sex3: "#BF2E2E",
        yellowMain: "#000000",
        yellowTitle: "#FFFFFF",
        yellowSubTitle: "#FDFF8D",
        greenMain: "#000000",
        greenTitle: "#FFFFFF",
        greenSubTitle: "#00B71D",
      },
      backgroundImage: {
        redMain: "linear-gradient(45deg, #BF00A9, #BF2E2E ,#FF711D)", // Custom gradient
      },
      spacing: {
        28: "7rem",
      },
      height: {
        200: "200px", // Custom height utility
        400:"400px",
        600:"600px"
      },
      container: {
        center: false,
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
