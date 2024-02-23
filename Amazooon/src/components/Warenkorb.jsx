import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Warenkorb = () => {
  const [cartItems, setCartItems] = useState([]);
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems); 
    
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  useEffect(() => {
    localStorage.setItem('cartN', cartItems.length.toString());
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems.reverse());
    }
  }, []); 
  return (
    <div>
    <h2>Warenkorb</h2>
    <div className="flex flex-col flex-wrap border-solid border-red-500">
      {cartItems.map((item, index) => (
        <div key={index} className="border-solid border-red-500 border-4 m-3">
          <p>ID: {item.id}</p>
          <p>Name: {item.title}</p>
          <p>Preis: {item.price.value} {item.price.currency}</p>
          <img className='w-20' src={item.images} alt="" />
          <button className='text-5xl border-solid border-black border-4' onClick={() => removeFromCart(index)}>X</button>
        </div>
      ))}
    </div>
    {cartItems.length === 0 && <p>Der Warenkorb ist leer.</p>}
  </div>
);
};

export default Warenkorb;
