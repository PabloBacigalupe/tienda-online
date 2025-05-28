import React from 'react';
import ProductModal from '../ProductModal';
import { toast } from 'react-toastify';
import { deleteProduct, useProducts } from '../../context/product/ProductsState';

const Card = ({ product }) => {
  const productDispatch = useProducts()[1];
  const { id_product, title, company, description, category, price, image_url } = product;

  const onDelete = () => {
    toast.error('Producto eliminado');
    deleteProduct(productDispatch, id_product);
  };

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

        <div className="actions">
          <ProductModal productItem={product} />
          <button className="delete-btn" onClick={onDelete}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;