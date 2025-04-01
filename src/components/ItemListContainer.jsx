import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProductos(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Productos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="row">
          {productos.map((producto) => (
            <div className="col-md-4" key={producto.id}>
              <Item producto={producto} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;