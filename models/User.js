const database = require('../db/config');
const helpers  = require('./helpers');

class User {
  static create(info) {
    helpers.sanitizeInfo(info, 'user');
    let q = 'INSERT INTO users (uid, username, avatar, location, bio) VALUES (?, ?, ?, ?, ?) RETURNING *'
    return database.raw(q, [info.uid, info.username, info.avatar, info.location, info.bio]);
  }

  static all() {
    return database.raw('SELECT * FROM users');
  }

  static find(uid) {
    return database.raw('SELECT * FROM users WHERE uid = ?', [uid]);
  }

  static update(info, uid) {
    let query = 'UPDATE users SET ' + helpers.set(info) + ' WHERE uid = ? RETURNING *'
    return database.raw(query, [uid]);
  }

  static destroy(uid) {
    return database.raw('DELETE FROM users WHERE uid = ?', [uid]);
  }
}

module.exports = User
