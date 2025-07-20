const express = require('express');                      // Import Express framework
const databaseConnection = require("./database");        // Import MongoDB connection
const bookRouter = require("./routes/book.routes");      // Import routes for /book
const cors = require('cors');                            // To allow frontend → backend requests (CORS)

databaseConnection();                                    // Connect to MongoDB

const app = express();                                   // Create Express app
app.use(express.json());                                 // Middleware to parse JSON body
app.use(cors());                                         // Enable CORS

app.get("/", (req, res) => {                             // Test route
    res.send("Hello World!");
});

app.use('/book', bookRouter);                            // Use book router with /book prefix

app.listen(8000, () => {
    console.log(`Port listening on 8000`);               // Start server on port 8000
});
