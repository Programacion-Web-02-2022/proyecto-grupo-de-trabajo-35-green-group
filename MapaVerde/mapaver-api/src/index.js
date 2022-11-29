import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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

