/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000000',
      white: '#FFFFFF',

      blue: {
        900: '#000A0F',
        800: '#001119',
        700: '#00111A',
        600: '#00131C',
        500: '#091E26',
      },

      cyan: {
        500: '#82F3FF',
      },

      gray: {
        700: '#7C7C8A',
        500: '#C4C4CC', 
      },

      red: {
        800: '#750310',
        500: '#92000E',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
}
