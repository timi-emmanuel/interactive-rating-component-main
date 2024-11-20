/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {container:{center:true},
    screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px',
  },
    extend: {
      colors:{
        'Orange': 'hsl(25, 97%, 53%)',
        'lightGrey': 'hsl(217, 12%, 63%)',
        'darkBlue': 'hsl(213, 19%, 18%)',
        'veryDarkBlue': 'hsl(216, 12%, 8%)',
        'Orange': 'hsl(25, 97%, 53%)',
        'buttons': 'rgb(77, 85, 95)',
      },    
      fontFamily: {
        body: ['Overpass']
    },
  },
  plugins: [],
}
}
