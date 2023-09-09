/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        12: "repeat(12, 15rem)",
      },
    },
  },
  plugins: [],
};
