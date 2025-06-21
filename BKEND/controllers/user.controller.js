const userModel = require('../models/user.models');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator'); //for validation

module.exports.registerUser = async (req,res,next) => //register user controller    
{
    const errors = validationResult(req);  // Check for validation errors
    // If there are errors, return a 400 response with the errors   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

     console.log(req.body);


    const { fullname, email, password } = req.body;

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
}