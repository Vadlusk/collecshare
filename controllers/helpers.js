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
    imgur.post(req).then(json => {
      req.body.image = json.data.link;
      req.body.image_delete = json.data.deletehash;
    })
  }
  return req
};

const avatarCheck = req => {
  if (req.file) {
    imgur.post(req).then(json => {
      req.body.avatar = json.data.link;
      req.body.avatar_delete = json.data.deletehash;
    })
  }
  return req
};

module.exports = { sendJSON, sendMessage, imageCheck, avatarCheck };
