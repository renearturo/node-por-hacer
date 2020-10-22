const argv = require('yargs')
             .command('crear', 'Crear un elemento', {
                description: {
                    demand: true,
                    alias: 'd',
                    desc: 'Información de tarea'
                }
             })
             .command('actualizar', 'Actualizar una tarea', {
                 description: {
                    demand: true,
                    alias: 'd',
                    desc: 'Información de tarea'
                 },
                 completado: {
                    demand: true,
                    alias: 'c',
                    desc: 'Tarea Completada'
                 }
             })
             .command('borrar', 'Borrar tarea', {
                 description: {
                    demand: true,
                    alias: 'd',
                    desc: 'Información de tarea'
                 }
             })
             .help()
             .argv;


module.exports = {
    argv
}             