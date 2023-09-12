const validationMiddleware = (req, res, next) => {
    // Validación de los datos enviados por el cliente
  
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ error: 'Los campos email y password son requeridos.' });
    }
  
    // Si los datos son válidos, continúa con el siguiente middleware con la opción next.
    next();
  };
  
  module.exports = validationMiddleware;
  