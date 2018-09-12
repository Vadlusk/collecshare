const User = require('../../../models/User');

const create = (req, res, next) => {
  if (!req.body.username || !req.body.uid) {
    res.sendStatus(400);
  } else {
    User.create(req.body)
    .then(user => res.status(201).json(user.rows[0]));
  }
};

const index = (req, res, next) => {
  User.all()
    .then(users => res.json(users.rows));
};

const show = (req, res, next) => {
  User.find(req.params.uid)
    .then(user => user.rows[0] ? res.json(user.rows[0]) : res.sendStatus(404));
};

const update = (req, res, next) => {
  User.update(req.body, req.params.uid)
    .then(user => res.json(user.rows[0]));
};

const destroy = (req, res, next) => {
  User.destroy(req.params.uid)
    .then(info => info.rowCount === 1 ? res.json(createMessage(req.params.uid)) : res.sendStatus(404));
};

const createMessage = id => {
  let message = { message: `Successfully deleted user ${id}` };
  return message;
};

module.exports = { create, index, show, update, destroy };
