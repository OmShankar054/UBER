const userModel = require('../models/user.models');// Import the user model
// Import the user model to interact with the database
const bcrypt = require('bcrypt');// For password hashing
const jwt = require('jsonwebtoken'); // For generating and verifying JWT tokens
const blacklistTokenModel = require('../models/blacklistToken.model'); // Import the blacklist token model to check if a token is blacklisted
const captainModel = require('../models/captain.model'); // Import the captain model to interact with the database


module.exports.authUser = async (req, res, next) => { // Middleware function to authenticate the user

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Get token from cookies or headers
    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' }); // Unauthorized if token is missing so it gives 401 error
    } 

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token}); // Check if the token is blacklisted
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Token is blacklisted' }); // Unauthorized if token is blacklisted
    }
    try
    {

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using JWT secret
        // If the token is valid, decoded will contain the user ID and other payload data

        const user = await userModel.findById(decoded.id); // Find the user by ID from the decoded token

        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // Not found if user does not exist
        }
        if (user.isBlocked) {
            return res.status(403).json({ message: 'User is blocked' }); // Forbidden if user is blocked
        }

        req.user = user; // Attach the user to the request object for further use //

        return next(); // Call the next middleware or route handler
    } 
    
     catch (error) { 
        return res.status(401).json({ message: 'Invalid token' }); // Unauthorized if token is invalid
     }

}

module.exports.authCaptain = async (req, res, next) => { // Middleware function to authenticate the captain

     const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]; // Get token from cookies or headers
    // If the token is not present in either, it will return undefined

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token }); // Check if the token is blacklisted
    

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify the token using JWT secret
        // If the token is valid, decoded will contain the captain ID and other payload data

        const captain = await captainModel.findById(decoded._id)  // Find the captain by ID from the decoded token
        req.captain = captain;  // Attach the captain to the request object for further use

     return next()  // Call the next middleware or route handler
     
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}