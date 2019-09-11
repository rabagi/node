const  lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then( console.log )
