const Collection = require('../../../models/Collection');
const imgur      = require('../../../services/imgur');
const helpers    = require('../../helpers');

const create = (req, res, next) => {
  req.file ? imgur.post(req).then(json => {
    req.body.image        = json.data.link;
    req.body.image_delete = json.data.deletehash;
  })
    .then(() => collectionCreate(req, res)) : collectionCreate(req, res);
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
  req.file ? Collection.find(req.params.id)
    .then(collection => helpers.imageCleanup(collection))
    .then(() => imgur.post(req))
    .then(json => {
      req.body.image        = json.data.link;
      req.body.image_delete = json.data.deletehash;
    })
    .then(() => collectionUpdate(req, res)) : collectionUpdate(req, res)
};

const destroy = (req, res, next) => {
  Collection.destroy(req.params.id)
  .then(msg => helpers.sendMessage(res, msg, req.params.id, 'collection'));
};

const collectionCreate = (req, res) => {
  if (!req.body.uid || !req.body.category || !req.body.title) {
    let message = { 'error': 'uid, category, title required' };
    res.status(400).json(message);
  } else {

    Collection.create(req.body)
      .then(collection => helpers.sendJSON(collection, 201, res));
  }
};

const collectionUpdate = (req, res) => {
  Collection.update(req.body, req.params.id)
    .then(collection => helpers.sendJSON(collection, 200, res));
};

module.exports = { create, index, show, update, destroy };
