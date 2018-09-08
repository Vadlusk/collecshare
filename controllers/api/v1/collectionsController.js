const Collection = require('../../../models/Collection');

const index = (req, res, next) => {
  Collection.all()
    .then(collections => res.json(collections.rows));
};

const show = (req, res, next) => {
  Collection.find(req.params.id)
    .then(collection => res.json(collection.rows[0]));
};

module.exports = { index, show };
