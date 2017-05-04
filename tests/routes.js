const server = require('./../src/server');
const test = require('tape');

test('Home Route', (t) => {
  const options = {
    url: '/',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});

// test('returns plugin error', (t) => {
//   const test = (srv, options, next) => next(new Error('from plugin'));
//
//   test.attributes = {
//     name: 'test',
//   };
//
//   server.register('dad', (err) => {
//     server.initialize((err) => {
//       t.ok(err);
//       t.end();
//     });
//   });
// });
