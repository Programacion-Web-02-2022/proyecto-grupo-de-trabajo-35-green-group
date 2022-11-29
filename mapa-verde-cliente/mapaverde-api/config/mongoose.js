const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "wdyt-uca"

const dburi = "mongodb+srv://diana:root@cluster0.fjasm01.mongodb.net/mapaverde?retryWrites=true&w=majority";

const connect = async () => {
  debug(dburi);
  try {
    await Mongoose.connect(dburi);
    debug("Conexión a la base exitosa");
  } catch (error) {
    debug("Error en la conexión de la base");
    process.exit(1);
  }
}

module.exports = {
  connect
}