const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Quicksand', 'Poppins', 'system-ui'],
      },
      colors: {
        lime: colors.lime,
        green: colors.green,
        gray: colors.gray,
        coolGray: colors.coolGray,
      },
      margin: {
        '25x': '0 25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
  daisyui: {
    base: false,
  },
};
