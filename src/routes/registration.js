module.exports = {
  method: 'GET',
  path: '/registration',
  handler: (request, reply) => {
    reply.view('registration-form');
  },
};
