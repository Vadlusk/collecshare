const imgur = require('../services/imgur');

const createMessage = (id, type) => {
  let message = { message: `Successfully deleted ${type} ${id}` };
  return message;
};

const sendJSON = (payload, status, res) => {
  payload.rows[0] ?
  res.status(status).json(payload.rows[0]) :
  res.sendStatus(404);
};

const sendMessage = (res, message, id, type) => {
  message.rowCount === 1 ?
    res.json(createMessage(id, type)) :
    res.sendStatus(404);
};

const imageCheck = req => {
  if (req.file) {
    return imgur.post(req).then(json => {
      req.body.image = json.data.link;
      req.body.image_delete = json.data.deletehash;
    })
  }
};

const avatarCheck = req => {
  if (req.file) {
    return imgur.post(req).then(json => {
      console.log('after imgur.post', json);
      req.body.avatar = json.data.link;
      req.body.avatar_delete = json.data.deletehash;
      console.log(req.body);
    })
  }
};

module.exports = { sendJSON, sendMessage, imageCheck, avatarCheck };
