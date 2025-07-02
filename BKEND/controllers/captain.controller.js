const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model'); // Import the blacklist token model to manage blacklisted tokens


module.exports.registerCaptain = async (req, res, next ) => {  // Controller method to register a new captain

    const errors = validationResult(req); // Validate the request body using express-validator
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body; // Destructure the request body to get captain details

    const iscaptainAlreadyExists = await captainModel.findOne({ email }); // Check if a captain with the provided email already exists
    if (iscaptainAlreadyExists) {
        return res.status(400).json({ error: 'Captain already exists' });
    }

    const hashedPassword = await captainModel.hashPassword(password); // Hash the password using the model's method

    const captain = await captainService.createCaptain({
        
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        }
    });
         
    const token = captain.generateAuthToken(); // Generate a JSON Web Token for the captain

     res.status(201).json({ captain, token });
}

module.exports.loginCaptain = async (req, res, next) => {  // Controller method to log in a captain

    const errors = validationResult(req); // Validate the request body using express-validator
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body; // Destructure the request body to get login details

    const captain = await captainModel.findOne({ email }).select('+password'); // Find the captain by email

    if (!captain) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await captain.comparePassword(password); // Compare the provided password with the stored hashed password
    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = captain.generateAuthToken(); // Generate a JSON Web Token for the captain

    res.cookie('token', token); // Set the token in a cookie

    res.status(200).json({ captain, token });
}


module.exports.getCaptainProfile = async (req, res, next) => {  // Controller method to get the captain's profile
    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {  // Controller method to log out a captain
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];  // Get the token from cookies or headers

    await blackListTokenModel.create({ token });  // Blacklist the token by saving it to the database
    // This prevents the token from being used again for authentication

    res.clearCookie('token');  // Clear the token cookie to remove it from the client's browser
    // This ensures that the client no longer has access to the token

    res.status(200).json({ message: 'Logout successfully' });  // Respond with a success message
}
