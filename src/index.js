import express from 'express';
import dotenv from 'dotenv';
import DB from './config/db.js';
import apiRouter from './router/apiGatway.js';

dotenv.config();
const PORT =  process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/',apiRouter)

app.listen(PORT,(err)=>{
    if(err){
        console.log("err",er)
    }

    console.log("server is Running on port",PORT)
})

