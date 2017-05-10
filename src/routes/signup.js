module.exports = {
  method: 'GET',
  path: '/signup',
  handler: (request, reply) => {
    reply.view('signup');
  },
};
