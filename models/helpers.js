const database = require('../db/config');

const create = (info, table) => {
  console.log(createQuery(info, table))
  return database.raw(
    createQuery(info, table),
    [...Object.values(info)]
  );
};

const createQuery = (info, table) => {
  return 'INSERT INTO ' + table + ' (' + Object.keys(info).join(', ') + ') ' + values(Object.keys(info).length) + 'RETURNING *'
};

const values = num => {
  return 'VALUES (' + '?,'.repeat(num).slice(0, -1) + ') ';
};

const set = info => {
  const reducer = (result, val) => result + `${val[0]}='${val[1]}', `;
  return Object.entries(info).reduce(reducer, '').slice(0, -2);
};

const sanitizeInfo = (info, type) => {
  switch (type) {
    case 'user':
      if (info.avatar == undefined) info.avatar = 'avatars/avatar.png';
      if (info.location == undefined) info.location = null;
      if (info.bio == undefined) info.bio = null;
      return info;
      break;
    case 'collection':
      if (info.description == undefined) info.description = null;
      if (info.image == undefined) info.description = 'avatars/books.jpg';
      return info;
      break;
    default:
      return info;
  }
};

module.exports = { create, set, sanitizeInfo };
