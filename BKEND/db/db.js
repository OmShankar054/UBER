const mongoose = require('mongoose');


function connectToDb() { //basic function to connect to the database-
    mongoose.connect(process.env.DB_CONNECT,   
    ).then(() => {
        console.log('Connect to DB');
    }).catch(err => console.log(err));
    
}

module.exports = connectToDb;