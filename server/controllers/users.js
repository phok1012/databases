const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.users.getAll((err, results) => {
      res.json(results);
    });
  },
  post: (req, res) => {
    let params = [ req.body.username ];
    console.log(params);
    models.users.create(params, (err, results) => {
      res.json(results);
    });
  }
};
