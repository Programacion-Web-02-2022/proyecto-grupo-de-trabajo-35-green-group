const express = require("express");
const router = express.Router();


//importar los enrutadores
const eventRouter =require("./event.router");
const authRouter = require("./auth.router");


//Definir rutas
router.use("/auth", authRouter);
router.use("/event", eventRouter);

module.exports =router;