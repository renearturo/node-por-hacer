const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer =  [];
    }
}

const actualizarTarea = (desc, completado= true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.desc === desc );

    if ( index >= 0 )
    {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

let getTareas = () =>{
    cargarDB();
    return listadoPorHacer;
}

let guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) =>{
        if(err){
            console.log('error');
        }else{
            console.log('Guardado');
        }
    });
}

let crear = (desc) => {

    cargarDB();
    
    let porHacer = {
        desc,
        completado: false,
    }

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;
}

const borrar = (desc) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.desc !== desc;
    })

    if ( listadoPorHacer.length === nuevoListado.length ){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB()
        return true;
    }
}

module.exports = {
    crear,
    getTareas,
    actualizarTarea, 
    borrar
}