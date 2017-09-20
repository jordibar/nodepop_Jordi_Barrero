'use strict'

// Cargamos mongoose
const mongoose = require('mongoose');

// Creamos un objeto de conexión (alias)
const conn = mongoose.connection;

// Cargamos el modelo de Anuncio
const Anuncio = require('../models/Anuncio');

// Fichero json con los datos iniciales de la bd
const file = require('../models/anuncios.json');

// Cadena de conexión con protocolo mongodb
mongoose.connect('mongodb://localhost/anuncios');




conn.once('open', async () => {
    console.log('Conectado a MongoDB');

    const res = await Anuncio.deleteMany({});
    console.log('Eliminados', res.result.n, 'anuncios');

    const insertados = await Anuncio.insertMany(file.anuncios);
    console.log(`Insertados ${insertados.length} anuncios`);
});

