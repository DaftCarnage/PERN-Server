'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
require('dotenv').config();

const familiarController = require('./src/app/controller/familiar.controller');
const usuarioController = require('./src/app/controller/usuario.controller');


app.use(bodyParser.json());
app.use(cors());


///////////////////// FAMILIAR /////////////////////////////////////////////////////////////////////////////////////////////////////


app.get('/api/familiares', (req, res) => {
  familiarController.getFamiliares().then(data => res.json(data));
});

app.post('/api/familiares', (req, res) => {
  console.log(req.body);
  familiarController.createFamiliar(req.body).then(data => res.json(data));
});

app.put('/api/familiares', (req, res) => {
  familiarController.updateFamiliar(req.body).then(data => res.json(data));
});

app.delete('/api/familiares/:id', (req, res) => {
  familiarController.deleteFamiliar(req.params.id).then(data => res.json(data));
});


/////////////////////// USUARIO ///////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/api/usuarios', (req, res) => {
  usuarioController.getUsuarios().then(data => res.json(data));
});

app.post('/api/usuarios', (req, res) => {
  console.log(req.body);
  usuarioController.createUsuario(req.body).then(data => res.json(data));
});

app.put('/api/usuarios', (req, res) => {
  usuarioController.updateUsuario(req.body).then(data => res.json(data));
});

app.delete('/api/usuarios/:id', (req, res) => {
  usuarioController.deleteUsuario(req.params.id).then(data => res.json(data));
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




app.listen(5000, () => {
  console.log("Server has started on port 5000");
});


