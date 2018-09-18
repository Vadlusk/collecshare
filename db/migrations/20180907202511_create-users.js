
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE users(
    uid TEXT PRIMARY KEY NOT NULL UNIQUE,
    username TEXT NOT NULL,
    avatar TEXT DEFAULT 'avatars/avatar.png',
    location TEXT,
    bio TEXT
  )`);
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE users`);
};
