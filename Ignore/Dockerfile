# Imagen base ligera
FROM python:3.11-slim

# Carpeta de trabajo en el contenedor
WORKDIR /app

# Copiar todos los archivos (menos los que ignoremos)
COPY . .

# Ejecutar un script de ejemplo
CMD ["python", "-c", "print('Hola desde Docker!')"]

