const Item = require('../../../models/Item');
const helpers = require('../../helpers');

const create = (req, res, next) => {
  req.file ? req.body.image = req.file.path : null;
  if (!req.body.collection_id || !req.body.title) {
    let message = { 'error': 'collection id and title required' };
    res.status(400).json(message);
  } else {
    Item.create(req.body)
    .then(item => helpers.sendJSON(item, 201, res));
  }
};

const index = (req, res, next) => {
  Item.all().
    then(items => res.json(items.rows));
};

const show = (req, res, next) => {

};

const update = (req, res, next) => {

};

const destroy = (req, res, next) => {

};

module.exports = { create, index, show, update, destroy };
