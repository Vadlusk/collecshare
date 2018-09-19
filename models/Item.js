const database = require('../db/config');
const helpers  = require('./helpers');

class Item {
  static create(info) {
    console.log(info)
    helpers.sanitizeInfo(info, 'item');
    let q = `INSERT INTO items (collection_id, title, value, description, image)
             VALUES (?, ?, ?, ?, ?) RETURNING *`
    return database.raw(q, [info.collection_id, info.title, info.value,
      info.description, info.image]);
  }

  static all() {
    return database.raw('SELECT * FROM items');
  }
}

module.exports = Item;
