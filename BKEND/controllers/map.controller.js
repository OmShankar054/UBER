const mapService = require('../services/maps.service');  //using google maps => change to tomtom not done
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async( req, res, next ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {address }=  req.query;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    }catch(error) {
        res.status(400).json({message: 'Coordinates not found'});
    }

}

module.exports.getDistanceTime = async( req, res, next ) => {
    
try{
    const errors = validationResult(req);

    if (!errors.isEmpty()){
         return res.status(400).json({ errors: errors.array() });
    }

    const {origin,destination }=  req.query;

     if (!origin || !destination) {
            return res.status(400).json({ message: 'Origin and destination are required' });
        }

    const distanceTime = await mapService.getDistanceTime(origin, destination);

    res.status(200).json(distanceTime);

   
} catch(err) {
    console.error(err);
    res.status(500).json({message: 'Internal server error'});
    }

}

 module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;

        if (!input) {
            return res.status(400).json({ message: 'Input query is required' });
        }

        const suggestions = await mapService.getAutoCompleteSuggestions(input);

        return res.status(200).json(suggestions);

    } catch (err) {
        console.error('Autocomplete controller error:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

 


