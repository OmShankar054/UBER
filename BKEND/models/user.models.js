const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            require: true,
            minlength: [3, 'First name must be at least 2 character long'],             
        },
        lastname:{
            type: String,
            minlength:[3, 'last name must be atleast 3 character long'], 
        }        
    },
    email:{
        type: String,
        required: true, 
        unique: true,
        minlength:[5, "email  mustv be atleast 5 character long"],
    },
    password:{
        type: String,
        require:true,
        select: false, //to not show password in response
        minlength:[8, "password must be atleast 8 character long"],    
    }, 
    socketId: { //driver live location to be shared with the user
        type: String,
        
    },
})


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('User', userSchema);
//bcrypt jsonwebtoken for basic authenticatiion