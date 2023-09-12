import React, { useState } from 'react';
import axios from 'axios';
import '../Hojas-de-estilo/BuscarExpediente.css';

// del lado del backend, este sería la ruta GET

function BuscarExpediente() {
  const [id, setId] = useState('');
  const [expediente, setExpediente] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/incident/${id}`);
      setExpediente(response.data);
    } catch (error) {
      console.error('Error al buscar expediente:', error);
      setExpediente(null);
    }
  };

  return (
    <div className='containerBuscar'>
      <h2  className='tituloBuscar'>Buscar Expediente</h2>
    <div className='formBuscar'>  
      <input
        type="text"
        placeholder="Ingrese el ID del expediente"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
      {expediente && (
        <div className='resultBuscar'>
          <h3>Detalles del Expediente</h3>
          <p>ID: {expediente._id}</p>
          <p>Título: {expediente.title}</p>
          <p>Descripción: {expediente.description}</p>
          <p>Fecha: {expediente.date}</p>
          <p>Ubicación: {expediente.location}</p>
        </div>
      )}
    </div>
  );
}

export default BuscarExpediente;
