const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 'ac';

let argv = process.argv;
let parametro =  argv[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then( archivo => console.log(`Archivo creado ${archivo}`))
    .catch( e => console.log(e));