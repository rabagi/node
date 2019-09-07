const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`bd/data.json`, data, (err) => {
        if (err) 
            throw new Error('no se pudo grabar');
    });

}

let cargarDB = () => {

    try{
        listadoPorHacer = require('../bd/data.json');

    }catch(error){
        listadoPorHacer = [];
    }
   
}

const crear = (descripcion) => {

    cargarDB();

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