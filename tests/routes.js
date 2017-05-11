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

test('homeseeker step1 route', (t) => {
  const options = {
    url: '/seeker_step1',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});

test('homeseeker step2 route', (t) => {
  const options = {
    url: '/seeker_step2',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});

test('results route', (t) => {
  const options = {
    url: '/results',
    method: 'POST',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 400, 'statuscode should return 400');
    t.end();
  });
});

test('getUsers route', (t) => {
  const options = {
    url: '/getUsers',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});

test('detailedresults route', (t) => {
  const options = {
    url: '/detailedresults',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});
