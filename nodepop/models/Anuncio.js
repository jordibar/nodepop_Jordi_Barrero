'use strict';

// Cargamos mongoose
const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});


// Añadimos método estático
anuncioSchema.statics.list = function(filter, callback) {
    const query = Anuncio.find(filter);
    query.exec(callback);
}


// Crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;