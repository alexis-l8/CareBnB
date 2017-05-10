module.exports = {
  method: 'GET',
  path: '/account',
  handler: (request, reply) => {
    reply.view('fileUpload');
  },
};
