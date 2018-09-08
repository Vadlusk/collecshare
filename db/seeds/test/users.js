
exports.seed = function(knex, Promise) {

  return knex.raw('TRUNCATE collections RESTART IDENTITY CASCADE')
    .then(() => knex.raw('TRUNCATE users RESTART IDENTITY CASCADE'))
    .then(() => {
      return knex('users').insert([
        { uid: '1', username: 'Jill', location: 'Denver, CO', bio: 'I\'m pretty cool.' },
        { uid: '2', username: 'John' },
        { uid: '3', username: 'John' },
        { uid: '4', username: 'John' },
        { uid: '5', username: 'John' },
        { uid: '6', username: 'John' },
        { uid: '7', username: 'John' },
        { uid: '8', username: 'John' },
        { uid: '9', username: 'John' },
        { uid: '10', username: 'John' },
        { uid: '11', username: 'John' },
        { uid: '12', username: 'John' },
        { uid: '13', username: 'John' },
        { uid: '14', username: 'John' },
        { uid: '15', username: 'John' },
        { uid: '16', username: 'John' },
        { uid: '17', username: 'John' },
        { uid: '18', username: 'John' },
        { uid: '19', username: 'John' },
        { uid: '20', username: 'John' }
      ]);
    })
    .then(() => {
      return knex('collections').insert([
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' },
        { user_id: 1, category: 'comics' }
      ]);
    })
};
