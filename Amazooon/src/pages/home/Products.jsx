import React from "react";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";
import ProductDetails from "./ProductDetails";

function Products() {
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
      <div>
        <ProductDetails />
      </div>
    </ProductProvider>
  );
}

export default Products;