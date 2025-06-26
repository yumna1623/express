import express from 'express'
import cors from 'cors'
import products from './data.js'; 


const app = express();
const PORT = 5000;

app.use(cors());


app.get('/api/product', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
