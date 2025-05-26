import { useState, useEffect, Fragment } from 'react';
import ProductDetails from '../ProductsDetails';
import AllProducts from '../AllProducts';
import {
  useProducts,
  getAllProducts,
  sortOrder
} from '../../context/product/ProductsState';

const ProductFilter = () => {
  const [productState, productDispatch] = useProducts();
  const { products } = productState;

  const [isAscending, setIsAscending] = useState(false);
  const [isDescending, setIsDescending] = useState(false);
  const [isByCompany, setIsByCompany] = useState(false);

  useEffect(() => {
    if (products === null) {
      getAllProducts(productDispatch);
    }

    sortOrder(productDispatch, filterOrders());

    return () => {};
  }, [productDispatch, isAscending, isDescending, isByCompany]);

  const filterOrders = () => {
    const dataArr = products;

    // ASCENDING by title
    if (isAscending) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      return searchAscArr;
    }

    // DESCENDING by title
    if (isDescending) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
      return searchDescArr;
    }

    // BY COMPANY
    if (isByCompany) {
      const searchCompanyArr = dataArr.sort((a, b) =>
        a.company > b.company ? 1 : b.company > a.company ? -1 : 0
      );
      return searchCompanyArr;
    }

    return products;
  };

  return (
    <Fragment>
      <div>
        {/* <h1 className='text-sm text-center leading-relaxed m-3'>
          Search by title, company or description
        </h1> */}
        <div className='dropdown dropdown-hover'>
          <label tabIndex='0' className='btn-xs btn-secondary btn m-1'>
            Sort
          </label>
          <ul
            tabIndex='0'
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <button
                onClick={() => {
                  setIsAscending(true);
                  setIsDescending(false);
                  setIsByCompany(false);
                }}>
                Title A-Z
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsDescending(true);
                  setIsAscending(false);
                  setIsByCompany(false);
                }}>
                Title Z-A
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsByCompany(true);
                  setIsDescending(false);
                  setIsAscending(false);
                }}>
                By Company
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center m-3 sm:flex-wrap sm:flex-row '>
        {isAscending
          ? products.map((productItem) => (
              <ProductDetails productItem={productItem} key={productItem._id} />
            ))
          : isDescending
          ? products.map((productItem) => (
              <ProductDetails key={productItem._id} productItem={productItem} />
            ))
          : isByCompany
          ? products.map((productItem) => (
              <ProductDetails key={productItem._id} productItem={productItem} />
            ))
          : <AllProducts />}
      </div>
    </Fragment>
  );
};

export default ProductFilter;