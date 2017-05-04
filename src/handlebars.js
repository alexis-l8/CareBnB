const Handlebars = require('handlebars');

module.exports = {
  engines: { hbs: Handlebars },
  path: 'views',
  layout: 'default',
  layoutPath: 'views/layout',
  partialsPath: 'views/partials',
  helpersPath: 'views/helpers',
};
