const post = require('./../database/post');

module.exports = {
  method: 'POST',
  path: '/thankyou',
  handler: (request, reply) => {
    post.createUser(request.payload, (err, res) => {
      if (err) {
        console.log('error baby!', err);
      } else {
        reply.view('thank_you');
      }
    });
  },

};
