const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Schema = mongoose.Schema;
const ProductSchema = new Schema();

const Product = mongoose.model("newItem", ProductSchema);
router.get("/", (req, res) => {
    Product.find({}, function (err, newItem) {
    if(err) {
        res.send("Bazı hatalar alındı");
        next();
    }
    res.send(newItem);
  });
});

module.exports = router;
