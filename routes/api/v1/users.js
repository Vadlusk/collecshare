var express = require('express');
var router = express.Router();
const usersController = require('../../../controllers/api/v1/usersController');

router.get('/', usersController.index);
router.get('/:id', usersController.show);

module.exports = router;
