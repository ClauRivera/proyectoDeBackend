const User = require('../models/userModel');
// Controlador para registrar un nuevo usuario
exports.createUser = async (req, res) => {
  try {                                                
    const { email, password } = req.body;               
  
    // Validar campos requeridos
    if (!email || !password ) {
      return res.status(400).json({ error: 'Los campos email y password son requeridos.' });
    }

    // Crear el nuevo usuario en la base de datos
    const newUser = new User({ email, password });
    
    await newUser.save();
    
    res.status(201).json({ message: 'Usuario creado exitosamente', data: newUser });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Hubo un error al crear el usuario' });
  }
};

// Controlador para obtener información de un usuario específico
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Buscar el usuario en la base de datos por su ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'El usuario ya está registrado' });
    }

    res.status(200).json({mensaje: 'El usuario está registrado'});
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Hubo un error al obtener el usuario' });
  }
};

// Controlador para actualizar información de un usuario existente
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, password } = req.body;                   

    // Buscar el usuario en la base de datos por su ID
    let user = await User.findByIdAndUpdate(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario actualizado exitosamente', data: user });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Hubo un error al actualizar el usuario' });
  }
};

// Controlador para eliminar un usuario existente
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Buscar el usuario en la base de datos por su ID
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Eliminar el usuario de la base de datos

    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Hubo un error al eliminar el usuario' });
  }
};

