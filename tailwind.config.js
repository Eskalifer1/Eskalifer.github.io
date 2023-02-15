const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1200px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "400px" },
      min2xl: { min: "1535px" },
      minxl: { min: "1279px" },
      minlg: { min: "1023px" },
      minmd: { min: "767px" },
      minsm: { min: "639px" },
      minxs: { min: "400px" },
    },
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(270px, 1fr))",
        "4col": "repeat(4, minmax(270px, 1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-54595F": {
          color: "#54595F",
        },
      });
    }),
  ],
};
