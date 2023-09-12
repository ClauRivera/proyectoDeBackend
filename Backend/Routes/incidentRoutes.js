// const express = require('express');
const {Router} = require('express');

// Importé los controladores de usuarios
const {
    createIncident,
    getIncidentById,
    updateIncident,
    deleteIncident 
} = require('../Controllers/incidentController');
 
const { check } = require('express-validator');

const validationIncident = require('../middlewares/validationIncident');
const router = Router();

// Ruta para registrar un nuevo incidente
router.post('/', [
check('title').notEmpty().withMessage('Ingrese el título del incidente'),
check('description').notEmpty().withMessage('Describa el incidente'),
check('date').notEmpty().withMessage('Ingrese la fecha del incidente'),
check('location').notEmpty().withMessage('Ingrese el lugar del incidente'),
validationIncident,
], createIncident);
// http://localhost:8080/api/incident

// Ruta para obtener información de un incidente específico
router.get('/:id', getIncidentById);

// Ruta para actualizar información de un incidente existente
router.put('/:id', [
check('title').notEmpty().withMessage('Ingrese el título del incidente'),
check('description').notEmpty().withMessage('Describa el incidente'),
check('date').notEmpty().withMessage('Ingrese la fecha del incidente'),
check('location').notEmpty().withMessage('Ingrese el lugar del incidente'),
], updateIncident);
// Ruta para eliminar un usuario existente
router.delete('/:id',[check('id').isMongoId()], deleteIncident);

module.exports = router;