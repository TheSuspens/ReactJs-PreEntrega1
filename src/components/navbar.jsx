import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Asegúrate de tener Bootstrap Icons instalados

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="../src/assets/img/logo2.jpg" alt="Logo" style={{ width: '100px', height: 'auto' }} />
          RODRIGUEZ-STORAGE
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownCategories" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownCategories">
                <li><Link className="dropdown-item" to="/category/electronics">Electrónica</Link></li>
                <li><Link className="dropdown-item" to="/category/clothing">Ropa</Link></li>
                <li><Link className="dropdown-item" to="/category/home">Hogar</Link></li>
                {/* Agrega más categorías según sea necesario */}
              </ul>
            </div>
          </div>
          <Link to="/cart" className="btn btn-outline-success position-relative">
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">items en el carrito</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;