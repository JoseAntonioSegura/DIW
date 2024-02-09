/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primario': '#7E3AE5',
        'secundario': '#E6CB39',
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'Light-slate-blue': 'hsl(252, 100%, 67%)',
        'Light-royal-blue': 'hsl(241, 81%, 54%)',
        'Violet-blue': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue': 'hsla(241, 72%, 46%, 0)',
        'White': 'hsl(0, 0%, 100%)',
        'Pale-blue': 'hsl(221, 100%, 96%)',
        'Light-lavender': 'hsl(241, 100%, 89%)',
        'Dark-gray-blue': 'hsl(224, 30%, 27%)'
      },
      spacing:{
        '42': '170px'
      }
    },
  },
  plugins: [],
}

