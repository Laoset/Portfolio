/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "2xl": "1680px",
        xxl: "1600px",
      },
      backgroundImage: {
        light: "linear-gradient(90deg, #e6e9f0 0%, #eef1f5 100%)",
        dark: "linear-gradient(to right, #434343 0%, black 100%)",
        flama: "linear-gradient(to right from-orange-400 to-rose-400)",
        nuevo: "linear-gradient(to right, #c94b4b, #4b134f)",
        nuevo2: "#c94b4b",
        fondito2: "linear-gradient(0deg,#1f2026 85.44%,rgba(26,25,29,0) 100%)",
      },
      colors: {
        nuevoWhite: "#efefef",
        nuevoOrange: "#de2b2b",
        nuevoGris: "#393737",
        casiFondo: "#1e1e1e",
        otroFondo: "#1f2026",
        colorCards: "#363740",
        nuevoBoton: "#DD936B",
        nuevoBoton2: "#ea7067",
        demas: "#c94b4b",
      },
    },
    fontFamily: {
      marca: ["Kdam Thmor Pro"],
      habil: ["Barlow Condensed"],
      navbar: ["Righteous"],
      oswald: ["Oswald"],
      cardo: ["Cardo"],
      fireCode: ["Fira Code"],
    },
  },
  plugins: [],
};
