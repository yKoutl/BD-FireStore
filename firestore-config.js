// firestore-config.js
const { Firestore } = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'stalwart-camera-465705-q5',
  keyFilename: './clave-gcp.json', // 🔐 archivo con credenciales
});

module.exports = { firestore };
