const router = require("express").Router();



router.use('/pictures', require('./picture.routes'))
router.use('/upload', require('./upload.routes'))


module.exports = router;
