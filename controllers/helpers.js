const createMessage = (id, type) => {
  let message = { message: `Successfully deleted ${type} ${id}` };
  return message;
};

const sendJSON = (payload, status, res) => {
  payload.rows[0] ?
  res.status(status).json(payload.rows[0]) :
  res.sendStatus(404);
};

module.exports = { createMessage, sendJSON }
