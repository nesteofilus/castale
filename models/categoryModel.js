const mongoose = require("mongoose")

const categoriesSchema = {
  category: String
}

const Category = mongoose.model("Category", categoriesSchema)

module.exports = Category;
