const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4050;


const server = http.createServer(app);



server.listen(port, () => {  //callback 
    console.log(`Server is running on port ${port}`); //environmental variable
} );  