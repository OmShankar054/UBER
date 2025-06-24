const captainController = require('../controllers/captain.controller');  // Import the captain controller

const express = require('express');  // Import the express module
const router = express.Router();  // Create a new router object
const { body } = require('express-validator');  // Import body validation from express-validator
const authMiddleware = require('../middlewres/auth.middlewares');  // Import authentication middleware

router.post('/register', [  // Validate the request body for captain registration 
 
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain  // Call the registerCaptain method from the captain controller

)

router.post('/login', [  // Validate the request body for captain login
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain  // Call the loginCaptain method from the captain controller
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);  // Get the captain's profile, requires authentication



module.exports = router;  // Export the router object for use in other parts of the application