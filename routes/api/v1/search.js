var express           = require('express');
var router            = express.Router();
const searchController = require('../../../controllers/api/v1/searchController');

router.get('/', searchController.index);

module.exports = router;
