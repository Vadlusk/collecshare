
exports.seed = function(knex, Promise) {

  return knex.raw('TRUNCATE collections RESTART IDENTITY CASCADE')
    .then(() => knex.raw('TRUNCATE users RESTART IDENTITY CASCADE'))
    .then(() => {
      return knex('users').insert([
        { uid: '1', username: 'Jill', location: 'Denver, CO',
          bio: 'I\'m pretty cool.' },
        { uid: '2', username: 'John', location: 'Palo Alto',
          bio: 'I like to collect comics.'  },
        { uid: '3', username: 'Jake', location: 'Denmark',
          bio: 'I like to collect and share.'  },
        { uid: '4', username: 'Jamison', location: 'Birmingham',
          bio: 'I am from Birmingham.'  },
        { uid: '5', username: 'James', location: 'Pueblo, CO',
          bio: 'I collect all things.'  },
        { uid: '6', username: 'Jasmine', location: 'Charlotte',
          bio: 'Howdy y\'all.'  },
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
        { uid: '1', category: 'comics', title: 'Comics',
          description: comicDesc, image: 'backgrounds/160318ComicBooks_0.jpg' },
        { uid: '1', category: 'cards', title: 'Baseball cards',
          description: cardDesc, image: 'backgrounds/baseballcards.jpg' },
        { uid: '1', category: 'coins', title: 'Indian coins',
          description: coinDesc,
          image: 'backgrounds/A_Collection_of_Old_Indian_Coins.jpg' },
        { uid: '2', category: 'other', title: 'Rocks',
          description: genericDesc, image: 'backgrounds/highresrecords5.jpg' },
        { uid: '2', category: 'comics', title: 'Marvel',
          description: comicDesc, image: 'backgrounds/160318ComicBooks_0.jpg' },
        { uid: '2', category: 'comics', title: 'DC',
          description: comicDesc, image: 'backgrounds/160318ComicBooks_0.jpg' },
        { uid: '2', category: 'coins', title: 'Silver bouillon',
          description: coinDesc, image: 'backgrounds/americansilvereagleset.jpg' },
        { uid: '3', category: 'vinyl', title: '80\'s records',
          description: vinylDesc, image: 'backgrounds/vinyl-drawing-32.jpg' },
        { uid: '4', category: 'vinyl', title: 'Parents old vinyl',
          description: vinylDesc, image: 'backgrounds/record-collection.jpg' },
        { uid: '4', category: 'cards', title: 'PokeCards',
          description: cardDesc,
          image: 'backgrounds/my_pokemon_holographic_cards_collection_by_lakotaangel72-d4qlma9.jpg' },
        { uid: '5', category: 'comics', title: 'Comics',
          description: comicDesc, image: 'backgrounds/160318ComicBooks_0.jpg' },
        { uid: '5', category: 'coins', title: 'Great British Coins',
          description: coinDesc, image: 'backgrounds/greatbritishcoins.jpg' },
        { uid: '5', category: 'cards', title: 'old baseball cards',
          description: cardDesc, image: 'backgrounds/baseballcardbook.jpg' },
        { uid: '5', category: 'vinyl', title: 'My Collection',
          description: vinylDesc, image: 'backgrounds/vinyl-drawing-32.jpg' },
        { uid: '5', category: 'comics', title: 'My Collection',
          description: comicDesc, image: 'backgrounds/160318ComicBooks_0.jpg' },
        { uid: '5', category: 'other', title: 'Video Games',
          description: genericDesc, image: 'backgrounds/highresrecords5.jpg' },
        { uid: '5', category: 'comics', title: 'My Collection',
          description: comicDesc, image: 'backgrounds/160318ComicBooks_0.jpg' },
        { uid: '5', category: 'vinyl', title: 'My Collection',
          description: vinylDesc, image: 'backgrounds/vinyl-drawing-32.jpg' },
        { uid: '5', category: 'coins', title: 'Canadian Money',
          description: coinDesc, image: 'backgrounds/coincollection.jpg' },
        { uid: '6', category: 'comics', title: 'Comics',
          description: comicDesc, image: 'backgrounds/160318ComicBooks_0.jpg' }
      ]);
    })
    .then(() => {
      return knex('items').insert([
        { collection_id: '1', title: 'Superman #1', description: 'I have this.' },
        { collection_id: '1', title: 'Superman #2', description: 'I have this.' },
        { collection_id: '1', title: 'Superman #3', description: 'I have this.' },
        { collection_id: '2', title: 'Babe Ruth', description: 'I have this.' },
        { collection_id: '2', title: 'A Rod', description: 'I have this.' },
        { collection_id: '2', title: 'Nolan Ryan', description: 'I have this.' },
        { collection_id: '2', title: 'Nolan Ryan rookie', description: 'I have this.' },
        { collection_id: '3', title: 'Duran Duran', description: 'I have this.' },
        { collection_id: '4', title: 'Hematite', description: 'I have this.' },
        { collection_id: '4', title: 'Talc', description: 'I have this.' },
        { collection_id: '5', title: 'Spiderman #1', description: 'I have this.' },
        { collection_id: '5', title: 'Spiderman #2', description: 'I have this.' },
        { collection_id: '5', title: 'Spiderman #3', description: 'I have this.' },
        { collection_id: '5', title: 'Spiderman #4', description: 'I have this.' },
        { collection_id: '5', title: 'Spiderman #5', description: 'I have this.' },
        { collection_id: '5', title: 'Spiderman #6', description: 'I have this.' },
        { collection_id: '5', title: 'Fantastic Four #1', description: 'I have this.' },
        { collection_id: '5', title: 'Fantastic Four #2', description: 'I have this.' },
        { collection_id: '5', title: 'Fantastic Four #3', description: 'I have this.' },
        { collection_id: '6', title: 'The Thing', description: 'I have this.' }
      ]);
    })
};

const cardDesc = `Only buy eBay cards from reliable sellers. Topps has an eBay
store called the Topps Vault which has some older cards for sale. If it is not
a major company selling the cards, check the comments for that seller. If you
read comments like "took 3 months to deliver" or "card was different then
pictured card" be wary of the seller. Good comments would include "card was
received in 1 week" or " (name of seller) gave me the pictured card".`;

const vinylDesc = `This box set collects 12 titles from the Carpenters’ iconic
soft pop/rock career on A&M Records on 180 gram heavyweight vinyl. Included are
the band’s studio albums and a singles collection in a soft touch box with
embossed front title.`;

const comicDesc = `We have a little bit of everything here at Comic Collection.
Our goal is to be your one stop shop for your comic, graphic novel, magazine,
figurine, gaming `;


const coinDesc = `Coin collecting is the collecting of coins or other forms of
minted legal tender. ... Coin collecting can be differentiated from numismatics,
in that the latter is the systematic study of currency. A coin's grade is a
coin main determinant of its value.`;

const genericDesc = `The psychology of collecting is an area of study that seeks
to understand the motivating factors .... "It gets addictive," says Petrulis,
"just like gambling. It's like putting a coin in a slot machine. It might not
pay off this time,`;
