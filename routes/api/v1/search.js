var express           = require('express');
var router            = express.Router();
const searchController = require('../../../controllers/api/v1/searchController');

router.post('/', searchController.create);

module.exports = router;
