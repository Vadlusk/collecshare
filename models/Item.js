const database = require('../db/config');
const helpers  = require('./helpers');

class Item {
  static create(info) {
    return helpers.create(info, 'items');
  }

  static all() {
    return database.raw('SELECT * FROM items');
  }

  static update(info, id) {
    return helpers.update(info, id, 'items');
  }
}

module.exports = Item;
