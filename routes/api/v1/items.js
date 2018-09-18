var express           = require('express');
var router            = express.Router();
const itemsController = require('../../../controllers/api/v1/itemsController');
const multer          = require('../../../multer');

router.post('/', multer.upload.single('image'), itemsController.create);
router.get('/', itemsController.index);
router.get('/:id', itemsController.show);
router.put('/:id', multer.upload.single('image'), itemsController.update);
router.delete('/:id', itemsController.destroy);

module.exports = router;
