const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ( {
    firstname, lastname, email, passowrd,
     color, plate, capacity, vehicleType,
}) => {

    if (!firstname || !lastname || !email || !passowrd || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        }
    })

    return captain; // This will return the created captain object
    
}