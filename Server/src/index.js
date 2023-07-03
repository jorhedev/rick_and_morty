const express = require("express");
const server = express();
const router = require("./routes/index.js");


// Middleware para manejar el cuerpo de la solicitud en formato JSON
server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});



// Middleware para agregar "/rickandmorty" antes de las rutas
server.use("/rickandmorty", router);



// Iniciar el servidor
server.listen(3001, () => {
  console.log("Servidor en funcionamiento en el puerto 3001");
});


