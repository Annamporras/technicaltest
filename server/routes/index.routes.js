const router = require("express").Router();



router.use('/pictures', require('./picture.routes'))


module.exports = router;
