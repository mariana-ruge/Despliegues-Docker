#!/bin/bash

#Borra todos las imagenes sin etiqueta
docker image prune -a

#Borrar los contenedores que no se han usado
docker container prune

#Borra los volúmenes no usados
docker volume prune

#Borrar todo lo usado
docker system prune

#Eliminar el cache de las imagenes
docker builder prune