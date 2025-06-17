import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN ,
    credentials: true,

}));
// Middleware to parse JSON bodies 

app.use(express.json({limit:"16kb"}));// means that the server can parse JSON data in the request body
//when data come from url 
app.use(express.urlencoded({ extended: true, limit: "16kb" })); 
app.use(express.static('public'));// to serve static files from the public directory
app.use(cookieParser());// to parse cookies in the request
export {  app } 