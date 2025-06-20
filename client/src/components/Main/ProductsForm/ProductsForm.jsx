import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  addProduct,
  clearCurrent,
  useProducts
} from '../../context/product/ProductsState';
import '../ProductsForm/ProductsForm.css';

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
        <form onSubmit={onSubmit}>
            <h2 className="form-title">Añadir producto</h2>

            <input
              className="form-input"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={onChange}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={onChange}
            />
            <textarea
              className="form-textarea"
              placeholder="Description"
              name="description"
              value={description}
              onChange={onChange}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Category"
              name="category"
              value={category}
              onChange={onChange}
            />
            <input
              className="form-input"
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={onChange}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Image URL"
              name="image_url"
              value={image_url}
              onChange={onChange}
            />

            <button className="form-button">Submit</button>
        </form>
    </>
  );
};

export default ProductForm;