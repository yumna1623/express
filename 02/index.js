const express = require('express');
const app = express();
const port = 3000;

// Old: /profile → New: /user/info
app.get('/user/info', (req, res) => {
    res.send('User Information Page ');
});

// Old: /product/:id → New: /products/view/:id
app.get('/products/view/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Viewing Product ID: ${id}`);
});

// Old: /category/:type/item/:itemId → New: /shop/:type/items/:itemId
app.get('/shop/:type/items/:itemId', (req, res) => {
    const type = req.params.type;
    const itemId = req.params.itemId;
    res.send(`Shop: type ${type}, item ${itemId}`);
});

// Old: /admin/dashboard → New: /admin/panel/overview
app.get('/admin/panel/overview', (req, res) => {
    res.send('Admin Panel Overview');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
