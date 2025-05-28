import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/src/assets/cart-trolley-shop.svg" alt="Carrito" className="cart-icon" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product-form">Add Product</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;