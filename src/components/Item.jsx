import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Item = ({ producto }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      quantity: 1,
      thumbnail: producto.thumbnail,
    };
    addToCart(itemToAdd);
    alert(`${producto.title} ha sido añadido al carrito.`);
  };

  return (
    <div className="card mb-4">
      <Link to={`/item/${producto.id}`}>
        <img src={producto.thumbnail} alt={producto.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">Precio: ${producto.price}</p>
        </div>
      </Link>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Item;