const Collection = require('../../../models/Collection');
const imgur      = require('../../../services/imgur');
const helpers    = require('../../helpers');

const create = (req, res, next) => {
  helpers.imageCheck(req)
    .then(() => {
      if (!req.body.uid || !req.body.category || !req.body.title) {
        let message = { 'error': 'uid, category, title required' };
        res.status(400).json(message);
      } else {
        Collection.create(req.body)
        .then(collection => helpers.sendJSON(collection, 201, res));
      }
    }
};

const index = (req, res, next) => {
  Collection.all(req.query)
    .then(collections => res.json(collections.rows));
};

const show = (req, res, next) => {
  Collection.find(req.params.id)
    .then(collection => helpers.sendJSON(collection, 200, res));
};

const update = (req, res, next) => {
  helpers.imageCheck(req)
    .then(() => Collection.update(req.body, req.params.id))
    .then(collection => helpers.sendJSON(collection, 200, res));
};

const destroy = (req, res, next) => {
  Collection.destroy(req.params.id)
  .then(msg => helpers.sendMessage(res, msg, req.params.id, 'collection'));
};

module.exports = { create, index, show, update, destroy };
