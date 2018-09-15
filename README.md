[![CircleCI](https://circleci.com/gh/Vadlusk/collecshare/tree/master.svg?style=svg)](https://circleci.com/gh/Vadlusk/collecshare/tree/master)
# Collecshare
is a social app for collectors of all things.  
Manage, share, buy, sell or trade your valuables on a global scale.   
This is the backend api.  

# Versions
Node `10.9.4`  
Express `4.16.3`  
Mocha `5.2.0`  
Chai `4.1.4`  

# Setup
1. Clone or fork this repo.
2. Move into the directory.
3. `npm i`
4. `createdb collecshare_dev && createdb collecshare_test`
5. `knex migrate:latest && knex migrate:latest --env test`

To run the test suite, type `yarn test`   
To run the local server, type `yarn start`

# Endpoints

## Users
The following endpoints represent full CRUD functionality of users. They return either a user object or message that the action was successful.  
User objects are always returned in the following format:   
```
{
  "uid": string,
  "username": string,
  "avatar": string,
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

## Collections
The following endpoints do the same things with collections.  
Collection objects are always returned thusly:   
```
{
  "id": int,
  "uid": string,
  "category": string,
  "title": string,
  "description": string
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
}
```

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
