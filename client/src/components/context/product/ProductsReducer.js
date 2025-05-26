import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODUCT,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  PRODUCT_ERROR,
  CLEAR_PRODUCTS,
  CURRENT_PRODUCTS_PER_PAGE,
  SORT_ORDER
} from '../types';

const productsReducer = (state, action) => {
  switch (action.type) {
    // * CRUD OPS
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item._id === action.payload._id ? action.payload : item
        )
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (productItem) => productItem._id !== action.payload
        )
      };

    // * NON CRUD OPS
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CURRENT_PRODUCTS_PER_PAGE:
      return {
        ...state,
        productsPerPage: action.payload
      };

    // * SEARCH / FILTER
    case FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter(({ title, company, description }) => {
          const testString = `${title}${company}${description}`.toLowerCase();
          return testString.includes(action.payload.toLowerCase());
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };

    // * SORT ORDER
    case SORT_ORDER:
      return {
        ...state,
        products: action.payload
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      throw new Error(`Unsupported type of: ${action.type} in productReducer`);
  }
};

export default productsReducer;