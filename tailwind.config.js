/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#545454",
        secondary: "#D9D9D9",
      },
      fontFamily: {
        oleo: "'Oleo Script', cursive",
      },
    },
  },
  plugins: [],
};
