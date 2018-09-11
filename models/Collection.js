const database = require('../db/config');

class Collection {
  static create(info) {
    return database.raw(
      'INSERT INTO collections (uid, category) VALUES (?, ?) RETURNING *',
      [info.uid, info.category]
    );
  }

  static all() {
    return database.raw('SELECT * FROM collections');
  }

  static find(id) {
    return database.raw('SELECT * FROM collections WHERE id=?', [id]);
  }
}

module.exports = Collection;
