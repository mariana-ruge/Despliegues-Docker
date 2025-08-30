function sendMessage(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;
  const respuesta = document.getElementById("respuesta");

  if (nombre && mensaje) {
    respuesta.innerText = `✅ Gracias ${nombre}, tu mensaje fue recibido.`;
    respuesta.style.color = "green";
  } else {
    respuesta.innerText = "❌ Por favor completa todos los campos.";
    respuesta.style.color = "red";
  }
}
