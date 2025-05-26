import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useProducts, clearFilter,
  setCurrentProductsPerPage
} from '../../context/product/ProductsState';
// * KEEP IN MIND THERE ARE TWO SEPARATE FUNCTIONS NAMED SETCURRENTPAGE

const Pagination = () => {
  // *CONTEXTAPI
  const [productState, productDispatch] = useProducts();
  const { products } = productState;

  // Handling the local pages state
  const [currentPage, SetCurrentPage] = useState(1);
  const [productsPerPage] = useState(50);

  useEffect(() => {
    if (products !== null) {
      const dataArr = products;
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProductsOnPage =
        products !== null &&
        dataArr.slice(indexOfFirstProduct, indexOfLastProduct);
      // If any state change to the current page then update the context api productsPerPage array
      setCurrentProductsPerPage(productDispatch, currentProductsOnPage);
    }
  }, [products, currentPage]);

  const pageNumbers = [];
  // Loop through total products per page and push the calculated number into array to get correct number of pages
  const totalProducts = products !== null && products.length;

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='navbar justify-center'>
      <ul className='flex justify-center items-center flex-wrap '>
        {pageNumbers.length > 0 &&
          pageNumbers.map((number) => (
            <li key={number} className='btn btn-group m-1'>
              <Link
                to='#'
                className='btn btn-xs m-1'
                onClick={() => {
                  SetCurrentPage(number);
                  clearFilter(productDispatch);
                }}
                alt='paging'>
                {number}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;