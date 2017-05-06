module.exports = {
  method: 'GET',
  path: '/results',
  handler: (request, reply) => {
    reply.view('results');
  },
};
