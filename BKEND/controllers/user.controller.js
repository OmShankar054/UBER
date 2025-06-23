const userModel = require('../models/user.models');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator'); //for validation
const blacklistTokenModel = require('../models/blacklistToken.model'); // Import the blacklist token model

module.exports.registerUser = async (req,res,next) => //register user controller    
{
    const errors = validationResult(req);  // Check for validation errors
    // If there are errors, return a 400 response with the errors   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

     console.log(req.body);


    const { fullname, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });  // Check if a user with the provided email already exists
    if (isUserAlreadyExists) {  // If user already exists, return a 400 response with an error message
        return res.status(400).json({ error: 'User already exists' });
    }

    const hashPassword = await userModel.hashPassword(password);  // Hash the password
    try {  //
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword
            
        });
        const token = user.generateAuthToken();  // Generate auth token for the user
        // Send the token and user data in the response
        res.status(201).json({ token, user});
    } catch (error) {
        next(error);
    }
} // End of register user controller
// This controller handles user registration, validates input, hashes the password, and returns a token and user data

module.exports.loginUser = async (req, res, next) => { //login user controller
    // Validate the request body using express-validator  // This will check if the email and password fields are present and valid
   
    const errors = validationResult(req);  // Check for validation errors, If there are errors, return a 400 response with the errors   
   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');  // Find the user by email
        // You can continue your login logic here, such as password verification and token generation
        if (!user) { 
            return res.status(401).json({ message: 'Invalid email or password' }); // If user not found, return 401 Unauthorized
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) { 
                return res.status(401).json({ message: 'invalid email or password' });
        }

        const token = user.generateAuthToken();

        res.cookie('token', token, { // Set the token in a cookie
            httpOnly: true, // Make the cookie HTTP only
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            maxAge: 24 * 60 * 60 * 1000 // Set cookie expiration to 1 day
        });
        
        res.status(200).json({token, user}); //
        
    
} // End of login user controller, // This controller handles user login, validates input, checks user credentials, and returns a token and user data

module.exports.getUserProfile = async (req, res, next) => { //get user profile controller
 
    res.status(200).json(req.user); // Return the user profile from the request object
    // This controller retrieves the user profile from the request object, which is set by the auth middleware
}

module.exports.logoutUser = async (req, res, next) => { //logout user controller 
    // This controller handles user logout by clearing the authentication token cookie

    res.clearCookie('token'); // Clear the authentication token cookie
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Get the token from cookies or headers

    await blacklistTokenModel.create({ token }); // Add the token to the blacklist


    res.status(200).json({ message: 'User logged out successfully' }); // Return a success message//


} // End of logout user controller