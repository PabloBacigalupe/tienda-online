import { useEffect, useState } from 'react';

const ProductModal = ({ productItem }) => {
  const [show, setShow] = useState(false);
  const [provider, setProvider] = useState(null);

  const open = () => {
    setShow(!show);
  };

  useEffect(() => {
    const getProvider = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/providers/${productItem.provider_id}`);
        const data = await res.json();
        setProvider(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (show) {
      getProvider();
    }
  }, [show]);

  const { title, company, description, category, price, image_url } = productItem;

  return (
    <>
      <button className='btn' onClick={open}>Info</button>

      {show && (
        <div className='overlay'>
          <div className='modal'>
            <h2 className='title'>{title}</h2>
            <img src={image_url} alt={title} className='img' />
            <p className='txt'><b>Company:</b> {company}</p>
            <p className='txt'><b>Description:</b> {description}</p>
            <p className='txt'><b>Category:</b> {category}</p>
            <p className='txt'><b>Price:</b> ${price}</p>

            {provider && (
              <div className='box'>
                <h3 className='sub'>Provider</h3>
                <p className='txt'><b>Company</b> {provider.company}</p>
                <p className='txt'><b>Cif:</b> {provider.cif}</p>
                <p className='txt'><b>Adress:</b> {provider.adress}</p>
                
              </div>
            )}

            <button onClick={() => setShow(false)} className='close'>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;