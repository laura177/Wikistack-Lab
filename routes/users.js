const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
    res.send('Hello this is a test')
})

router.use(function (req, res, next) {

})

module.exports = router;