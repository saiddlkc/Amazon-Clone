import React from "react";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";

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
