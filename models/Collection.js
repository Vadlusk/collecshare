const database = require('../db/config');

class Collection {
  static all() {
    return database.raw('SELECT * FROM collections');
  }
}

module.exports = Collection;
