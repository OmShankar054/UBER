const express = require('express');       //using google maps => change to tomtom  
const { routes } = require('../app');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewres/auth.middlewares');


        router.post('/create',
            authMiddleware.authUser,
            body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
            body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
            body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type'),
            rideController.createRide
        )
        
        router.get('/get-fare',
            authMiddleware.authUser,
            query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
            query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
            rideController.getFare
        )



module.exports = router;