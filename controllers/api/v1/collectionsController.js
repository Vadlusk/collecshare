const Collection = require('../../../models/Collection');

const index = (req, res, next) => {
  Collection.all()
    .then(collections => res.json(collections.rows));
};

const show = (req, res, next) => {
  Collection.find(req.params.id)
    .then(collection => collection.rows[0] ? res.json(collection.rows[0]) : res.sendStatus(404));
};

module.exports = { index, show };
