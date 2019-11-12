const express = require ("express");
const cors = require("cors"); //Cors is an expres middle ware that enable cors, cross origin
const app = express();
const port =process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.listen(port,()=>{
    console.log(`Listening at port: ${port}`);
})