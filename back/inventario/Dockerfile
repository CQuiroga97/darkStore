# Establecer la imagen base
FROM node:18-alpine as base

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración del proyecto (package.json y package-lock.json)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install --only=production

# Copiar el resto de los archivos del proyecto desde la raíz
COPY . .

# Exponer el puerto en el que la aplicación se ejecuta
EXPOSE 3000

# Comando para iniciar la aplicación en modo de producción
CMD ["node", "index.js"]