const database = require('../db/config');

class Item {
  static all() {
    return database.raw('SELECT * FROM items');
  }
}

module.exports = Item;
