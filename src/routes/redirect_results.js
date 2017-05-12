
const data = require('./../database/get_data');

module.exports = {
  method: 'GET',
  path: '/redirect_results',
  handler: (request, reply) => {
    console.log(request.auth.credentials);
    const { postcode, distance } = request.auth.credentials;
    request.cookieAuth.set(Object.assign({}, request.auth.credentials, {
      submitted: true,
    }));
    console.log('postcode', request.auth.credentials);
    data.getHomeOwners((dbErr, res) => {
      if (dbErr) {
        reply('Sorry, there is a database connection error');
        return;
      }
      reply.view('results', { res, credentials: request.auth.credentials });
    });
  },
};
