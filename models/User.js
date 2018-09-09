const database = require('../db/config');

class User {
  static create(info) {
    return database.raw(
      'INSERT INTO users (uid, username) VALUES (?, ?) RETURNING *',
      [info.uid, info.username]
    );
  }

  static all() {
    return database.raw('SELECT * FROM users');
  }

  static find(id) {
    return database.raw('SELECT * FROM users WHERE id = ?', [id]);
  }

  static destroy(id) {
    return database.raw('DELETE FROM users WHERE id = ?', [id]);
  }
}

module.exports = User
