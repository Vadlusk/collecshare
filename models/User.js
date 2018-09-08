const database = require('../db/config');

class User {
  static all() {
    return database.raw('SELECT * FROM users');
  }

  static find(id) {
    return database.raw('SELECT * FROM users WHERE id = ?', [id]);
  }
}

module.exports = User