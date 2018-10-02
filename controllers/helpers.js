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

module.exports = { sendJSON, sendMessage };
