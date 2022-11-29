const express = require("express");
const eventSchema = require("../models/Event");

const router = express.Router();


// Crear evento
//La ruta se definira en base al proyecto "/users"
router.post("/event", (req, res) => {
    const event = eventSchema(req.body);
    event
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// Obtener todos los eventos
router.get("/event", (req, res) => {
    eventSchema
      .find() //encontrar eventos
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// Obtener a un evento en especifico
router.get("/event/:id", (req, res) => {//le pasamos el parametro
  const { id } = req.params; //aqui se obtiene el id de los parametros
  eventSchema
    .findById(id) //aqui lo encuentra
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a event
router.put("/event/:id", (req, res) => {
  const { id } = req.params; //extraemos el id
  const { title, content } = req.body; //extraemos los datos del objeto
  eventSchema
    .updateOne({ _id: id }, { $set: { title, content } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// delete a event
router.delete("/event/:id", (req, res) => {
  const { id } = req.params;
  eventSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;