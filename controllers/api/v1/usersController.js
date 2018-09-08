const User = require('../../../models/User');

const index = (req, res, next) => {
  User.all()
    .then((users) => res.json(users));
};

module.exports = { index };
