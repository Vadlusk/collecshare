const Item = require('../../../models/Item');
const helpers = require('../../helpers');

const create = (req, res, next) => {

};

const index = (req, res, next) => {
  Item.all().
    then(items => res.json(items));
};

const show = (req, res, next) => {

};

const update = (req, res, next) => {

};

const destroy = (req, res, next) => {

};

module.exports = { create, index, show, update, destroy };
