const Handlebars = require('handlebars');

Handlebars.registerHelper('inc', (value, options) => parseInt(value) + 1);
