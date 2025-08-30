# 🚀 Proyecto Web con Docker (1 Frontend + 2 Backend)

Este proyecto muestra cómo levantar un entorno de desarrollo web usando **Docker**.  
Incluye:
- **Frontend** → servido con Nginx (o React build).
- **Backend API** → ejemplo en Node.js / Flask.
- **Base de datos** → MySQL o PostgreSQL.

---

## 📌 Requisitos
- Docker Desktop o Docker Engine + Compose v2
- Conocimientos básicos de contenedores y redes

---

## 🔧 Comandos esenciales de Docker

### 1. Construir imágenes
Construir una imagen desde un `Dockerfile`:
```bash
docker build -t nombre_imagen ./ruta

```
Ejemplo para el frontend:

```bash
Copy code
docker build -t frontend-app ./frontend
```
Ejemplo para el backend:
```
bash
Copy code
docker build -t backend-api ./backend
```
2. Correr contenedores manualmente
Frontend en puerto 8080:

```
bash
Copy code
docker run -d -p 8080:80 --name frontend frontend-app

```
Backend API en puerto 5000:

```
bash
Copy code
docker run -d -p 5000:5000 --name backend backend-api

```
Base de datos (ejemplo con MySQL):

```
bash
Copy code
docker run -d \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=example \
  --name db \
  mysql:5.7
 ```
 
3. Gestionar contenedores
Ver contenedores en ejecución:
```
bash
Copy code
docker ps
```

Ver todos (incluyendo detenidos):

```
bash
Copy code
docker ps -a
```

Parar un contenedor:
```

bash
Copy code
docker stop <nombre_contenedor>
```
Eliminar un contenedor:
```
bash
Copy code
docker rm <nombre_contenedor>

```
Eliminar una imagen:
```
bash
Copy code
docker rmi <nombre_imagen>
```

4. Redes y conexión entre servicios
Crear una red para que los contenedores se comuniquen:

```
bash
Copy code
docker network create mi_red
Ejecutar contenedores en la misma red:
```
```
bash
Copy code
docker run -d --network mi_red --name backend backend-api
docker run -d --network mi_red --name db mysql:5.7
El backend ahora puede acceder a la BD usando el hostname db.
```

5. Volúmenes
Crear un volumen persistente para datos de la BD:

```
bash
Copy code
docker volume create db_data
Usarlo en un contenedor:
```
```
bash
Copy code
docker run -d \
  -e MYSQL_ROOT_PASSWORD=example \
  -v db_data:/var/lib/mysql \
  --name db \
  mysql:5.7
```


⚡ Usando Docker Compose (recomendado)
En lugar de ejecutar todo a mano, usa:

```
bash
Copy code
docker compose up -d
```

Detener contenedores:
```
bash
Copy code
docker compose down
Reconstruir imágenes:
```

```
bash
Copy code
docker compose up --build

```
Ver logs en vivo:

```
bash
Copy code
docker compose logs -f
```
