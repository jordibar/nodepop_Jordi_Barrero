'use strict';

const express = require('express');
const router = express.Router();

// Cargamos el modelo
const Anuncio = require('../../models/Anuncio');


// GET
router.get('/', (req, res, next) => {

    const tags = req.query.tags;
    const nombre = req.query.nombre;

    // Objeto vacío por si no nos pasan ningún filtro
    const filter = {};

    // Miramos si nos han pasado un filtro
    if(tags) {
        filter.tags = tags;
    }
    if(nombre) {
        filter.nombre = nombre;
    }
    console.log(filter);

    // Recuperar una lista de anuncios
    Anuncio.list(filter, (err, lista) => {
        if (err) {
            console.log('Error'. err);
            next(err); // Para que retorne la página de error
            return;
        }

        res.render('index', { 
            title: 'NODEPOP by Jordi Barrero',
            lista: lista
        });
    });
});



// GET /TAG




// POST /
// Crear un anuncio
router.post('/', (req, res, next) => {
    console.log(req.body);
    
    //Creamos un nuevo anuncio
    const anuncio = new Anuncio(req.body);

    // Lo guardamos en la base de datos
    anuncio.save((err, anuncioGuardado) => {
        if (err) {
            console.log('Error'. err);
            next(err);
            return;
        }
        res.json({ success:true, result: anuncioGuardado});
    });
});

module.exports = router; // Para poder cargarlo en app.js

