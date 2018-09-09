const User = require('../../../models/User');

const create = (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user.rows[0]));
};

const index = (req, res, next) => {
  User.all()
    .then(users => res.json(users.rows));
};

const show = (req, res, next) => {
  User.find(req.params.id)
    .then(user => user.rows[0] ? res.json(user.rows[0]) : res.sendStatus(404));
};

const destroy = (req, res, next) => {
  User.destroy(req.params.id)
    .then(info => info.rowCount === 1 ? res.json(createMessage(req.params.id)) : res.sendStatus(404));
};

const createMessage = id => {
  let message = { message: `Successfully deleted user ${id}` };
  return message;
};

module.exports = { create, index, show, destroy };
