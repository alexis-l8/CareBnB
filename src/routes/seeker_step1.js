module.exports = {
  method: 'GET',
  path: '/seeker_step1',
  handler: (request, reply) => {
    reply.view('seeker_questionnaire');
  },
};
