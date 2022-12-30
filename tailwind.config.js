/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        light: "linear-gradient(90deg, #e6e9f0 0%, #eef1f5 100%)",
        dark: "linear-gradient(to right, #434343 0%, black 100%)",
        flama: 'linear-gradient(to right from-orange-400 to-rose-400)'
      },
    colors: {
      'nuevoWhite': "#efefef",
      'nuevoOrange': '#de2b2b',
      'nuevoGris': '#393737'
    }
    },
    fontFamily:{
      marca: ["Kdam Thmor Pro"],
      habil: ["Barlow Condensed"],
      navbar: ["Righteous"],
      oswald: ['Oswald'],
      cardo: ['Cardo']
    }
  },
  plugins: [],
}
