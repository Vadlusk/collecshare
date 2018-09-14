const User    = require('../../../models/User');
const helpers = require('../../helpers');

const create = (req, res, next) => {
  if (!req.body.username || !req.body.uid) {
    res.sendStatus(400);
  } else {
    User.create(req.body)
    .then(user => helpers.sendJSON(user, 201, res));
  }
};

const index = (req, res, next) => {
  User.all()
    .then(users => res.json(users.rows));
};

const show = (req, res, next) => {
  User.find(req.params.uid)
    .then(user => helpers.sendJSON(user, 200, res));
};

const update = (req, res, next) => {
  console.log(req.file)
  User.update(req.body, req.params.uid)
    .then(user => helpers.sendJSON(user, 200, res));
};

const destroy = (req, res, next) => {
  User.destroy(req.params.uid)
    .then(message => message.rowCount === 1 ?
      res.json(helpers.createMessage(req.params.uid, 'user')) :
      res.sendStatus(404));
};

module.exports = { create, index, show, update, destroy };
