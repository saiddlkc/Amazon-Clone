import React, { useEffect, useState } from 'react';

const WkTest = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);
    }
  }, []); 
  return (
    <div>
      <h2>Warenkorb</h2>
      <div className="flex flex-wrap">
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className='flex flex-row w-60 m-6'>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Preis: {item.price.value} {item.price.currency}</p>
              <img src={item.images} alt="" />
            </li>
          ))}
        </ul>
      </div>
      {cartItems.length === 0 && <p>Der Warenkorb ist leer.</p>}
      
    </div>
  );
};

export default WkTest;
