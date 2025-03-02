import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';

const App = () => {
  const mensajeBienvenida = "Bienvenido a nuestra tienda";

  return (
    <div>
      <NavBar />
      <ItemListContainer mensajeBienvenida={mensajeBienvenida} />
    </div>
  );
};

export default App;

