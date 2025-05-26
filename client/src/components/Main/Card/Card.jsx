import React from 'react';
import ProductModal from '../ProductModal';

const Card = ({ product }) => {
  const { title, company, description, category, price, image_url } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image_url} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className="description">{description.slice(0, 80)}...</p>
        <p className="category">{category}</p>
        <p className="price">{price}$</p>
        <ProductModal productItem={product} />
      </div>
    </div>
  );
};

export default Card;
