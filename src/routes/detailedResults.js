module.exports = {
  method: 'GET',
  path: '/detailedresults',
  handler: (request, reply) => {
    reply.view('detailedResults');
  },
};
