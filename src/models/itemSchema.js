const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  imageUrl: String,
  productName: String,
  productPrice: String,
  categoryName : String
});

module.exports = mongoose.model("NewItem", itemSchema);
