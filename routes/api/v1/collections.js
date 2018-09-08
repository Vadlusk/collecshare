var express = require('express');
var router = express.Router();
const collectionsController = require('../../../controllers/api/v1/collectionsController');

router.get('/', collectionsController.index);
router.get('/:id', collectionsController.show);

module.exports = router;
