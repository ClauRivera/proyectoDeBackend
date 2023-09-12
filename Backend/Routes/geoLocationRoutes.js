const express = require('express');
const router = express.Router();
const geolocationController = require('../Controllers/geoLocationController'); // Importa el controlador que maneja las llamadas a la API

// Definir una ruta para obtener información de geolocalización
router.get('/geolocation', geolocationController.getGeolocation);

module.exports = router;
