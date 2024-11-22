const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
//const path = require('path');
const app = express();
const port = 3000;


const books = require("./routes/books");
const authors = require("./routes/authors");

const reviews = require("./routes/reviews");
const { error, addTimestamp} = require("./utilities/middlewares"); // 2 custom middleware


// custom middlewares
// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(addTimestamp); // this shows the timestamp on the terminal while posting


// Use the Routes
app.use("/api/v1", books);
app.use("/api/v2", authors);
app.use("/api/v3", reviews);


app.set('view engine', 'pug'); // pug engine is being used for templating
app.set('views', './views');


// using middleware functions
// to get the data from the form via POST method
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('form');
});


// to post the data from the form to the API
app.post('/', function(req, res) {
    const { title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status, authors, categories } = req.body;
    
    console.log(req.body);
  
    // sending this data to an external API
    const axios = require('axios');
    axios.post('http://localhost:3000/api/v1/books', req.body)
      .then(response => {
        res.send("Success! Data has been sent to the API. Please visit the link 'http://localhost:3000/api/v1/books' to see the added book to the API>");
      })
      .catch(error => {
        res.status(500).send("Failed to send data to API.");
      });
  });
  

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