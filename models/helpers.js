const database = require('../db/config');

const create = (info, table) => {
  return database.raw(createQuery(info, table), [...Object.values(info)]);
};

const findWithChildren = (id, parent, child) => {
  let query = `SELECT ` + parent + `.*,
               COALESCE(json_agg(` + child + `.* ORDER BY ` + child + `.id)
               FILTER (WHERE ` + child + `.id IS NOT NULL), '[]') AS ` + child +
             ` FROM ` + parent +
             ` LEFT JOIN ` + child + ` ON ` + child + `.` +
                parent.slice(0, -1) + `_id = ` + parent + `.id
               WHERE ` + parent + `.id=?
               GROUP BY ` + parent + `.id`
  console.log(query)
  return database.raw(query, [id]);
};

const update = (info, id, table) => {
  return database.raw(updateQuery(info, table), [id]);
};

const createQuery = (info, table) => {
  return 'INSERT INTO ' + table + ' (' + Object.keys(info).join(', ') +
    ') ' + values(Object.keys(info).length) + 'RETURNING *'
};

const updateQuery = (info, table) => {
  let id;
  table == 'users' ? id = 'uid' : id = 'id';
  return 'UPDATE ' + table + ' SET ' + set(info) + ' WHERE ' +
    id + ' = ? RETURNING *'
}

const values = num => {
  return 'VALUES (' + '?,'.repeat(num).slice(0, -1) + ') ';
};

const set = info => {
  const reducer = (result, val) => result + `${val[0]}='${val[1]}', `;
  return Object.entries(info).reduce(reducer, '').slice(0, -2);
};

module.exports = { create, findWithChildren, update };
