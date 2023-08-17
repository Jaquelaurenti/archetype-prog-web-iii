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



//mongoose.set('strictQuery', false); // If you want to address the deprecation warning

console.log(process.env.MONGO_CONNECTION)
// Iniciando o DB
mongoose.connect(
  process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
).then(() => {
  console.log('Connected to MongoDB');
  // Your application logic here
})
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });



// Fazendo o Require do Schema
requireDir('./src/entities');

// consumindo a rota
app.use('/api', require('./src/routers/index.routes'));



module.exports = app;
