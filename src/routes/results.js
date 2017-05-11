const data = require('./../database/get_data');
const joi = require('joi');

module.exports = {
  method: 'POST',
  path: '/results',
  config: {
    validate: {
      payload: joi.object({
        postcode: joi.string().regex(/^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/).required(),
        distance: joi.number().integer().min(5).max(15).required(),
      }),
    },
  },
  handler: (request, reply) => {
    request.cookieAuth.set(request.payload);
    data.getHomeOwners((dbErr, res) => {
      if (dbErr) {
        reply('Sorry, there is a database connection error');
        return;
      }
      reply.view('results', { res, credentials: request.auth.credentials });
    });
  },
};
