// const argv = require('yargs').argv;
const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.description );
        console.log(tarea);
    break;
    
    case 'listar':
        let tareas = porHacer.getTareas();
        for (let lista of tareas) {
            console.log(lista.desc);
            console.log(lista.completado);
        }
    break;
    
    case 'actualizar':
        porHacer.actualizarTarea(argv.description, argv.completado);
    break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.description);
        console.log(borrar);
    break;    

    default:
        console.log('comando no reconocido');
    break;
}