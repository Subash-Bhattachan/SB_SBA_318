const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews");

let reviewsDirectory = reviews;

router.get("/reviews", function(req, res) {
    res.send(reviewsDirectory);
})
















module.exports = router;