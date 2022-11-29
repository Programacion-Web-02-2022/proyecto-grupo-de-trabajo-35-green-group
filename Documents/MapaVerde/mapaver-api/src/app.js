const express = require("express");
const cors =require("cors");
const app = express();


//Settings
app.set('port', process.env.PORT || 4000);


//Middlewares. Se usan aantes de llegar a las rutas
app.use(cors());
app.use(express.json());//convertir de js a json
//app.use('/api/users',require('./routes/user') )
//app.use('/api/event',require('./routes/event'))


//Routes

module.exports = app;