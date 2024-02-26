import React, { useState, useEffect } from 'react';
import db from '../database/db.json';
import { Link } from 'react-router-dom';

const Warenkorbhinzu = () => {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); 

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <>
      <Link to="/wkt">Zeig Korb</Link>
      {db.products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price.value} {product.price.currency}</p>
          <img src={product.images} alt="" />
          <button className='m-3 bg-red border-2 border-red-600' onClick={() => addToCart(product)}>
            Add to Warenkorb
          </button>
        </div>
      ))}
    </>
  );
};

export default Warenkorbhinzu;
