import './App.css';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h2> 
        Futuro e-commerce de ropa y accesorios para niñ@s
      </h2>
      <ItemListContainer contenido={'Traje de Invierno'} />
    </div>
  );
}                 

export default App;
