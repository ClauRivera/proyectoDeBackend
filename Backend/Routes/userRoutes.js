// const express = require('express');
const {Router} = require('express');

// Importé los controladores de usuarios
const {
    createUser,
    getUserById,
    updateUser,
    deleteUser 
} = require('../Controllers/userController');
 
const { check } = require('express-validator');

const validationMiddleware = require('../middlewares/validationMiddleware');
const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/', [
check('email').isEmail().withMessage('Ingrese un correo electrónico válido'),
check('password').notEmpty().withMessage('La contraseña es obligatoria'),
validationMiddleware,
], createUser);
// http://localhost:8080/api/user

// Ruta para obtener información de un usuario específico
router.get('/:id', getUserById);

// Ruta para actualizar información de un usuario existente
router.put('/:id',
[check('id').isMongoId(),
check('email').isEmail().withMessage('Ingrese un correo válido'),
check('password').notEmpty().withMessage('La contraseña es obbligatoria'),
], updateUser);

// Ruta para eliminar un usuario existente
router.delete('/:id',[check('id').isMongoId()], deleteUser);

module.exports = router;



//userControllers.createUser);