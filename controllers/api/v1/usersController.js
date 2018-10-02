const imgur   = require('../../../services/imgur');
const User    = require('../../../models/User');
const helpers = require('../../helpers');

const create = (req, res, next) => {
  if (!req.body.username || !req.body.uid) {
    let message = { 'error': 'uid, username required' }
    res.status(400).json(message);
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
  helpers.avatarCheck(req);
  console.log(req.body);
  User.update(req.body, req.params.uid)
  .then(user => helpers.sendJSON(user, 200, res));
};

const destroy = (req, res, next) => {
  User.destroy(req.params.uid)
    .then(msg => helpers.sendMessage(res, msg, req.params.uid, 'user'));
};

module.exports = { create, index, show, update, destroy };
