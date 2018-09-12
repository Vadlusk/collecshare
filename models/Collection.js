const database = require('../db/config');

class Collection {
  static create(info) {
    let marks = '?, '.repeat(Object.keys(info).length).slice(0, -2);
    return database.raw(
      'INSERT INTO collections (' + Object.keys(info) + ') VALUES (' + marks + ') RETURNING *',
      Object.values(info)
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
