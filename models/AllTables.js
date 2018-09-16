const database = require('../db/config');

class AllTables {
  static search(query) {
    query = '%' + query + '%'
    return database.raw(
      `SELECT c.*, u.*
       FROM collections c
       JOIN users u ON c.uid = u.uid
       WHERE title LIKE ?
       OR description LIKE ?
       OR username LIKE ?`, [query, query, query])
  }
}

module.exports = AllTables;
