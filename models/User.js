const database = require('../db/config');
const helpers  = require('./helpers');

class User {
  static create(info) {
    return helpers.create(info, 'users');
  }

  static all() {
    return database.raw('SELECT * FROM users');
  }

  static find(uid) {
    return database.raw('SELECT * FROM users WHERE uid = ?', [uid]);
  }

  static update(info, uid) {
    return helpers.update(info, uid, 'users');
  }

  static destroy(uid) {
    return database.raw('DELETE FROM users WHERE uid = ?', [uid]);
  }
}

module.exports = User
