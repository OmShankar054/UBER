// const http = require('http');
// const app = require('./app');
// const { initializeSocket } = require('./socket');
// const port = process.env.PORT || 4050;


// const server = http.createServer(app);

// initializeSocket();

// server.listen(port, () => {  //callback 
//     console.log(`Server is running on port ${port}`); //environmental variable
// } );  

const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket'); // Make sure this is a named export
const port = process.env.PORT || 4050;

const server = http.createServer(app);

//  Initialize socket with server instance
initializeSocket(server);

server.listen(port, () => {
    console.log(` Server is running on port ${port}`);
});
