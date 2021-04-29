const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
    res.send('Hello this is a test')
})

router.get('/add', function (req, res, next) {
    res.send('Hello this is another test')
})

router.post('/', function (req, res, next) {
    res.send('Hello this is a post test')
})

router.use(function (req, res, next) {

})

module.exports = router;