import React, { useState } from 'react';
import axios from 'axios';
import '../Hojas-de-estilo/CrearExpediente.css';

function CrearExpediente() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:8080/api/incident', {
        title,
        description,
        date,
        location
      });
      console.log('Expediente creado exitosamente');
      // setExpedienteData(response.data);
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
      setStatus('');
    } catch (error) {
      console.error('Error al crear expediente:', error);
    }
  };

  return (
    <div className='container'>
      <h2 className='tituloCrear'>Crear Expediente</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          placeholder="Fecha"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearExpediente;
