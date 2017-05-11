module.exports = {
  method: 'GET',
  path: '/redirect_results',
  handler: (request, reply) => {
    const { postcode, distance } = request.auth.credentials;
    request.cookieAuth.set({ submitted: true });
    reply.redirect('/results');
  },
};
