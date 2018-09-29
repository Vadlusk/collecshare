const User    = require('../../../models/User');
const helpers = require('../../helpers');
const fetch   = require('node-fetch');
var FormData  = require('form-data');
var fs        = require('fs');

const create = (req, res, next) => {
  if (!req.body.username || !req.body.uid) {
    let message = { 'error': 'uid, username required' }
    res.status(400).json(message);
  } else {
    User.create(req.body)
    .then(user => helpers.sendJSON(user, 201, res));
  }
};

const index = (req, res, next) => {
  User.all()
    .then(users => res.json(users.rows));
};

const show = (req, res, next) => {
  User.find(req.params.uid)
    .then(user => helpers.sendJSON(user, 200, res));
};

const update = (req, res, next) => {
  if (req.file) {
    var body = new FormData();
    body.append('image', fs.createReadStream(req.file.path));
    fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: { 'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}` },
      body
    })
      .then(res => res.json())
      .then(json => {
        req.body.avatar = json.data.link;
        console.log(json);
        // req.body.avatarDelete = json.data.deletehash;
      })
      .then(() => User.update(req.body, req.params.uid))
      .then(user => helpers.sendJSON(user, 200, res));
  };
};

const destroy = (req, res, next) => {
  User.destroy(req.params.uid)
    .then(msg => helpers.sendMessage(res, msg, req.params.uid, 'user'));
};

module.exports = { create, index, show, update, destroy };
