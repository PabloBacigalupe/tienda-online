import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  addProduct,
  clearCurrent,
  useProducts
} from '../../context/product/ProductsState';

const initialProduct = {
  id: '',
  title: '',
  company: '',
  description: '',
  category: '',
  price: '',
  image_url: ''
};

const ProductForm = () => {
  const [productState, productDispatch] = useProducts();
  const { current, products } = productState;

  const [product, setProduct] = useState(initialProduct);

  // const useEffect(() => {
  //   if (current !== null) {
  //     setProduct(current);
  //   } else {
  //     setProduct(initialProduct);
  //   }
  // }, [current]);

  const { title, company, description, category, price, image_url } = product;

  const idMax =
    products !== null &&
    products.map((user) => user.id).sort((a, b) => a - b)[products.length - 1] + 1;

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value, id: idMax });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(productDispatch, product)
      .then(() => {
        toast.success('Producto añadido con éxito');
        setProduct(initialProduct);
      })
      .catch((err) => {
        toast.error('No se pudo añadir el producto');
        console.error(err);
      });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className='flex flex-col items-center w-screen'>
        <h2 className='text-primary m-2'>
          {/* {current ? 'Edit Product' : 'Add Product'} */}
        </h2>
        <input
          className='p-2 m-2'
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={onChange}
        />
        <input
          className='p-2 m-2'
          type='text'
          placeholder='Company'
          name='company'
          value={company}
          onChange={onChange}
        />
        <textarea
          className='p-2 m-2'
          placeholder='Description'
          name='description'
          value={description}
          onChange={onChange}
        />
        <input
          className='p-2 m-2'
          type='text'
          placeholder='Category'
          name='category'
          value={category}
          onChange={onChange}
        />
        <input
          className='p-2 m-2'
          type='number'
          placeholder='Price'
          name='price'
          value={price}
          onChange={onChange}
        />
        <input
          className='p-2 m-2'
          type='text'
          placeholder='Image URL'
          name='image_url'
          value={image_url}
          onChange={onChange}
        />
        <button className='btn btn-xs btn-accent m-2 sm:btn-md'>Submit</button>
      </form>
    </>
  );
};

export default ProductForm;