const multer  = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'avatars/')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const upload  = multer({ storage, limits: {
  fileSize: 1024 * 1024 * 5
} });

module.exports = { upload }
