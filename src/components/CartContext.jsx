import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        // Si el producto ya existe, solo incrementamos la cantidad
        return prevCart.map(item =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + itemToAdd.quantity }
            : item
        );
      }
      // Si el producto no existe, lo agregamos al carrito
      return [...prevCart, itemToAdd];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};