const User = require('../../../models/User');

const index = (req, res, next) => {
  User.all()
    .then(users => res.json(users.rows));
};

const show = (req, res, next) => {
  User.find(req.params.id)
    .then(user => res.json(user.rows[0]));
};

module.exports = { index, show };
