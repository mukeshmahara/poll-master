const express = require ("express");
const mongoose = require("mongoose")
const app = express();

require('dotenv').config();


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("mongooDb database connection established successfully!");
    
})



app.listen(5000,()=>{
    console.log("Listening at pot 5000");
})