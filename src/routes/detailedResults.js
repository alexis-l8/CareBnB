const data = require('./../database/get_data.js');
module.exports = {
  method: 'GET',
  path: '/detailedresults',
  handler: (request, reply) => {
    let homeOwnerId = request.query.homeowner;
    if (homeOwnerId === undefined) homeOwnerId = 1;
    data.getHomeOwnerPreferences(homeOwnerId, (err, res) => {
      if (err) console.log(err);
      const data = res[0];
      reply.view('detailedResults', { data });
    });
  },
};
