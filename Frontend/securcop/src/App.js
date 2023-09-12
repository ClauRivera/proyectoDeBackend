import React from 'react';
import Footer from './Componentes/Footer';
import './App.css';
import CrearExpediente from './Componentes/CrearExpediente';
import BuscarExpediente from './Componentes/BuscarExpediente';
import ActualizarExpediente from './Componentes/ActualizarExpediente';
import EliminarExpediente from './Componentes/EliminarExpediente';


function App() {
  return (
    <div className="App">
      <h1 className='bienvenida'>Bienvenidos a Securcop</h1>
        <CrearExpediente />
        <BuscarExpediente />
        <ActualizarExpediente />
        <EliminarExpediente />
        <Footer />
    </div>
  );
}

export default App;
