// Modelo: title, company, description, category, price, image_url

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  editProduct,
  useProducts,
  setCurrent
} from '../../context/product/ProductsState';

const Modal = ({ productItem }) => {
  const [productState, productDispatch] = useProducts();
  const { products, current } = productState;

  const [showModal, setShowModal] = useState(false);
  const [updateInput, setUpdateInput] = useState('');

  useEffect(() => {
    if (current !== null) {
      setUpdateInput(current);
    } else {
      setUpdateInput(productItem);
    }
  }, [current]);

  const { title, company, description, category, price, image_url } = updateInput;

  const onChange = (e) => {
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editProduct(productDispatch, updateInput);
    setShowModal(false);
    toast.success('Product Updated');
  };

  const openModalSetCurrent = () => {
    setShowModal(!showModal);
    setCurrent(productDispatch, productItem);
  };

  return (
    <>
      <button
        className='btn btn-xs m-1 btn-primary'
        onClick={openModalSetCurrent}>
        Edit
      </button>

      {products !== null && showModal && (
        <div className='transition ease-in-out delay-1000'>
          <div className='rounded w-[280px] min-h-[450px] bg-primary-focus flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div onSubmit={onSubmit} className='flex flex-col items-center p-4'>
              <h1 className='text-lg font-bold mb-2'>{`Edit: ${title}`}</h1>

              <input
                className='p-2 m-1 w-full'
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={onChange}
              />
              <input
                className='p-2 m-1 w-full'
                type='text'
                placeholder='Company'
                name='company'
                value={company}
                onChange={onChange}
              />
              <textarea
                className='p-2 m-1 w-full'
                placeholder='Description'
                name='description'
                value={description}
                onChange={onChange}
              />
              <input
                className='p-2 m-1 w-full'
                type='text'
                placeholder='Category'
                name='category'
                value={category}
                onChange={onChange}
              />
              <input
                className='p-2 m-1 w-full'
                type='number'
                placeholder='Price'
                name='price'
                value={price}
                onChange={onChange}
              />
              <input
                className='p-2 m-1 w-full'
                type='text'
                placeholder='Image URL'
                name='image_url'
                value={image_url}
                onChange={onChange}
              />

              <div className='flex flex-row-reverse w-full mt-4'>
                <button
                  onClick={onSubmit}
                  className='btn btn-xs btn-secondary m-2 sm:btn-md'>
                  Submit
                </button>
                <button
                  className='btn btn-xs bg-error m-2 sm:btn-md'
                  onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;