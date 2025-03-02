import React from 'react';
import NavBar from '../src/components/navbar.jsx';
import ItemListContainer from '../src/components/itemListContainer';

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

