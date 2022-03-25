const router = require("express").Router();



router.use('/images', require('./image.routes'))


module.exports = router;
