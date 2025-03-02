import React from 'react';

const CartWidget = () => {
  const itemsInCart = 0; 

  return (
    <div className="cart-widget">
      <span>3</span>
      <img 
        src="../src/assets/img/R.png" 
        alt="Carrito" 
        className="cart-icon" 
      />
    </div>
  );
};

export default CartWidget;

