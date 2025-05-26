import React, { useState } from 'react';
import Spinner from '../../Spinner';
import {
  useProducts,
  filterProducts,
  clearFilter
} from '../../context/product/ProductsState';
import ProductsDetails from '../ProductsDetails';

const AllProducts = () => {
  const [productState, productDispatch] = useProducts();
  const { products, filtered, productsPerPage } = productState;
  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    let searchText = e.target.value;
    setInputText(searchText);
    if (searchText !== '') {
      filterProducts(productDispatch, searchText);
    } else {
      clearFilter(productDispatch);
      setInputText('');
    }
  };

  return (
    <>
      <div className='flex justify-center mt-4'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input
            type='text'
            className='p-2 block bg-primary text-black placeholder-black placeholder-opacity-40 input input-bordered input-secondary w-full max-w-xs'
            value={inputText}
            placeholder='Search Products'
            onChange={onChange}
          />
        </form>
      </div>
      <div className='flex flex-col items-center justify-center m-3 sm:flex-wrap sm:flex-row '>
        {products !== null ? (
          filtered !== null ? (
            <>
              {filtered.map((productItem) => (
                <div key={productItem._id}>
                  <ProductsDetails productItem={productItem} />
                </div>
              ))}
            </>
          ) : (
            <>
              {productsPerPage !== null &&
                productsPerPage.map((productItem) => (
                  <ProductsDetails
                    key={productItem._id}
                    productItem={productItem}
                  />
                ))}
            </>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default AllProducts;