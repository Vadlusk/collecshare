var express                 = require('express');
var router                  = express.Router();
const collectionsController = require('../../../controllers/api/v1/collectionsController');
const multer                = require('../../../multer');

router.post('/', multer.upload.single('image'), collectionsController.create);
router.get('/', collectionsController.index);
router.get('/:id', collectionsController.show);
router.put('/:id', multer.upload.single('image'), collectionsController.update);
router.delete('/:id', collectionsController.destroy);

module.exports = router;
