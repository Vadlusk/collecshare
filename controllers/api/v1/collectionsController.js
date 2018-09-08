const Collection = require('../../../models/Collection');

const create = (req, res, next) => {
  console.log(req.body)
  Collection.create(req.body)
    .then(collection => res.json(collection));
};

const index = (req, res, next) => {
  Collection.all()
    .then(collections => res.json(collections.rows));
};

const show = (req, res, next) => {
  Collection.find(req.params.id)
    .then(collection => collection.rows[0] ? res.json(collection.rows[0]) : res.sendStatus(404));
};

module.exports = { create, index, show };
