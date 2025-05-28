import React, { useState } from 'react';
import Spinner from '../../Spinner';
import {
  useProducts,
  filterProducts,
  clearFilter
} from '../../context/product/ProductsState';
import Card from '../Card';

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
      <div className="search-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            value={inputText}
            placeholder="Search products..."
            onChange={onChange}
          />
        </form>
      </div>

      <div className="cards-container">
        {products !== null ? (
          filtered !== null ? (
            filtered.map((product) => (
              <Card key={product._id} product={product} />
            ))
          ) : (
            productsPerPage !== null &&
            productsPerPage.map((product) => (
              <Card key={product._id} product={product} />
            ))
          )
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default AllProducts;