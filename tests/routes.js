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

