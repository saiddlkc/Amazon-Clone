import React, { useState, useEffect } from 'react';

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
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price.value, 0);
  };
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
        <div key={index} className="border-solid border-red-500 border-4 m-3 p-3">
          <p>ID: {item.id}</p>
          <p>Name: {item.title}</p>
          <p>Preis: {item.price.value} {item.price.currency}</p>
          <img className='w-20' src={item.images} alt="" />
          <button className='p-1 text-xl border-solid border-black border-2 bg-red-600 text-white mt-5' onClick={() => removeFromCart(index)}>Entfernen</button>
        </div>
      ))}
    </div>
    {cartItems.length === 0 && <p>Der Warenkorb ist leer.</p>}
    <div className='ml-1'>
    <p>RabattCode</p>
     <input type="text"className="border-black border-2  "/>
     <button className='border-black border-2'>GO</button>
    <p>Gesamtsumme: {calculateTotalPrice()} Euro</p>
     </div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3'>Bestellen</button>
  </div>
);
};

export default Warenkorb;
