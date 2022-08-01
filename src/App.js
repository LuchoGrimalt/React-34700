import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/navbar';
import Container from './components/Container/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h2> 
        Futuro e-commerce de ropa y accesorios para niñ@s
      </h2>
      <Container contenido={'Traje de Invierno'} />
    </div>
  );
}                 

export default App;
