import React from "react";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";
import ProductDetails from "./ProductDetails";

function Pro() {
  return (
    <ProductProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default Pro;
