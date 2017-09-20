'use strict';


const fs = require('fs');
const path = require('path');
const async = require('async');
const Anuncio = require('../models/Anuncio');


// Mongoose_____________________________________________
// Cargamos mongoose
const mongoose = require('mongoose');

// Creamos un objeto de conexión (alias)
const conn = mongoose.connection;

// Control de errores, usamos eventEmitter
conn.on('error', (err) => {
    console.log('Error de conexión', err);
    process.exit(1);
});

// Informamos de que sí nos hemos conectado, usamos eventEmitter
conn.once('open', () => {
    console.log('Conectado a MongoDB');
});

conn.dropDatabase('anuncios');

// Cadena de conexión con protocolo mongodb
mongoose.connect('mongodb://localhost/anuncios');
//______________________________________________________________________



function readFile(file, callback) {
    console.log('Leyendo archivo', file);

    const fichero = path.join('.', 'lib', file);

    fs.readFile(fichero, (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        // Parseamos data construyendo un objeto
        const dbContent = JSON.parse(data);

        //conn.anuncios.insertMany(dbContent);

        // Iteramos la lista con un bucle asíncrono
        async.concat(dbContent, function iterador(item, callbackIteracionEnCurso) {
            //console.log(item);
            const anuncio = new Anuncio(item);

            // Lo guardamos en la base de datos
            anuncio.save((err, anuncioGuardado) => {
                if (err) {
                    callback(err);
                    return;
                }
                console.log(anuncioGuardado);
            });       
        });




        
        //callback(null, dbContent);
    });

}



// Ejecutamos delteDocument, cuando termine ejecuta readFile (callback)
// Cuando readFile termine ejecuta insertDB

// Ejecutamos
readFile('anuncios.json', (error, dbContent) => {
    if (error) {
        console.log('Hubo un error', error);
        return;
    }
    console.log('Contenido introducido a la base de datos con éxito!');
});