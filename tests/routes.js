const server = require('./../src/server');
const tape = require('tape');

const routes = [
  { url: '/', method: 'GET', statusCode: 200, payload: 'DOCTYPE html' },
  { url: '/styles.css', method: 'GET', statusCode: 200 },
  { url: '/some-bad-url', method: 'GET', statusCode: 404 },
  { url: '/seeker_step1', method: 'GET', statusCode: 200 },
  { url: '/seeker_step2', method: 'GET', statusCode: 200 },
  // { url: '/results', method: 'POST', statusCode: 200 },
  { url: '/getUsers', method: 'GET', statusCode: 200 },
  { url: '/detailedresults', method: 'GET', statusCode: 200 },
  { url: '/facebookLogin', method: 'GET', statusCode: 302 },
  { url: '/registration', method: 'GET', statusCode: 200 },
  { url: '/thankyou', method: 'POST', statusCode: 500 },
  { url: '/signup', method: 'GET', statusCode: 200 },
  // { url: '/fileUpload', method: 'GET', statusCode: 200 },
  { url: '/sign-s3', method: 'GET', statusCode: 200 },
  { url: '/signup', method: 'GET', statusCode: 200 },
  // { url: '/redirect_results', method: 'GET', statusCode: 200 },
  // { url: '/postcode', method: 'GET', statusCode: 200 },
];

routes.forEach((route) => {
  tape(`${route.url} ${route.method} route`, (t) => {
    const options = {
      url: route.url,
      method: route.method,
    };
    server.inject(options, (res) => {
      route.statusCode && t.equal(res.statusCode, route.statusCode, `statusCode should be ${route.statusCode}`);
      route.payload && t.ok(res.payload.indexOf(route.payload) !== -1, 'correct payload should be served');
      t.end();
    });
  });
});
