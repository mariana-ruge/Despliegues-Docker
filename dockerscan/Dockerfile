# Imagen base con Python 3
FROM python:3.7-slim

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias necesarias
RUN pip install --no-cache-dir pip --upgrade && \
    pip install --no-cache-dir dockerscan

# Comando por defecto (abre CLI de dockerscan)
ENTRYPOINT ["dockerscan"]
