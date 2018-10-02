const imgur   = require('../../../services/imgur');
const Item    = require('../../../models/Item');
const helpers = require('../../helpers');

const create = (req, res, next) => {
  if (req.file) {
    imgur.post(req).then(json => {
      req.body.image = json.data.link;
      req.body.image_delete = json.data.deletehash;
    })
  }
  if (!req.body.collection_id || !req.body.title) {
    let message = { 'error': 'collection id and title required' };
    res.status(400).json(message);
  } else {
    Item.create(req.body)
    .then(item => helpers.sendJSON(item, 201, res));
    }
};

const index = (req, res, next) => {
  Item.all().then(items => res.json(items.rows));
};

const show = (req, res, next) => {
  Item.find(req.params.id)
    .then(item => helpers.sendJSON(item, 200, res));
};

const update = (req, res, next) => {
  if (req.body.value) req.body.value *= 100;
  if (req.file) {
    imgur.post(req).then(json => {
      req.body.image = json.data.link;
      req.body.image_delete = json.data.deletehash;
    })
  }
  Item.update(req.body, req.params.id)
    .then(item => helpers.sendJSON(item, 200, res));
};

const destroy = (req, res, next) => {
  Item.destroy(req.params.id)
  .then(msg => helpers.sendMessage(res, msg, req.params.id, 'item'));
};

module.exports = { create, index, show, update, destroy };
