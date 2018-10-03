
exports.up = function(knex, Promise) {
  return knex.raw(`CREATE TABLE items(
    id SERIAL PRIMARY KEY NOT NULL,
    collection_id INT REFERENCES collections ON DELETE CASCADE ON UPDATE CASCADE,
    title TEXT NOT NULL,
    value REAL DEFAULT 0,
    description TEXT,
    image TEXT DEFAULT 'https://collecshare.herokuapp.com/backgrounds/book.jpeg',
    image_delete TEXT,
    details JSONB,
    public BOOLEAN DEFAULT TRUE
  )`);
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP TABLE items`);
};
