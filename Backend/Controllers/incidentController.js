const Incident = require('../models/incidentModel');
const geolocation = require('../Services/geolocation');

// controlador para crear un incidente
exports.createIncident = async (req, res) => {
  try {

    const { title, description, date, location, status } = req.body;

    if (!title || !description || !date || !location || !status) {
      return res.status(400).json({ error: 'Los campos son requeridos' })
    }

    // crear el nuevo incidente en la base de datos
    const newIncident = new Incident({ title, description, date, location, status });

    await newIncident.save();

    res.status(201).json({ message: 'Incidente creado exitosamente:', newIncident });

  } catch (error) {
    console.error('Error al crear incidente:', error);
    res.status(500).json({ error: 'Hubo un error al crear el incidente' });
  }
};

// Controlador para obtener incidentes por ID
exports.getIncidentById = async (req, res) => {
  try {
    const incidentId = req.params.id;

    // Buscar el incidente en la base de datos por su ID
    const incident = await Incident.findById(incidentId);

    if (!incident) {
      return res.status(404).json({ error: 'El incidente no está registrado' });
    }
    // Llamada a la API de geolocalización para obtener la ubicación
        // Llamo a la función de geolocalización para obtener las coordenadas
        const coordinates = await geolocation.getCoordinates(incident.location);
        res.status(200).json({ data: incident, coordinates: coordinates });
        console.log('Ubicación encontrada');
      } catch (error) {
        console.error('Error al obtener el incidente:', error);
        res.status(500).json({ error: 'Hubo un error al obtener el incidente' });
      }
    };
    
// Actualizar información de un incidente existente por su ID
exports.updateIncident = async (req, res) => {
  try {
    const incidentId = req.params.id;
    const { title, description, date, location } = req.body;

    let incident = await Incident.findByIdAndUpdate(incidentId, { title, description, date, location });

    if (!incident) {
      return res.status(400).json({ error: 'Incidente no encontrado' });
    }
    res.status(200).json({ message: 'Incidente actualizado con éxito', data: incident });

  } catch (error) {
    console.error('Error al actualizar incidente:', error);
    res.status(500).json({ error: 'Hubo un error al actualizar información del incidente' });
  }
};

// Eliminar un incidente existente por su ID
exports.deleteIncident = async (req, res) => {
  try {
  const incidentId = req.params.id;
  
  const incident = await Incident.findByIdAndDelete(incidentId);
  
  if (!incident) {
    return res.status(404).json({ error: 'Incidente no encontrado'});
  }
  
  // eliminar el incidente de la base de datos
  res.status(200).json({ message: 'Incidente eliminado con éxito'});
  } catch (error) {
    console.error('Error al eliminar el incidente:', error);
    res.status(500).json({ error: 'Hubo un error al eliminar el incidente'}); 
   }
  };