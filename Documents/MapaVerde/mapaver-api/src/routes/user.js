const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();


// Crear usuario
//La ruta se definira en base al proyecto "/users"
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
// Obtener todos los usuarios
router.get("/users", (req, res) => {
    userSchema
      .find() //encontrar usuarios
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// Obtener a un usuario en especifico
router.get("/users/:id", (req, res) => {//le pasamos el parametro
    const { id } = req.params; //aqui se obtiene el id de los parametros
    userSchema
      .findById(id) //aqui lo encuentra
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/users/:id", (req, res) => {
    const { id } = req.params; //extraemos el id
    const { name, age, email } = req.body; //extraemos los datos del objeto
    userSchema
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


// delete a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  

module.exports = router;