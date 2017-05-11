const data = require('./../database/get_data');
const querystring = require('querystring');

module.exports = {
  method: 'GET',
  path: '/results',
  handler: (request, reply) => {
    const url = `${request.connection.info.protocol
     }://${
     request.info.host
     }${request.url.path}`;

    const params = querystring.parse(url);
    const distance = params[Object.keys(params)[0]];
    const postcode = params[Object.keys(params)[1]].replace(' ', '+');
    request.cookieAuth.set({ postcode, distance });
    console.log(request.auth.credentials);
    data.getHomeOwners((dbErr, res) => {
      if (dbErr) {
        reply('Sorry, there is a database connection error');
        return;
      }
      reply.view('results', { res, credentials: request.auth.credentials });
    });
  },
};
