import express from "express";
const app = express();
const port = 3000;

// ---------------------------------------------send()---------------------------------------------

// app.get('/', (req, res) => {
//     res.send('Welcome To Home Page ');
// });
// app.get('/', (req, res) => {
//     res.send({ message: "Welcome To Home Page" });
// });

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome</h1> To Home Page ');
// });

// ---------------------------------------------json---------------------------------------------

// app.get('/', (req, res) => {
//     res.send(["Apple", "Mango", "Banana", "Orange"]);
// });
// app.get('/', (req, res) => {
//     res.json(["Apple", "Mango", "Banana", "Orange"]);
// });
// ---------------------------------------------jsonp---------------------------------------------
// app.get('/', (req, res) => {
//     res.jsonp({welcome : "Welcome To Home Page"});
// });
// ---------------------------------------------redirect---------------------------------------------
// app.get('/about', (req, res) => {
//     res.send("welcome to about page");
// });

// app.get('/', (req, res) => {
//     res.send( 'Welcome to Home Page' );
// });
// app.get('/change', (req, res) => {
//     res.redirect( '/about' );
// });

// ---------------------------------------------download---------------------------------------------
app.get('/', (req, res) => {
    res.send( 'Welcome to Home Page' );
});






























app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
