const AllTables = require('../../../models/AllTables');

const create = (req, res, next) => {
  AllTables.search(req.body.keyword)
    .then(results => console.log(results.rows));
};

module.exports = { create };
