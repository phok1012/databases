const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const queryStr = 'select * from users';
    db.query(queryStr, (err, results) => {
      callback(null, results);
    });
  },
  create: (params, callback) => {
    const queryStr = 'insert into users(name) values (?)';
    db.query(queryStr, params, (err, results) => {
      console.log(params)
      callback(null, results);
    });
  }
};
