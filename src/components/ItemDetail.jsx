import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

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

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>{producto.title}</h2>
      <img src={producto.thumbnail} alt={producto.title} className="img-fluid" />
      <p>Descripción: {producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemDetail;