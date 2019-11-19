const express = require ("express");
const mongoose = require("mongoose")
const cors = require("cors"); //Cors is an expres middle ware that enable cors, cross origin

const app = express();

const port =process.env.PORT || 5500;

require('dotenv').config();

app.use(cors());
app.use(express.json());

const PollRouter = require('./routes/poll');
// const HomeRouter = require('../src')
// app.use('/App',HomeRouter);
app.use('/poll', PollRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true }).catch(err => console.log(err));
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongooDb database connection established successfully!");  
});

app.listen(port,()=>{
    console.log(`Listening at port: ${port}`);
    
});

