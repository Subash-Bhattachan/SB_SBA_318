const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
//const path = require('path');
const app = express();
const port = 3000;


const books = require("./routes/books");
const authors = require("./routes/authors");

const reviews = require("./routes/reviews");
const error = require("./utilities/error");


// custom middlewares
// Parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// Use the Routes
app.use("/api/v1", books);
app.use("/api/v2", authors);
app.use("/api/v3", reviews);


app.set('view engine', 'pug'); // pug engine is being used for templating
app.set('views', './views');
//app.set('views', path.join(__dirname, 'views')); // Ensure path is correct

// using middleware functions
// to get the data from the form via POST method

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('form');
});


// this helps post the data from the form to the API
// app.post('/', function(req, res) {
//     res.send("Sucess! The data is successfully added to the API. " + req.body.title)
// })

app.post('/', function(req, res) {
    res.send("Success! POST method is working here! The entered name is: "+req.body.title+" and the email is: "+req.body.isbn);
});
    
// trying to extract the data from the form andf posting it to the existing API, facing some problems.
// POST the data from the form to the external API
app.post('/', function(req, res) {
    // Capture form data from req.body
    //console.log(req.body);
    const { title, isbn, authors, categories, status, thumbnailUrl, pageCount } = req.body;
    
    // Create the data object to send to the external API
    const data = {
        title,
        isbn,
        authors: authors.split(','), 
        categories: categories.split(','), 
        status,
        thumbnailUrl,
        pageCount
    };

    // Setting up the options for the HTTP request
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: 'api/v1/books', 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(data)) 
        }
    };

    // Making the HTTP request to the API
    const request = http.request(options, (response) => {
        let responseData = '';

        // Collecting data from the response
        response.on('data', (chunk) => {
            responseData += chunk;
        });

        // End of the response
        response.on('end', () => {
            res.send('Success! The book data was sent to the API.');
        });
    });

    // Handling errors
    request.on('error', (e) => {
        res.status(500).send(`Error: ${e.message}`);
    });

    // Writing the data to the request and end it
    request.write(JSON.stringify(data));
    request.end();
});

// trying another method
// app.post('/', function(req, res) {
//     const { title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status, authors, categories } = req.body;
    
//     //console.log(req.body);
  
//     // sending this data to an external API
//     const axios = require('axios');
//     axios.post('http://localhost:3000/api/v1/books', req.body)
//       .then(response => {
//         res.send("Success! Data has been sent to the API.");
//       })
//       .catch(error => {
//         res.status(500).send("Failed to send data to API.");
//       });
//   });
  








    

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