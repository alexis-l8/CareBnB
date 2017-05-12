
const db_connection = require('./../../database/db_connection.js');

const post = {};

post.createUser = ({ first_name, surname, gender, date_of_birth, hours_available, occupation, children, smoker, pets }, cb) => {
  const newProfileQuery = 'INSERT INTO HomeseekerProfile (first_name, surname, gender, date_of_birth, hours_available, occupation, children, smoker, pets) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
  const userinfo = [first_name, surname, gender, date_of_birth, hours_available, occupation, children, smoker, pets];
  console.log(date_of_birth);
  db_connection.query(newProfileQuery, userinfo, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};

module.exports = post;
