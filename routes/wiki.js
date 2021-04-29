const express = require("express");
const router = express.Router();
const { addPage } = require("../views");
const { Page } = require("../models");


router.get("/", function (req, res, next) {
  res.send("Hello this is a test");
});

router.get("/add", function (req, res, next) {
  res.send(addPage());
});

router.post("/", async function (req, res, next) {
  const title = req.body.title;
  const content = req.body.content;
  const slug = req.body.slug;
  try {
    const page = await Page.create({title, slug, content});
    res.redirect("/")
  } catch (error) {
    next (error)
  }
});

router.use(function (req, res, next) {});

module.exports = router;
