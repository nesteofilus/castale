const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");

router.route("/categories").get((req, res) => {
  Category.find().then((foundCategories) => res.json(foundCategories));
});

module.exports = router;
