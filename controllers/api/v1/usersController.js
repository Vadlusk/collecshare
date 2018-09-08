const User = require('../../../models/User');

const index = (req, res, next) => {
  User.all()
    .then(users => res.json(users.rows));
};

const show = (req, res, next) => {
  User.find(req.params.id)
    .then(user => user.rows[0] ? res.json(user.rows[0]) : res.sendStatus(404));
};

module.exports = { index, show };
