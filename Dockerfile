# Imagen base con Node.js
FROM node:18

# Instalar FFmpeg
RUN apt-get update && \
    apt-get install -y ffmpeg && \
    apt-get clean

# Crear directorio de la app
WORKDIR /app

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias
RUN npm install

# Crear carpeta media si no existe
RUN mkdir -p media

# Exponer puertos para RTMP y HTTP
EXPOSE 1935 8000

# Comando de inicio
CMD ["npm", "start"]
