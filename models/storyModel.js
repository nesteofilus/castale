const mongoose = require("mongoose");

const storiesSchema = {
  title: String,
  content: String,
  description: String,
  image: String,
  category: String,
  featured: String,
};

const Story = mongoose.model("Story", storiesSchema);

module.exports = Story;
