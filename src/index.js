import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js";

dotenv.config({path: "./.env"});

connectDB();


// ;(async () => {
//     try{
//         await mongoose.connect(process.env.mongoURI, {
//             dbName: DB_NAME,
//         });
//         app.on("error", (err) => {
//             console.log("error:", err);
//             throw err;
//         })

//         app.listen(process.env.port, () => {
//             console.log(`server is running on port ${process.env.port}`);
//         });
//     }catch(err){
//         console.log("error:",err)
//         throw err
//     }
// })()