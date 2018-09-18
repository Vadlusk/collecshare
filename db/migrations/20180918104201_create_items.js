
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE items(
    id SERIAL PRIMARY KEY NOT NULL,
    collection_id INT REFERENCES collections ON DELETE CASCADE ON UPDATE CASCADE,
    title TEXT NOT NULL,
    value INT DEFAULT 0,
    description TEXT,
    image TEXT
  )`);
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE items`);
};
