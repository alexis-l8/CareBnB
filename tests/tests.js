const test = require('tape');
const add = require('../src/helpers/helper_functions.js');

test('Check if Tape is working', (t) => {
  t.pass('test 1 passes');
  t.end();
});

test('Check if Codecov actually works and generates a report', (t) => {
  t.equal(add(3, 4), 7, 'Should return 7');
  t.end();
});
