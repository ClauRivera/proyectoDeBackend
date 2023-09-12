import React, { useState } from 'react';
import axios from 'axios';
import '../Hojas-de-estilo/EliminarExpediente.css';


function EliminarExpediente() {
  const [id, setId] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/incident/${id}`);
      console.log('Expediente encontrado:', response.data);
    } catch (error) {
      console.error('Error al buscar expediente:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/incident/${id}`);
      console.log('Expediente eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar expediente:', error);
    }
  };

  return (
    <div className='containerEliminar'>
      <h2 className='tituloEliminar'>Eliminar Expediente</h2>
      <div className='formEliminar'>
      <input
        type="text"
        placeholder="Ingrese el ID del expediente"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
    </div>
  );
}

export default EliminarExpediente;
