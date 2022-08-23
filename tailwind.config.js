/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'outfit':['outfit']
      },
      colors:{
        'Softblue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'main': 'hsl(217, 54%, 11%)',
        'card': 'hsl(216, 50%, 16%)',
        'line': 'hsl(215, 32%, 27%)',
        
      },
    },
  },
  plugins: [],
}
