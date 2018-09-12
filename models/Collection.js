const database = require('../db/config');

class Collection {
  static create(info) {
    sanitizeInfo(info);
    return database.raw(
      'INSERT INTO collections (uid, category, title, description) VALUES (?, ?, ?, ?) RETURNING *',
      [info.uid, info.category, info.title, info.description]
    );
  }

  static all() {
    return database.raw('SELECT * FROM collections');
  }

  static find(id) {
    return database.raw('SELECT * FROM collections WHERE id=?', [id]);
  }
}

const sanitizeInfo = info => {
  if (info.description == undefined) info.description = null;
  return info;
};

module.exports = Collection;
