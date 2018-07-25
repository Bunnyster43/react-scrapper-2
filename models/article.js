const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  date: String,
  url: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;