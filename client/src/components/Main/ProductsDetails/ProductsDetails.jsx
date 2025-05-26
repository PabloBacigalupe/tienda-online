import React from 'react';
import { toast } from 'react-toastify';
import Modal from '../Modal';
import { deleteProduct, useProducts } from '../../context/product/ProductsState';

const ProductDetails = ({ productItem }) => {
  // Only need the dispatch not the state
  const productDispatch = useProducts()[1];

  const { _id, title, company, description, category, price, image_url } = productItem;

  const onDelete = () => {
    toast.error('Product Deleted');
    deleteProduct(productDispatch, _id);
  };

  return (
    <>
      {/* // Not matched cards per page */}
      <div className='card card-compact bg-secondary shadow-xl my-3 sm:m-4'>
        {/* Imagen del producto */}
        {image_url && (
          <figure>
            <img src={image_url} alt={title} className='w-full h-48 object-cover' />
          </figure>
        )}

        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p className='font-bold'>{company}</p>
          <p className='text-sm'>{description}</p>
          <p className='text-xs'>{`Category: ${category}`}</p>
          <p className='text-sm font-semibold'>{`Price: $${price}`}</p>

          <div className='card-actions justify-end'>
            <div className='btn-group justify-between'>
              <Modal productItem={productItem} />
              <button className='btn btn-xs m-1 btn-primary' onClick={onDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;