

const axios = require('axios');  //using google maps => change to tomtom not done

module.exports.getAddressCoordinate = async (address) => {
      const apiKey = process.env.TOMTOM_API_KEY; //changed for tomtom api
      const url = `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json?key=${apiKey}`;
     
    try {
        const response = await axios.get(url);

        if (
            response.data &&                            //changed for tomtoma api
            response.data.results &&                    //changed for tomtoma api
            response.data.results.length > 0            //changed for tomtoma api
        ) {
            const position = response.data.results[0].position;
            return {
                lat: position.lat,
                lng: position.lon
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error('Geocoding Error:', error.message);
        throw error;
    }
};


module.exports.getDistanceTime = async (origin, destination) => {  //to get distance&time between two points
    if (!origin || !destination) {
        throw new Error('Origin and Destination are required');
    }

    const apiKey = process.env.TOMTOM_API_KEY;

    //  Construct URL for TomTom Routing API
    const url = `https://api.tomtom.com/routing/1/calculateRoute/${encodeURIComponent(origin)}:${encodeURIComponent(destination)}/json?key=${apiKey}&travelMode=car`;

    try {
        const response = await axios.get(url);

        //  TomTom does not return `status: OK`, so we validate response differently
        if (
            response.data &&
            response.data.routes &&
            response.data.routes.length > 0
        ) {
            const summary = response.data.routes[0].summary;

            return {
                distanceInMeters: summary.lengthInMeters,
                travelTimeInSeconds: summary.travelTimeInSeconds,
                trafficTimeInSeconds: summary.trafficTravelTimeInSeconds // optional
            };
        } else {
            throw new Error('No routes found');
        }
    } catch (err) {
        console.error('TomTom Routing Error:', err.message);
        throw err;
    }
};

 
module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    const apiKey = process.env.TOMTOM_API_KEY;
    const url = `https://api.tomtom.com/search/2/autocomplete/${encodeURIComponent(input)}.json?key=${apiKey}&limit=5`;

    try {
        const response = await axios.get(url);

        if (
            response.data &&
            response.data.results &&
            response.data.results.length > 0
        ) {
            // Return suggestions (you can format as needed)
            return response.data.results.map(result => ({
                address: result.address.freeformAddress,
                position: result.position
            }));
        } else {
            throw new Error('No autocomplete results found');
        }
    } catch (err) {
        console.error('TomTom Autocomplete Error:', err.message);
        throw err;
    }
};

