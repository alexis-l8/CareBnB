const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const handlebars = require('./handlebars');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const server = new hapi.Server();

server.connection({
  port,
});

server.register([inert, vision], (err) => {
  if (err) throw err;

  // server.views(handlebars);
  // server.route(routes);
});

module.exports = server;
