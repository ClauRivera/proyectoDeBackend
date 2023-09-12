const validationIncident = (req, res, next) => {
    //  Validación de los datos enviados para los expedientes
  
    if (!req.body.title || !req.body.description || !req.body.date || !req.body.location ) {
      return res.status(400).json({ error: 'Los campos título, descripción, fecha y lugar son requeridos.' });
    }

    next();
  };
  
  module.exports = validationIncident;