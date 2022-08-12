const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const queryStr = 'select m.id, u.name, m.text, m.roomname\
                      from messages m, users u\
                      where m.userid = u.id';
    db.query(queryStr, (err, results) => {
      callback(null, results);
    });
  },
  create: (params, callback) => {
    const queryStr = 'insert into messages(userid, text, roomname)\
                     values ((select u.id from users u where u.name = ? limit 1), ?, ?)';
    console.log('model messages create ', params)
    db.query(queryStr, params, (err, results) => {
      err ? callback(err) : callback(null, results);
      //callback(results);
    });
  }
};
