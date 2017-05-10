const post = require('./../database/post');
module.exports = {
  method: 'POST',
  path: '/thankyou',
  handler: (request, reply) => {
    console.log(request.payload);
    post.createUser(request.payload, (err, res) => {
      if (err) console.log(err);
      console.log(res);
    });
    reply.view('thank_you');
  },

};
