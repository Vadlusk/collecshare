const fetch    = require('node-fetch');
const FormData = require('form-data');

const post = req => {
  var body = new FormData();
  body.append('image', req.file.buffer);
  return fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: { 'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}` },
    body
  })
    .then(info => info.json())
};

module.exports = { post };
