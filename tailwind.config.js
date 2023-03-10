/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: "'Baloo 2', 'sans-serif'",
        montserrat: "'Montserrat', 'sans-serif'",
      },
    },
  },
  plugins: [require("daisyui")],
};
