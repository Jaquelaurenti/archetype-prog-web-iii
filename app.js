const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});


//Iniciando o App
const app = express();

app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  process.env.MONGO_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Fazendo o Require do Schema
requireDir('./src/models');

// consumindo a rota
app.use('/api', require('./src/routers/index.routes'));



module.exports = app;
