const express = require("express");
const router = express.Router();

const authors = require("../data/authors");

let authorsDirectory = authors;

router.get("/authors", function(req, res) {
    res.send(authorsDirectory);
})






    









module.exports = router;