import React, { useState } from 'react';
import axios from 'axios';
import '../Hojas-de-estilo/ActualizarExpediente.css';


function ActualizarExpediente() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/incident/${id}`);
      const expediente = response.data;
      setTitle(expediente.title);
      setDescription(expediente.description);
      setDate(expediente.date);
      setLocation(expediente.location);
    } catch (error) {
      console.error('Error al buscar expediente:', error);
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/incident/${id}`, {
        title,
        description,
        date,
        location
      });
      console.log('Expediente actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar expediente:', error);
    }
  };

  return (
    <div className='containerActualizar'>
      <h2 className='tituloActualizar'>Actualizar Expediente</h2>
      <div className='formActualizar'>
      <input
        type="text"
        placeholder="Ingrese el ID del expediente"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      </div>
      {title && (
        <div className='resultActualizar'>
          <h3>Detalles del Expediente</h3>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Actualizar</button>
        </div>
      )}
    </div>
  );
}

export default ActualizarExpediente;
