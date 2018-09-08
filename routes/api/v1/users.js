var express = require('express');
var router = express.Router();
const usersController = require('../../../controllers/api/v1/usersController');

router.get('/', usersController.index);

module.exports = router;
