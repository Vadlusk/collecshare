const database = require('../db/config');
const helpers  = require('./helpers');

class Collection {
  static create(info) {
    helpers.sanitizeInfo(info, 'collection');
    let q = 'INSERT INTO collections (uid, category, title, description) VALUES (?, ?, ?, ?) RETURNING *'
    return database.raw(q, [info.uid, info.category, info.title, info.description]);
  }

  static all() {
    return database.raw('SELECT * FROM collections');
  }

  static find(id) {
    return database.raw('SELECT * FROM collections WHERE id=?', [id]);
  }
}

module.exports = Collection;
