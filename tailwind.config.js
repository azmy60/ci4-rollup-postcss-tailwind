/* eslint-disable global-require */
module.exports = {
  content: [
    'src/js/**/*.js',
    'app/Views/**/*.php',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/forms'),
  ],
};
