const database = require('../db/config');

class AllTables {
  static search(query) {
    query = '%' + query + '%'
    return database.raw(
      `SELECT u.*, json_agg(c.*) AS "collections"
       FROM collections c
       JOIN users u ON c.uid = u.uid
       WHERE title LIKE ?
       OR description LIKE ?
       OR location LIKE ?
       OR username LIKE ?
       GROUP BY u.uid`,
       [query, query, query, query])
  }
}

module.exports = AllTables;
