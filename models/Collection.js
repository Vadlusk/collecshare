const database = require('../db/config');

class Collection {
  static all() {
    return database.raw('SELECT * FROM collections');
  }

  static find(id) {
    return database.raw('SELECT * FROM collections WHERE id=?', [id]);
  }
}

module.exports = Collection;
