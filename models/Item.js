const database = require('../db/config');
const helpers  = require('./helpers');

class Item {
  static create(info) {
    return helpers.create(info, 'items');
  }

  static all() {
    return database.raw('SELECT * FROM items');
  }

  static find(id) {
    return database.raw('SELECT * FROM items WHERE id=?', [id]);
  }

  static update(info, id) {
    return helpers.update(info, id, 'items');
  }

  static destroy(id) {
    return database.raw('DELETE FROM items WHERE id=?', [id]);
  }
}

module.exports = Item;
