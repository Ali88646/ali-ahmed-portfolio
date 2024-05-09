/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sequel: ["sequel", "sans"],
      },
      colors: {
        primaryColor: "#ffa44c",
        secondaryColor: "#b66ae2",
        headingsColor: "#0b0b0e",
        textColor: "#838383",
        bgColor: "#fdfff4",
        btnBorderColor: "#bababa",
      },
    },
  },
  plugins: [],
};
