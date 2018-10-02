# [Collecshare](https://collecshareapp.herokuapp.com) [![CircleCI](https://circleci.com/gh/Vadlusk/collecshare/tree/master.svg?style=svg)](https://circleci.com/gh/Vadlusk/collecshare/tree/master)   
is a social app for collectors of all things.  
This is the backend api.  You can visit the [frontend repo here](https://github.com/dsdunn/collecshare), the [deployed backend here](http://collecshare.herokuapp.com/api/v1/collections), and the [deployed frontend here](https://collecshareapp.herokuapp.com).

## Authors

* **David Starr Dunn** - *Initial work* - [@dsdunn](https://github.com/dsdunn)
* **Spenser Leighton** - *Initial work* - [@spenserleighton1](https://github.com/spenserleighton1)
* **Adam Lusk** - *Initial work* - [@Vadlusk](https://github.com/vadlusk)

## Versions

[Node](https://nodejs.org/en/) `10.9.4`  
[Express](http://expressjs.com/) `4.16.3`  
[PG](https://www.postgresql.org/) `7.4.3`   
[Mocha](https://mochajs.org/) `5.2.0`  
[Chai](https://www.chaijs.com/) `4.1.4`  

## Setup

1. `git clone git@github.com:Vadlusk/collecshare.git`
2. `cd collecshare`
3. `npm i`
4. `createdb collecshare_dev && createdb collecshare_test`
5. `knex migrate:latest && knex migrate:latest --env test`

To run the test suite, type `yarn test`   
To run the local server, type `yarn start`

## Endpoints

### Search

`GET /api/v1/search?keyword=search_term_here`  

This endpoint returns all users and their collections that match the search term
in this format:  

```
{
  "uid": string,
  "username": string,
  "avatar": string,
  "location": string,
  "bio": string,
  "collections": [
    {
      "id": int,
      "uid": string,
      "category": string,
      "title": string,
      "description": string,
      "image": string
    },
    ...
  ]
}
```  

### Users
The following endpoints represent full CRUD functionality of users. They return either a user object or message that the action was successful.  
User objects are always returned in the following format:   
```
{
  "uid": string,
  "username": string,
  "avatar": string,
  "avatar_delete": string,
  "location": string,
  "bio": string
}
```

`POST /api/v1/users`

creates a user with the following parameters:  
```
{
  "uid": string(required),
  "username": string(required),
  "avatar": string(optional),
  "location": string(optional),
  "bio": string(optional)
}
```

`GET /api/v1/users`

returns a list of all users in the database

`GET /api/v1/users/:uid`

returns the user with that uid number

`PUT /api/v1/users/:uid`

updates the specified user.   
use the same parameters for updating and creating.   
the only difference is that no fields are required for updating.

`DELETE /api/v1/users/:uid`

deletes the user with that uid number

### Collections
The following endpoints do the same things with collections.  
Collection objects are always returned thusly:   
```
{
  "id": int,
  "uid": string,
  "category": string,
  "title": string,
  "description": string,
  "image": string,
  "image_delete": string
}
```

`POST /api/v1/collections/`

creates a collection with the following parameters:  
```
{
  "uid": string(required),
  "category": string(required),
  "title": string(required),
  "description": string(optional)
  "image": .jpeg/.png(optional)
}
```
request body must be sent as form data with header "content-type": "multipart/form"  

`GET /api/v1/collections`

returns all the collections in the database

you can search by uid or category by including a query string like this:  
`/collections?uid=youruidgoeshere` or `/collections?category=vinyl`

`GET /api/v1/collections/:id`

returns the collection with that id number

`PUT /api/v1/collections/:id`

updates the specified collection.   
use the same parameters for updating and creating.   
the only difference is that no fields are required for updating.  

`DELETE /api/v1/collections/:id`

deletes the collection with that id number

### Items
The following endpoints do the same things with items.  
item objects are always returned thusly:  
```
{
  "id": int,
  "collection_id": string,
  "title": string,
  "value": string,
  "description": string,
  "image": string,
  "image_delete": string,
  "details": object,
  "public": boolean
}
```
the details field is an object of whatever additional details you wish to provide and are capable of being different for every item.  

`POST /api/v1/items/`  

creates an item with the following parameters:  
```
{
  "collection_id": string(required),
  "title": string(required),
  "value": int(optional),
  "description": string(optional)
  "image": .jpeg/.png(optional),
  "details": object(optional),
  "public": boolean(optional)
}
```

`GET /api/v1/items`

returns all the items in the database

`GET /api/v1/items/:id`

returns the item with that id number


`PUT /api/v1/items/:id`

updates the specified item.   
use the same parameters for updating and creating.   
the only difference is that no fields are required for updating.  
