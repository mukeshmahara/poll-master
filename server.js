const express = require ("express");
const mongoose = require("mongoose");
const path = require("path");
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


const uri = process.env.MONGOLAB_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true }).catch(err => console.log(err));
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongooDb database connection established successfully!");  
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'));
// });


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port,()=>{
    console.log(`Listening at port: ${port}`);
    
});

