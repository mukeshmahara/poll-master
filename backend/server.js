const express = require ("express");
const mongoose = require("mongoose")
const cors = require("cors"); //Cors is an expres middle ware that enable cors, cross origin

const app = express();

const port =process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true });
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongooDb database connection established successfully!");  
});

app.listen(port,()=>{
    console.log(`Listening at port: ${port}`);
});
