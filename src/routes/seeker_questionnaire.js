module.exports = {
  method: 'GET',
  path: '/seeker1',
  handler: (request, reply) => {
    reply.view('seeker_questionnaire');
  },
};
