
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE collections(
    id SERIAL PRIMARY KEY NOT NULL,
    uid TEXT REFERENCES users ON DELETE CASCADE,
    category TEXT NOT NULL
  )`);
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE collections`);
};
