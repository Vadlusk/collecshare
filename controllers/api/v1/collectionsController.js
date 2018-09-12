const Collection = require('../../../models/Collection');
const helpers = require('../../helpers');

const create = (req, res, next) => {
  Collection.create(req.body)
    .then(collection => res.status(201).json(collection.rows[0]));
};

const index = (req, res, next) => {
  Collection.all()
    .then(collections => res.json(collections.rows));
};

const show = (req, res, next) => {
  Collection.find(req.params.id)
    .then(collection => sendJSON(collection, 200, res))
};

const update = (req, res, next) => {
  Collection.update(req.body, req.params.id)
    .then(collection => res.json(collection.rows[0]));
};

const destroy = (req, res, next) => {
  Collection.destroy(req.params.id)
    .then(message => message.rowCount === 1 ?
      res.json(helpers.createMessage(req.params.id, 'collection')) :
      res.sendStatus(404));
};

const sendJSON = (payload, status, res) => {
  payload.rows[0] ?
  res.status(status).json(payload.rows[0]) :
  res.sendStatus(404);
};

module.exports = { create, index, show, update, destroy };
