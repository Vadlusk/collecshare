const database = require('../db/config');
const helpers  = require('./helpers');

class Collection {
  static create(info) {
    return helpers.create(info, 'collections');
  }

  static all(query) {
    let str = 'SELECT * FROM collections';
    if (Object.keys(query).length > 0) str += ` WHERE ${Object.keys(query)[0]}='${Object.values(query)[0]}'`
    return database.raw(str);
  }

  static find(id) {
    return helpers.findWithChildren(id, 'collections', 'items');
  }

  static update(info, id) {
    return helpers.update(info, id, 'collections');
  }

  static destroy(id) {
    return database.raw('DELETE FROM collections WHERE id=?', [id])
  }
}

module.exports = Collection;
