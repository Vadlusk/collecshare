const Collection = require('../../../models/Collection');

const index = (req, res, next) => {
  Collection.all()
    .then(collections => res.json(collections.rows));
};

module.exports = { index };
