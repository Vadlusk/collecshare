var express           = require('express');
var router            = express.Router();
const usersController = require('../../../controllers/api/v1/usersController');
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'avatars/')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
});
const upload  = multer({ storage });

router.post('/', usersController.create);
router.get('/', usersController.index);
router.get('/:uid', usersController.show);
router.put('/:uid', upload.single('avatar'), usersController.update);
router.delete('/:uid', usersController.destroy);

module.exports = router;
