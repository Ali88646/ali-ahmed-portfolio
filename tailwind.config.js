/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ffa44c",
        primaryColorLow: "#FFA44C",
        secondaryColor: "#b66ae2",
        headingsColor: "#0b0b0e",
        textColor: "#838383",
        bgColor: "#FEFEFE",
        btnBorderColor: "#bababa",
      },
      gradientColorStops: {
        "btn-hover-bg": {
          start: "#b66ae2",
          end: "#ffa44c",
        },
      },
      fontFamily: {
        custom: ["sequel", "sans"],
      },
      boxShadow: {
        boxShadow: "0px 0px 15px 2px #ccc",
      },
    },
  },
  plugins: [],
};
