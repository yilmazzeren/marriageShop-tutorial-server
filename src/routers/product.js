const express = require("express");

const router = express.Router();

router.post("/",(req,res) => {
    res.json({
        id:"1",
        categoryId:"a",
        productName:"a",
        productPrice:"a",
        productImage:""
    })
})

module.exports=router;