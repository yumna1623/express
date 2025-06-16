

import dotenv from "dotenv";
import connectDB from "./db/index.js"

dotenv.config({
    path:'./env'
})

connectDB();










// import mongoose from 'mongoose';
// import {DB_NAME} from './constants'
// ----------------------first approach using iffi
// ;(async ()=>{

//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (err) => {
//             console.error('Server error:', err);
//             throw err;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error('Error...' ,error);
//     }
// })()