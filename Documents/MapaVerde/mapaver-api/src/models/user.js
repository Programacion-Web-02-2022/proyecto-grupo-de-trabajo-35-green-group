const mongoose = require("mongoose");

//Creacion de modelos de datos de usuario.
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true //email unico

  }
},{
  timestamps: true //fecha de creación y fecha de actualización
});

//Exportando el esquema
module.exports = mongoose.model('User', userSchema);