const express = require("express");
const bodyParser = require("body-parser");

const books = require("./routes/books");
const authors = require("./routes/authors");

const reviews = require("./routes/reviews");
const error = require("./utilities/error");

const app = express();
const port = 3000;

// custom middlewares
// Parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Use the Routes
app.use("/api/v1", books);
app.use("/api/v2", authors);
app.use("/api/v3", reviews);




app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});


app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});