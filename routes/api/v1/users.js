var express           = require('express');
var router            = express.Router();
const usersController = require('../../../controllers/api/v1/usersController');
const multer          = require('../../../multer');

router.post('/', usersController.create);
router.get('/', usersController.index);
router.get('/:uid', usersController.show);
router.put('/:uid', multer.upload.single('avatar'), usersController.update);
router.delete('/:uid', usersController.destroy);

module.exports = router;
