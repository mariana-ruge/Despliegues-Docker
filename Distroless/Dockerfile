#La imagen se compila en stream
FROM python:3-slim AS build-env
COPY . /app
WORKDIR /app

#Las aplicaciones se ejecutan con distroless
FROM gcr.io/distroless/python3
COPY --from=build-env /app /app
WORKDIR /app
CMD ["hello.py", "/etc"]