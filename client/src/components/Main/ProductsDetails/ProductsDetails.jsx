import React from 'react';
import Modal from '../Modal';
import { toast } from 'react-toastify';
import { deleteProduct, useProducts } from '../../context/product/ProductsState';
import '../ProductsDetails/ProductsDetails.css';

const ProductDetails = ({ productItem }) => {
  const productDispatch = useProducts()[1];
  const { id_product, title, company, description, category, price, image_url } = productItem;

  const onDelete = () => {
    toast.error('Product Deleted');
    deleteProduct(productDispatch, id_product);
  };
  
  return (
    
    <div className="product-card">
      <button className="close-btn">cerrar</button>

      <div className="image-container">
        <img src={image_url} alt={title} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="title">{title}</h3>
        <p className="company">{company}</p>
        <p className="description">
          {description.length > 80 ? description.slice(0, 80) + '...' : description}
        </p>
        <p className="category">{`Category: ${category}`}</p>
        <p className="company-name">{`Company: ${company}`}</p>

        <div className="actions">
          <Modal productItem={productItem} />
          <p className="price">{price}$</p>
          <button className="delete-btn" onClick={onDelete}>
            Delete
          </button>



        </div>
      </div>
    </div>
  );
};

export default ProductDetails;