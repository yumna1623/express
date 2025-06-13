const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Route demonstrating all `req` methods
app.get('/example/:userId', (req, res) => {
  // Access route parameters
  const userId = req.params.userId;

  // Access query parameters
  const queryParams = req.query;

  // Access HTTP method
  const method = req.method;

  // Access original URL
  const originalUrl = req.originalUrl;

  // Access request headers
  const headers = req.headers;

  // Access a specific header
  const userAgent = req.get('User-Agent');

  // Access path
  const path = req.path;

  // Access IP address
  const ip = req.ip;

  res.json({
    userId,
    queryParams,
    method,
    originalUrl,
    headers,
    userAgent,
    path,
    ip
  });
});

// Route to demonstrate req.body
app.post('/submit', (req, res) => {
  const body = req.body; // Requires express.json() middleware
  res.json({
    receivedBody: body
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
