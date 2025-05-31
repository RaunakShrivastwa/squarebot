import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DBURL);

const DB = mongoose.connection

DB.on('error',(err)=>{
    console.log(err);
    
});

DB.on('open',()=>{
    console.log("connected DB");
    
});
export default DB;