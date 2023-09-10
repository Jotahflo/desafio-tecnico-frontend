/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        12: "repeat(12, 15rem)",
      },
      colors: {
        transparent: "transparent",
        card: "#003d80",
      },
      animation: {
        bounce: "bounce-in-bottom 1.1s both",
      },
    },
  },
  plugins: [],
};
