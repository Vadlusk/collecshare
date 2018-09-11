
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    uid TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    photo_url TEXT DEFAULT 'http://shec-labs.com/wp-content/themes/creativemag/images/default.png',
    location TEXT,
    bio TEXT
  )`);
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE users`);
};
