# Instrucciones práctica DevOps

URL: nodepop.jordibarrero.com

IP: 18.220.34.175














# nodepop_Jordi_Barrero
App anuncions parecida a wallapop, MongoDB + Express + NodeJS


Para arrancar MongoDB:

    MacOS:
        bin/mongod --dbpath ./data/db --directoryperdb
    Windows:
        Accdeder a:
            C:
            cd "Program Files"\MongoDB\Server\3.4
            bin\mongod --dbpath c:\data\db --directoryperdb


Para arrancar el cliente Mongo:
    bin\mongo


Resetear la base de datos:
    npm run installDB


Resetear la base de datos:
npm run installDB





# Peticiones

Listar todos los anuncios, sin filtros:
    http://localhost:3000/

Listar por tag:
    http://localhost:3000/apiv1/anuncios/?tags=mobile

Listar por nombre:
    http://localhost:3000/apiv1/anuncios/?nombre=coche

Listar por si es Venta o Búsqueda (true o false):
    http://localhost:3000/apiv1/anuncios/?venta=false

Listar por precio:
    precio: 10-50
        http://localhost:3000/apiv1/anuncios/?precio=10-50
    precio: 10-
        http://localhost:3000/apiv1/anuncios/?precio=10-
    precio: -50
        http://localhost:3000/apiv1/anuncios/?precio=-50
    precio: 50
        http://localhost:3000/apiv1/anuncios/?precio=50

Listar por principio de nombre:
    http://localhost:3000/apiv1/anuncios/?nombre=ip

Consulta múltiple:
http://localhost:3000/apiv1/anuncios/?tags=lifestyle&venta=true&precio=1500

Archivo estático
http://localhost:3000/images/bicicleta.jpg

# Paginación
http://localhost:3000/apiv1/anuncios/?start=2&limit=3


# POST para publicar un nuevo anuncio
http://localhost:3000/apiv1/anuncios


