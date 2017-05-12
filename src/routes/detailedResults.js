const data = require('./../database/get_data.js');
module.exports = {
  method: 'GET',
  path: '/detailedresults',
  handler: (request, reply) => {
    const homeOwnerId = request.query.homeowner;
    data.getHomeOwnerPreferences(homeOwnerId, (err, res) => {
      if (err) console.log(err);
      const data = res[0];
      reply.view('detailedResults', { data });
    });
  },
};
