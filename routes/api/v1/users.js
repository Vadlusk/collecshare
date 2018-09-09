var express = require('express');
var router = express.Router();
const usersController = require('../../../controllers/api/v1/usersController');

router.post('/', usersController.create);
router.get('/', usersController.index);
router.get('/:id', usersController.show);
router.delete('/:id', usersController.destroy);

module.exports = router;
