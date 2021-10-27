/* eslint-disable import/no-extraneous-dependencies, global-require */
// TODO use es6
const plugins = [
  require('stylelint'),
  require('postcss-import'),
  require('tailwindcss/nesting'),
  require('tailwindcss'),
  require('postcss-reporter')({ clearReportedMessages: true }),
];

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [...plugins, require('autoprefixer'), require('stylelint')] : plugins,
};
