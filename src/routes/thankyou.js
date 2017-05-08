module.exports = {
  method: 'POST',
  path: '/thankyou',
  handler: (request, reply) => {
    console.log(request.payload);
    reply.view('thank_you');
  },
};
