import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <div className="d-flex align-items-center">
                  <img src={item.thumbnail} alt={item.title} className="img-thumbnail me-2" style={{ width: '50px' }} />
                  <span>{item.title} - ${item.price} x {item.quantity}</span>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button className="btn btn-secondary mt-2" onClick={clearCart}>Limpiar Carrito</button>
          <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <Link to="/checkout" className="btn btn-success mt-2">Realizar Pedido</Link>
        </>
      )}
    </div>
  );
};

export default Cart;