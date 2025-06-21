const mongoose = require('mongoose'); // Importing mongoose to create a schema for blacklisted tokens
// This schema will be used to store tokens that are no longer valid, such as after a user logs out

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '86400' // This token will expire after 24 hours (86400 seconds)
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema); // Exporting the model to be used in other parts of the application
// This model will be used to check if a token is blacklisted during authentication 
