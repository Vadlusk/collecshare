const database = require('../db/config');

class User {
  static create(info) {
    console.log(info.bio);
    sanitizeInfo(info);
    console.log(info.bio);
    return database.raw(
      'INSERT INTO users (uid, username, photo_url, location, bio) VALUES (?, ?, ?, ?, ?) RETURNING *',
      [info.uid, info.username, info.photo_url, info.location, info.bio]
    );
  }

  static all() {
    return database.raw('SELECT * FROM users');
  }

  static find(uid) {
    return database.raw('SELECT * FROM users WHERE uid = ?', [uid]);
  }

  static update(info, uid) {
    const reducer = (result, val) => result + `${val[0]}='${val[1]}', `;
    let set = Object.entries(info).reduce(reducer, '').slice(0, -2);
    return database.raw('UPDATE users SET ' + set + ' WHERE uid = ? RETURNING *', [uid]);
  }

  static destroy(uid) {
    return database.raw('DELETE FROM users WHERE uid = ?', [uid]);
  }
}

const sanitizeInfo = info => {
  if (info.photo_url == undefined) info.photo_url = 'http://shec-labs.com/wp-content/themes/creativemag/images/default.png';
  if (info.location == undefined) info.location = null;
  if (info.bio == undefined) info.bio = null;
  return info;
};

module.exports = User
