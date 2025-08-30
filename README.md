# 🐳 Despliegue de aplicaciones con Docker

Este repositorio contiene una colección de ejemplos prácticos, configuraciones y *dockerfiles* organizados por temas, para aprender y dominar Docker desde lo básico hasta conceptos más avanzados.

---

## 📂 Estructura del repositorio

- **CI/**  
  Ejemplos de integración continua con Docker.

- **Cache/**  
  Estrategias para optimizar la construcción de imágenes usando caché.

- **Capas/**  
  Buenas prácticas en la creación de capas dentro de imágenes Docker.

- **Dependencies/**  
  Manejo de dependencias y cómo incluirlas correctamente en las imágenes.

- **Distroless/**  
  Uso de imágenes *distroless* para mayor seguridad y menor superficie de ataque.

- **Ignore/**  
  Ejemplos con `.dockerignore` para excluir archivos innecesarios.

- **MultiStage/**  
  Construcciones multi-etapa (*multi-stage builds*) para imágenes más pequeñas y eficientes.

- **Prune/**  
  Uso de `docker system prune` y estrategias de limpieza de recursos.

- **Scripts/**  
  Scripts útiles para automatizar tareas relacionadas con Docker.

- **Usuarios/**  
  Manejo de usuarios dentro de contenedores para mayor seguridad.

- **curso-de-docker-fundamentos/**  
  Submódulo con material adicional y ejemplos del curso completo.

- **dockerscan/**  
  Ejemplos de análisis de imágenes y contenedores.

---

## 🚀 Cómo usar este repositorio

1. Clona el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/<tu-repo>.git
   cd <tu-repo>
   ```

2. Navega a la carpeta del tema que quieras practicar.  
   Por ejemplo, para probar *multi-stage builds*:
   ```bash
   cd MultiStage
   docker build -t ejemplo-multistage .
   ```

3. Corre los contenedores según cada ejemplo:
   ```bash
   docker run -it ejemplo-multistage
   ```

---

## 📘 Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) o Docker Engine instalado en tu sistema.
- [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) (si estás en Windows).
- Git para clonar y manejar el repositorio.
