module.exports = {
  method: 'GET',
  path: '/postcode',
  handler: (request, reply) => {
    const postcode = request.auth.credentials.postcode;
    reply({ postcode });
  },
};
