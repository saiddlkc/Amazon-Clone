import React, { createContext, useContext, useState } from "react";
import { products } from "../../database/products";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{ products, selectedProduct, showProductDetails }}
    >
      {children}
    </ProductContext.Provider>
  );
};
