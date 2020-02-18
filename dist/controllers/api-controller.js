const axios = require('axios');
const baseUrl = 'https://api.sunrise-sunset.org/json';
const getSunriseSunsetInfo = (req, res, next) => {
    const coords = generateRandomCoords();
    axios.get(`${baseUrl}?lat=${coords.lat}&lng=${coords.lng}`)
        .then((data) => {
        console.log(data.results);
        res.status(200).send(data.results);
        //axios.spread((...responses) => {
        // console.log("processing response....")
        // res.status(200).send(responses)
    }).catch(error => {
        console.log(error);
    });
};
const generateRandomCoords = () => {
    let result = [];
    const maxLat = 90;
    const minLat = -90;
    let randomLat = Math.random() * (90 - -90) + -90;
    let randomLng = Math.random() * (180 - -180) + -180;
    return {
        lat: randomLat,
        lng: randomLng
    };
};
module.exports = {
    getSunriseSunsetInfo
};
//# sourceMappingURL=api-controller.js.map