#Crear una capa -1
FROM ubuntu:latest
#Actualizar paquetes -2
RUN apt-get update
#Instalar curl -3
RUN apt-get install -y curl
#copiar la app -4
COPY . /app/
#Ver el resultado -5
CMD ["echo", "Hello World!"]