const express = require("express");
const router = express.Router();

const authors = require("../data/authors");
const books = require("../data/books");

let authorsDirectory = authors;

router.get("/authors", function(req, res) {
    res.send(authorsDirectory);
})




// to get the name of the authors based on the title of the book
router.get("/authors/:title", function(req, res) {
    const { title } = req.params;

    const book = books.find(b => b.title.toLowerCase() === title.toLowerCase());


    if (!book) {
        return res.status(404).send({ message: "Book(s) not found." });
    }
    const authorsForBook = book.authors.map(authorName => {
        return authors.find(a => a.name.toLowerCase() === authorName.toLowerCase());
    }).filter(author => author !== undefined);  // this filters out any undefined if no author is found)

    if (authorsForBook.length === 0) {
        return res.status(404).send({ message: "Author(s) not found for this book." });
    }

    res.status(200).send(authorsForBook);
});




module.exports = router;