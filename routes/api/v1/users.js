var express = require('express');
var router = express.Router();
const usersController = require('../../../controllers/api/v1/usersController');

router.post('/', usersController.create);
router.get('/', usersController.index);
router.get('/:uid', usersController.show);
router.delete('/:uid', usersController.destroy);

module.exports = router;
