const express = require("express");
const router = express.Router();
const { addPage } = require("../views");

router.get("/", function (req, res, next) {
  res.send("Hello this is a test");
});

router.get("/add", function (req, res, next) {
  res.send(addPage());
});

router.post("/", function (req, res, next) {
  res.send("Hello this is post test");
});

router.use(function (req, res, next) {});

module.exports = router;
