const createMessage = (id, type) => {
  let message = { message: `Successfully deleted ${type} ${id}` };
  return message;
};

const sendJSON = (payload, status, res) => {
  payload.rows[0] ?
  res.status(status).json(payload.rows[0]) :
  res.sendStatus(404);
};

const checkSize = (size, res) => {
  if (size > (1024 * 1024 * 5)) {
    let msg = { error: 'File size cannot 5mb'};
    res.json(msg);
  }
};
module.exports = { createMessage, sendJSON, checkSize }
