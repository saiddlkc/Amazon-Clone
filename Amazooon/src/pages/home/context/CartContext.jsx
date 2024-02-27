import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const increaseCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  const decreaseCartCount = () => {
    setCartCount((prevCount) => prevCount - 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, increaseCartCount,decreaseCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
