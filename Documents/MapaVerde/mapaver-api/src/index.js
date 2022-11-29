const app = require('./app');

//const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user"); //aqui se importan los usuarios
const eventRoute = require("./routes/event"); 

// middlewares
app.use("/api", userRoute);
app.use("/api", eventRoute);

async function main(){
    await app.listen(app.get('port'));
    console.log("Server listening to", app.get('port'));
}

main();

//rutas
app.get("/", (req, res) => {
    res.send("Bienvenido a mi API");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error(error)
);

