
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
        { uid: '1', category: 'comics', title: 'My Collection' },
        { uid: '1', category: 'cards', title: 'My Collection' },
        { uid: '1', category: 'coins', title: 'My Collection' },
        { uid: '2', category: 'other', title: 'My Collection' },
        { uid: '2', category: 'comics', title: 'My Collection' },
        { uid: '2', category: 'comics', title: 'My Collection' },
        { uid: '2', category: 'coins', title: 'My Collection' },
        { uid: '3', category: 'vinyl', title: 'My Collection' },
        { uid: '4', category: 'vinyl', title: 'My Collection' },
        { uid: '4', category: 'cards', title: 'My Collection' },
        { uid: '5', category: 'comics', title: 'My Collection' },
        { uid: '5', category: 'coins', title: 'My Collection' },
        { uid: '5', category: 'cards', title: 'My Collection' },
        { uid: '5', category: 'vinyl', title: 'My Collection' },
        { uid: '5', category: 'comics', title: 'My Collection' },
        { uid: '5', category: 'comics', title: 'My Collection' },
        { uid: '5', category: 'comics', title: 'My Collection' },
        { uid: '5', category: 'comics', title: 'My Collection' },
        { uid: '5', category: 'comics', title: 'My Collection' },
        { uid: '6', category: 'comics', title: 'My Collection' }
      ]);
    })
    .then(() => {
      return knex('items').insert([
        { collection_id: '1', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '1', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '1', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '2', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '2', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '2', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '2', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '3', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '4', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '4', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '5', title: 'Cool thing', description: 'I have this.' },
        { collection_id: '6', title: 'Cool thing', description: 'I have this.' }
      ]);
    })
};
