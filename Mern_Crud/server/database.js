const mongoose = require('mongoose');

const databaseConnection = async () => {
    mongoose.connect('mongodb://localhost:27017/bookstore')  // Connect to MongoDB database
        .then(() => {
            console.log("Database connected successfully.");
        })
        .catch((err) => {
            console.log("Database connection failed.", err);
        });
};

module.exports = databaseConnection;
