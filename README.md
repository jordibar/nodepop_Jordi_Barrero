# nodepop_Jordi_Barrero
App anuncions parecida a wallapop, MongoDB + Express + NodeJS


Para arrancar MongoDB:

    MacOS: bin/mongod --dbpath ./data/db --directoryperdb
    Windows:
        Accdeder a:
            C:
            cd "Program Files"\MongoDB\Server\3.4
            bin\mongod --dbpath c:\data\db --directoryperdb


Para arrancar el cliente Mongo:
    bin\mongo


Resetear la base de datos:
    npm run installDB


# Peticiones

Listar todos los anuncios, sin filtros:
    http://localhost:3000/

Listar por tag:
    http://localhost:3000/apiv1/anuncios/?tags=mobile

Listar por nombre:
    http://localhost:3000/apiv1/anuncios/?nombre=coche


