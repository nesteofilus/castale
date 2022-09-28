const express = require("express");
const router = express.Router();
const Story = require("../models/storyModel");

router.route("/all-stories").get((req, res) => {
  Story.find().then((foundStories) => res.json(foundStories));
});

router.route("/featured=:featured").get((req, res) => {
  Story.find({ featured: req.params.featured }).then((foundStories) =>
    res.json(foundStories)
  );
});

router.route("/story/:id").get((req, res) => {
  Story.find({ _id: req.params.id }).then((foundStories) =>
    res.json(foundStories)
  );
});

router.route("/search/category=:category&title=:title").get((req, res) => {
  Story.find({
    title: { $regex: ".*" + req.params.title + ".*", $options: "i" },
    category: req.params.category,
  }).then((foundStories) => res.json(foundStories));
});

router.route("/search/category=:category").get((req, res) => {
  Story.find({
    category: req.params.category,
  }).then((foundStories) => res.json(foundStories));
});

router.route("/search/title=:title").get((req, res) => {
  Story.find({
    title: { $regex: ".*" + req.params.title + ".*", $options: "i" },
  }).then((foundStories) => res.json(foundStories));
});

module.exports = router;
