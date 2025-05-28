import { useEffect, useState } from 'react';
import '../ProductModal/ProductModal.css';

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
            <div className="overlay">
              <div className="modal">
                <button onClick={() => setShow(false)} className="close">✕</button>

                <div className="modal-grid">
                  <div className="modal-left">
                    <img src={image_url} alt={title} className="modal-img" />
                  </div>

                  <div className="modal-right">
                    <h2 className="modal-title">{title}</h2>
                    <p className="modal-txt"><strong>Company:</strong> {company}</p>
                    <p className="modal-txt"><strong>Description:</strong> {description}</p>
                    <p className="modal-txt"><strong>Category:</strong> {category}</p>
                    <p className="modal-txt"><strong>Price:</strong> ${price}</p>

                    {provider && (
                      <div className="modal-box">
                        <h3 className="modal-sub">Provider</h3>
                        <p className="modal-txt"><strong>Company:</strong> {provider.company}</p>
                        <p className="modal-txt"><strong>CIF:</strong> {provider.cif}</p>
                        <p className="modal-txt"><strong>Address:</strong> {provider.adress}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
    </>
  );
};

export default ProductModal;