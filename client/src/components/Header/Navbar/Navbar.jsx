import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        {/* <Link to="/">Product Bank</Link> */}
      </div>
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-products">All Products</Link></li>
        <li><Link to="/product-form">Add Product</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;