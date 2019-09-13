const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a0fc0d68da4dae68b46d34c5953da50c&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}