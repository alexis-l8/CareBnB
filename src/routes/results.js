const data = require('./../database/get_data');

module.exports = {
  method: 'GET',
  path: '/results',
  handler: (request, reply) => {
    data.getHomeOwners((dbErr, res) => {
      if (dbErr) {
        reply('Sorry, there is a database connection error');
        return;
      }
      console.log({ res });
      reply.view('results', { res });
    });
  },
};
