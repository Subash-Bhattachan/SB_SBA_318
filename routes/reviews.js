const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews");

let reviewsDirectory = reviews;



// Endpoint to get reviews filtered by ISBN for API v3
router.get("/reviews", function (req, res) {
    const { isbn } = req.query;

    // If ISBN is not provided, it returns all reviews
    if (!isbn) {
            res.send(reviewsDirectory);
    }

    else {

    // it filters the reviews by the provided ISBN, that is the query parameter here
    const filteredReviews = reviews.filter(review => review.isbn === isbn);

    // If no reviews are found for the given ISBN,
    if (filteredReviews.length === 0) {
        return res.status(404).send({ message: "No reviews found for the provided ISBN." });
    }

    // this returns the filtered reviews
    res.status(200).send(filteredReviews);
    }
});














module.exports = router;