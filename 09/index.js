import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./src/models/product.model.js";
import User from "./src/models/user.model.js";

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON

// Home Route
app.get("/", (req, res) => {
  res.send("hello from node js");
});

// ✅ Create a user
app.post("/api/user" ,async (req,res)=>{
    try {
        const user =  await User.create(req.body)
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


// ✅ POST: Create a product
app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);  
    res.status(200).json(product);                 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Connect to MongoDB
const mongo_url = process.env.MONGODB_URI;
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Connection failed:", error);
  });

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
