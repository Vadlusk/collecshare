
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE items(
    id SERIAL PRIMARY KEY NOT NULL,
    collection_id TEXT REFERENCES collections ON DELETE CASCADE ON UPDATE CASCADE,
    value INT DEFAULT 0,
    title TEXT NOT NULL,
    description TEXT,
    image TEXT
  )`);
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE items`);
};
