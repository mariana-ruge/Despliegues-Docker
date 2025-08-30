# Etapa 1: Build (compilar la app)
# Usamos la imagen oficial del SDK de .NET 9.0 (incluye compilador, herramientas, etc.)
FROM mcr.microsoft.com/dotnet/sdk:9.0@sha256:3fcf6f1e809c0553f9feb222369f58749af314af6f063f389cbd2f913b4ad556 AS build

# Definimos el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copiamos el archivo de proyecto (solo el .csproj primero, esto ayuda con la caché de dependencias)
COPY MultiStage.csproj .

# Restauramos las dependencias de NuGet
RUN dotnet restore

# Copiamos el resto del código fuente al contenedor
COPY . .

# Compilamos el proyecto en modo Release y ponemos los binarios en /app/build
RUN dotnet build "MultiStage.csproj" -c Release -o /app/build


# Etapa 2: Runtime (ejecutar la app)
# Usamos una imagen más ligera, solo con el runtime de ASP.NET Core
FROM mcr.microsoft.com/dotnet/aspnet:9.0@sha256:b4bea3a52a0a77317fa93c5bbdb076623f81e3e2f201078d89914da71318b5d8

# Definimos el directorio de trabajo para la app
WORKDIR /App

# Copiamos los binarios ya compilados desde la etapa anterior
COPY --from=build /app/build .

# Definimos el punto de entrada (qué ejecutar cuando arranca el contenedor)
ENTRYPOINT ["dotnet", "DotNet.Docker.dll"]
