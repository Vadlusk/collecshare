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

const avatarCleanup = user => {
  if (user.rows[0].avatar_delete) {
    imgur.imageDelete(user.rows[0].avatar_delete);
  }
};

const imageCleanup = obj => {
  if (obj.rows[0].image_delete) {
    imgur.imageDelete(obj.rows[0].image_delete);
  }
};

module.exports = { sendJSON, sendMessage, avatarCleanup, imageCleanup };
