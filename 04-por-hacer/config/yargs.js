const argv = require('yargs')
    .command('crear', 'crear por hacer', {
        descripcion:{
            demand: true,
            alias: 'd',
            desc: 'Tarea por hacer'
        }
    })
    .command('actualizar', 'actualiza tareas', {
        descripcion:{
            demand: true,
            alias: 'd',
            desc: 'actualizar tarea por hacer'
        },
        completado:{
            default: true,
            alias: 'c',
            desc: 'marca como completado o pendiente tarea por hacer'
        }

    })
    .help()
    .argv;

    module.exports = {
        argv
    }