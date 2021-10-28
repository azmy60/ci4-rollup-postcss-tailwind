/* eslint-disable global-require */
module.exports = {
  purge: [
    'src/scripts/**/*.js',
    'app/Views/**/*.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
