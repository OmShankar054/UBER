const dotenv = require('dotenv'); // used because of environmental variable
dotenv.config();                 //  used because of environmental variable 

const express = require("express");
const cors = require('cors'); //cors setup
const app = express();//app variable create kiye. -- uske ander express ko call kia hua hai
const connectToDb = require('./db/db'); //require database

connectToDb(); //call

app.use(cors()); //cors use 



app.get('/', (req, res) => { //route
    res.send("hello omsh");
});


module.exports = app;// app variable is being exported