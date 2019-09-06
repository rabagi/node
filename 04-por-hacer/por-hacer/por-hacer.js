const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`bd/data.json`, data, (err) => {
        if (err) 
            throw new Error('no se pudo grabar');
    });

}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


module.exports = {
    crear
}