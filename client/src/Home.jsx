import ProductFilter from './components/Main/ProductsFilter';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <ProductFilter />
      </div>
    </div>
  );
};

export default Home;