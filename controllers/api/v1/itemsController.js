const Item = require('../../../models/Item');
const helpers = require('../../helpers');

const index = (req, res, next) => {
  Item.all().
    then(items => res.json(items));
};

module.exports = { index };
