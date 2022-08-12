const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.messages.getAll((err, results) => {
      res.status(202);
      res.json(results);
    })
  }, // a function which handles a get request for all messages
  post: (req, res) => {
    console.log('starting post messages')
    let params = [ req.body.username, req.body.message, req.body.roomname];
    models.messages.create(params, (err, results) => {
      err ? res.sendStatus(500) : res.sendStatus(202);
    })
  } // a function which handles posting a message to the database
};
