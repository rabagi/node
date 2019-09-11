const axios = require('axios');

const getLugarLatLng = async  ( dir ) => {

    const encodeUrl =  encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '0ba7900d49msh9f37b771a75f9cdp1ac961jsn18a5ed8cdb72'}
    });
    // instance.get()
    //         .then( resp => {
    //             console.log(resp.data.Results[0]);
    //         })
    //         .catch( err =>{
    //             console.log("Error", err);
    //         });
    const resp = await instance.get();

    if( resp.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat       = data.lat;
    const lng       = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}
