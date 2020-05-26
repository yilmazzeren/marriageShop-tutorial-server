const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CategorySchema = new Schema();

const Category = mongoose.model("categories", CategorySchema);
router.get("/", (req, res) => {
  Category.find({}, function (err, categories) {
    if(err) {
        res.send("Bazı hatalar alındı");
        next();
    }
    res.send(categories);
  });
});

module.exports = router;
