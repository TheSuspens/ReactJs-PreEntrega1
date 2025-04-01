import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemCount from './ItemCount'; // Componente para seleccionar cantidad
import { useCart } from './CartContext'; // Importar el contexto del carrito

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!producto) {
    return <div>No se encontró el producto.</div>;
  }

  const handleAddToCart = (cantidad) => {
    const itemToAdd = { 
      id: producto.id, 
      name: producto.name, 
      price: producto.price, 
      quantity: cantidad, 
      thumbnail: producto.thumbnail // Usar 'thumbnail' para la imagen
    };
    addToCart(itemToAdd);
    alert(`${cantidad} de ${producto.name} agregado al carrito.`);
  };

  return (
    <div>
      <h2>{producto.name}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <ItemCount initial={1} stock={producto.stock} onAdd={handleAddToCart} />
      <Link to="/">Volver al catálogo</Link>
    </div>
  );
};

export default ItemDetailContainer;