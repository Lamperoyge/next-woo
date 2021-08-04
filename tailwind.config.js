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
