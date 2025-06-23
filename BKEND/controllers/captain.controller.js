const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res) => {

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
};
