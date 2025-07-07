const dotenv = require('dotenv'); // used because of environmental variable
dotenv.config();                 //  used because of environmental variable 
const express = require("express");
const cors = require('cors'); //cors setup
const app = express();//app variable create kiye. -- uske ander express ko call kia hua hai
const cookieParser = require('cookie-parser'); //cookie parser for cookies
const connectToDb = require('./db/db'); //require database
const userRoutes = require('./routes/user.routes'); //importing user routes
const captainRoutes = require('./routes/captain.routes'); //importing captain routes
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes')

connectToDb(); //call

 app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true,
})); 
app.use(express.json()); //to parse json data
app.use(express.urlencoded({ extended: true })); //to parse urlencoded data
app.use(cookieParser()); //to parse cookies



app.get('/', (req, res) => { //route
    res.send("hello omsh");
});
app.use('/users', userRoutes); //use user routes
app.use('/captains', captainRoutes); //use captain routes
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes)




module.exports = app;// app variable is being exported