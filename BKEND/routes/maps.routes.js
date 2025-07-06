const express = require('express');  //using google maps => change to tomtom not done
const router = express.Router();
const authMiddleware = require('../middlewres/auth.middlewares');
const  mapController = require('../controllers/map.controller');
const  { query } = require('express-validator');

 router.get('/get-coordinates',   //getting coorinates of two places 
    query('address').isString().isLength({min:3 }),
    authMiddleware.authUser, 
    mapController.getCoordinates );

 router.get('/get-distance-time',   //getting coorinates of two places 
    query('origin').isString().isLength({min:3 }),
    query('destination').isString().isLength({min:3 }),
    authMiddleware.authUser, 
    mapController.getDistanceTime );

 router.get('/get-suggestions',
    query('input').isString().isLength({min:3 }),
    authMiddleware.authUser, 
    mapController.getAutoCompleteSuggestions    
 )




module.exports = router;