const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'crear por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza tareas', {
        descripcion, completado
    })
    .command('borrar', 'borra tareas', {
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    }