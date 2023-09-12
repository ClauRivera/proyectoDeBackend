const { geocode } = require('../Services/geolocation'); // Importa la función para llamar a la API

// Controlador para obtener información de geolocalización
const getGeolocation = async (req, res) => {
  try {
    const location = req.query.location; // Obtén la ubicación del query
    const geolocationData = await geocode(location); // Llama a la API de geolocalización

    // Envía los datos de geolocalización en la respuesta
    res.status(200).json(geolocationData);
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ error: 'Error al obtener la geolocalización' });
  }
};

module.exports = {
  getGeolocation,
};
