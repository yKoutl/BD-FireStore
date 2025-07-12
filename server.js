// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { firestore } = require('./firestore-config');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const coleccion = firestore.collection('InventarioFarmacia');

// Crear
app.post('/agregar', async (req, res) => {
  await coleccion.add(req.body);
  res.redirect('/');
});

// Leer
app.get('/medicamentos', async (req, res) => {
  const snapshot = await coleccion.get();
  const datos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(datos);
});

// Actualizar
app.post('/actualizar/:id', async (req, res) => {
  await coleccion.doc(req.params.id).update(req.body);
  res.redirect('/');
});

// Eliminar
app.post('/eliminar/:id', async (req, res) => {
  await coleccion.doc(req.params.id).delete();
  res.redirect('/');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
