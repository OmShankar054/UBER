const userModel = require('../models/user.models');


module.exports.createUser = async({
    firstname,
    lastname,
    email,
    password
}) => {                                               // Function to create a new user
    // Validate input fields    
    if (!firstname || !lastname || !email || !password) { // Check if all fields are provided
        throw new Error('All fields are required');
    }
    const user = userModel.create({  //
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    return user;    
}