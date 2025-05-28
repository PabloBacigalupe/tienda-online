import { useContext, useReducer } from 'react';
import ProductContext from './ProductsContext';
import productReducer from './ProductsReducer';

import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  PRODUCT_ERROR,
  SET_CURRENT,
  CURRENT_PRODUCTS_PER_PAGE,
  CLEAR_CURRENT,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  SORT_ORDER
} from '../../context/types';

// Hook personalizado para usar el contexto
export const useProducts = () => {
  const { state, dispatch } = useContext(ProductContext);
  return [state, dispatch];
};

// Componente proveedor del contexto
const ProductState = (props) => {
  const initialState = {
    products: null,
    current: null,
    productsPerPage: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

// Obtener todos los productos
export const getAllProducts = async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();
    dispatch({
      type: GET_PRODUCTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.response?.msg || err.message
    });
  }
};

// Añadir un nuevo producto
export const addProduct = async (dispatch, product) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  };

  try {
    const response = await fetch('http://localhost:3000/api/products', options);

    // Si la respuesta NO es exitosa, lanzar error
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al insertar en la base de datos');
    }

    const data = await response.json();

    // Solo se hace dispatch si el producto fue insertado correctamente
    dispatch({
      type: ADD_PRODUCT,
      payload: data
    });

    return data;
  } catch (err) {
    console.error('Error real al insertar producto:', err.message);
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.message
    });
    throw err;
  }
};

// Editar un producto existente
export const editProduct = async (dispatch, product) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  };
  try {
    const response = await fetch(`http://localhost:3000/api/products/${product._id}`, options);
    const data = await response.json();
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.response?.msg || err.message
    });
  }
};

// Eliminar un producto
export const deleteProduct = async (dispatch, id) => {
  try {
    await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.message
    });
  }
};

// Establecer el producto actual
export const setCurrent = (dispatch, product) => {
  dispatch({
    type: SET_CURRENT,
    payload: product
  });
};

// Limpiar el producto actual
export const clearCurrent = (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT
  });
};

// Filtrar productos
export const filterProducts = (dispatch, text) => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: text
  });
};

// Limpiar filtros
export const clearFilter = (dispatch) => {
  dispatch({
    type: CLEAR_FILTER
  });
};

// Ordenar productos
export const sortOrder = (dispatch, productsSorted) => {
  dispatch({
    type: SORT_ORDER,
    payload: productsSorted
  });
};

// Establecer productos de la página actual
export const setCurrentProductsPerPage = (dispatch, currentProductsOnPage) => {
  dispatch({
    type: CURRENT_PRODUCTS_PER_PAGE,
    payload: currentProductsOnPage
  });
};