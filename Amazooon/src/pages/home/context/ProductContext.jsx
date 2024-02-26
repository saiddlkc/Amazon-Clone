import React, { createContext, useContext, useState } from "react";
import jsonData from "../../../database/db.json";

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
      value={{ json: jsonData, selectedProduct, showProductDetails }}
    >
      {children}
    </ProductContext.Provider>
  );
};
