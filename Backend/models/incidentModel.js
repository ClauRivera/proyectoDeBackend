const { Schema, model } = require('mongoose');

const incidentSchema = new Schema({
  title: {
    type: String,
    required: [true, "Nombre del incidente"],
    unique: true,
  },
  description: {
    type: String,
    required : [true, "Descripción del informe"],
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: [true, "Lugar"]
  },
  status: {
    type: String,
    enum: ['Pendiente', 'En progreso', 'Resuelto'],
    default: 'Pendiente',
  },
});

const Incident = model('Incident', incidentSchema);

module.exports = Incident;
