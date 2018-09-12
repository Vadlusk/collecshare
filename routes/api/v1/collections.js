var express = require('express');
var router = express.Router();
const collectionsController = require('../../../controllers/api/v1/collectionsController');

router.post('/', collectionsController.create);
router.get('/', collectionsController.index);
router.get('/:id', collectionsController.show);
router.put('/:id', collectionsController.update);
router.delete('/:id', collectionsController.destroy);

module.exports = router;
