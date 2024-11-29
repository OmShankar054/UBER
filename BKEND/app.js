const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require('cors');
const app = express();//app variable create kiye. -- uske ander express ko call kia hua hai

app.use(cors());



app.get('/', (req, res) => { //route
    res.send("hello omsh");
});


module.exports = app;  