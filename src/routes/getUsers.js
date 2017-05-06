const data = require('./../database/get_data');

module.exports = {
  method: 'GET',
  path: '/getUsers',
  handler: (request, reply) => {
    data.getHomeOwners((dbErr, res) => {
      if (dbErr) {
        reply('Sorry, no users found in the database');
        return;
      }
      reply(res);
    });
  },
};
