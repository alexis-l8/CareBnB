module.exports = {
  method: 'GET',
  path: '/seeker_step2',
  handler: (request, reply) => {
    reply.view('seeker_questionnaire2');
  },
};
