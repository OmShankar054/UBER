const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




const captainSchema = new mongoose.Schema({
     fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'Firstname must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Lastname must be at least 3 characters long' ],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {  // Socket ID for real-time communication
        type: String,
    },

    status: {
        type: String,
        enum: [ 'active', 'inactive' ], // 'active' for online, 'inactive' for offline
        default: 'inactive',
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [ 3, 'Color must be at least 3 characters long' ],
        },
        plate: {
            type: String,
            required: true,
            minlength: [ 3, 'Plate must be at least 3 characters long' ],
        },
        capacity: {
            type: Number,
            required: true,
            min: [ 1, 'Capacity must be at least 1' ],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: [ 'car', 'motorcycle', 'auto' ],
        }
    },

    location: {
        ltd: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function () {  // Generate a JSON Web Token for the captain
    const token = jwt.sign(
        { _id: this._id,},
        process.env.JWT_SECRET,
        { expiresIn: '24h' })

        return token;
 }

captainSchema.methods.comparePassword = async function (password) {  // Compare the provided password with the hashed password
    return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function (password) {  // Hash the password before saving it to the database
    return await bcrypt.hash(password, 10);
}


const captainModel = mongoose.model('Captain', captainSchema)

module.exports = captainModel;  // Export the captain model for use in other parts of the application
    