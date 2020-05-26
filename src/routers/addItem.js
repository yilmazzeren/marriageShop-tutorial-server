const express = require("express");
const router = express.Router();

const itemSchema = require("../models/itemSchema");

router.post("/",(req,res) => {
    const {imageUrl,productName,productPrice} = req.body;

    const newItem = new itemSchema({
        imageUrl : imageUrl,
        productName : productName,
        productPrice  : productPrice
    });

    newItem.save().then((data) => {
        res.send(data);
    },
    (err) => {
        res.send(err)
    }
    )
})

module.exports=router;