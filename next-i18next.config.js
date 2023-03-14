const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'ua'], // list all supported languages here
    defaultLocale: 'en', // set the default language here
  },
  localePath: path.resolve('./public/locales'), // where to store translation files
};