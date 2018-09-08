
exports.seed = function(knex, Promise) {

  return knex.raw('TRUNCATE collections RESTART IDENTITY CASCADE')
    .then(() => knex.raw('TRUNCATE users RESTART IDENTITY CASCADE'))
    .then(() => {
      return knex('users').insert([
        {id: 1, uid: '1', username: 'Jill', location: 'Denver, CO', bio: 'I\'m pretty cool.'},
        {id: 2, uid: '2', username: 'John'},
        {id: 3, uid: '3', username: 'John'},
        {id: 4, uid: '4', username: 'John'},
        {id: 5, uid: '5', username: 'John'},
        {id: 6, uid: '6', username: 'John'},
        {id: 7, uid: '7', username: 'John'},
        {id: 8, uid: '8', username: 'John'},
        {id: 9, uid: '9', username: 'John'},
        {id: 10, uid: '10', username: 'John'},
        {id: 11, uid: '11', username: 'John'},
        {id: 12, uid: '12', username: 'John'},
        {id: 13, uid: '13', username: 'John'},
        {id: 14, uid: '14', username: 'John'},
        {id: 15, uid: '15', username: 'John'},
        {id: 16, uid: '16', username: 'John'},
        {id: 17, uid: '17', username: 'John'},
        {id: 18, uid: '18', username: 'John'},
        {id: 19, uid: '19', username: 'John'},
        {id: 20, uid: '20', username: 'John'}
      ]);
    })
    .then(() => {
      return knex('collections').insert([
        {id: 1, user_id: 1, category: 'comics'},
        {id: 2, user_id: 1, category: 'comics'},
        {id: 3, user_id: 1, category: 'comics'},
        {id: 4, user_id: 1, category: 'comics'},
        {id: 5, user_id: 1, category: 'comics'},
        {id: 6, user_id: 1, category: 'comics'},
        {id: 7, user_id: 1, category: 'comics'},
        {id: 8, user_id: 1, category: 'comics'},
        {id: 9, user_id: 1, category: 'comics'},
        {id: 10, user_id: 1, category: 'comics'},
        {id: 11, user_id: 1, category: 'comics'},
        {id: 12, user_id: 1, category: 'comics'},
        {id: 13, user_id: 1, category: 'comics'},
        {id: 14, user_id: 1, category: 'comics'},
        {id: 15, user_id: 1, category: 'comics'},
        {id: 16, user_id: 1, category: 'comics'},
        {id: 17, user_id: 1, category: 'comics'},
        {id: 18, user_id: 1, category: 'comics'},
        {id: 19, user_id: 1, category: 'comics'},
        {id: 20, user_id: 1, category: 'comics'}
      ]);
    })
};
