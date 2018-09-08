const database = require('../db/config');

class User {
  static all() {
    return database.raw('SELECT * FROM users');
  }
}

module.exports = User
