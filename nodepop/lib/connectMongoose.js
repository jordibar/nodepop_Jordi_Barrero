'use strict';

// Cargamso mongoose
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

// Cadena de conexión con protocolo mongodb
mongoose.connect('mongodb://localhost/anuncios');