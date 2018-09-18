const AllTables = require('../../../models/AllTables');

const index = (req, res, next) => {
  AllTables.search(req.query['keyword'])
    .then(results => res.json(results.rows));
};

module.exports = { index };
