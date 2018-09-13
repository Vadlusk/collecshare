const database = require('../db/config');
const helpers  = require('./helpers');

class Collection {
  static create(info) {
    helpers.sanitizeInfo(info, 'collection');
    let q = 'INSERT INTO collections (uid, category, title, description) VALUES (?, ?, ?, ?) RETURNING *'
    return database.raw(q, [info.uid, info.category, info.title, info.description]);
  }

  static all(query) {
    let str = 'SELECT * FROM collections';
    if (Object.keys(query).length > 0) str += ` WHERE ${Object.keys(query)[0]}='${Object.values(query)[0]}'`
    return database.raw(str);
  }

  static find(id) {
    return database.raw('SELECT * FROM collections WHERE id=?', [id]);
  }

  static update(info, id) {
    let query = 'UPDATE collections SET ' + helpers.set(info) + ' WHERE uid = ? RETURNING *'
    return database.raw(query, [id]);
  }

  static destroy(id) {
    return database.raw('DELETE FROM collections WHERE id=?', [id])
  }
}

module.exports = Collection;
