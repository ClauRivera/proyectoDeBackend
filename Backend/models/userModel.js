const { Schema, model } = require('mongoose');

const userSchema = new Schema({

  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    unique: true,
  },
});

const User = model('User', userSchema);

module.exports = User;
