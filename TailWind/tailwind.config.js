/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primario': '#7E3AE5',
        'secundario': '#E6CB39'
      },
      spacing:{
        '42': '170px'
      }
    },
  },
  plugins: [],
}

