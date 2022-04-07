/* eslint-disable import/no-extraneous-dependencies, global-require */
// TODO use es6

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss/nesting')(),
    require('tailwindcss')(),
    require('postcss-reporter')({ clearReportedMessages: true }),
    process.env.NODE_ENV === 'production' ? require('autoprefixer')() : null,
    process.env.NODE_ENV === 'production' ? require('cssnano')({ preset: 'default' }) : null,
  ],
};
