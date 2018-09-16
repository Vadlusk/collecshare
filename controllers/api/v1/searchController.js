const AllTables = require('../../../models/AllTables');

const create = (req, res, next) => {
  AllTables.Search(req.body.keyword)
    .then(results => res.json(results);
};

module.exports = { create };
