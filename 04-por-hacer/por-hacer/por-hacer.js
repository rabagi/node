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

    return listadoPorHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) =>{
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listadoPorHacer[index].completado =  completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) =>{
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.descripcion != descripcion;
    });

    if( listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear, getListado,actualizar,borrar
}