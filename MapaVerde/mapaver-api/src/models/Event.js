const mongoose = require("mongoose");

//Creacion de modelos de datos de usuario.
const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
},{
  timestamps: true //fecha de creación y fecha de actualización
});

//Exportando el esquema
module.exports = mongoose.model('Event', eventSchema);