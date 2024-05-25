# CORRER DOCKER

## Para ambiente de dev

### Si es la primera vez

1. docker-compose up -d products-dev brands-dev front-dev dark-store-db flyway --build

### Si ya se ha ejecutado antes

2. docker-compose up -d products-dev brands-dev front-dev dark-store-db

### Si se crean migraciones correr

3. docker-compose up -d flyway

## Para crear un nuevo servicio

1. Copiar el docker file de algun servicio existente y pegarlo en la raiz del proyecto
2. Crear servicio en el docker-compose.yml siguiendo la estructura de los servicios existentes

## Recomendaciones

1. Actualizar los archivos .env, utilizar el .env.example como referencia
2. Para crear migraciones en flyway, recordar el estandar de nombres de archivos V{version}\_\_{nombre}.sql
