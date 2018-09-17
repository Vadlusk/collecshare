const AllTables = require('../../../models/AllTables');

const create = (req, res, next) => {
  AllTables.search(req.body.keyword)
    .then(results => res.json(results.rows));
};

module.exports = { create };
