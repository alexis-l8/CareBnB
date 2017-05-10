const querystring = require('querystring');

module.exports = {
  method: 'GET',
  path: '/facebookLogin',
  config: {
    auth: false,
  },
  handler: (request, reply) => {
    const params = {
      client_id: process.env.FACEBOOK_CLIENT_ID,
      redirect_uri: `${process.env.BASE_URL}/welcome`,
    };

    const base = 'https://www.facebook.com/dialog/oauth?';
    const query = querystring.stringify(params);
    return reply.redirect(base + query);
  },
};
