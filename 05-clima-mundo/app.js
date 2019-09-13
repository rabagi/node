const  lugar = require('./lugar/lugar');
const  clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then( console.log )

clima.getClima( 40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);