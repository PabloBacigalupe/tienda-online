import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Header/Navbar';
import AllProducts from './components/Main/AllProducts';
import ProductForm from './components/Main/ProductsForm';
import ProductState from './components/context/product/ProductsState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Pagination from './components/Main/Pagination';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ProductState>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all-products' element={<AllProducts />} />
            <Route path='/product-form' element={<ProductForm />} />
          </Routes>
          <Pagination />
        </ProductState>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;