import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { ProductProvider } from "./ProductContext";

function Home() {
  return (
    <ProductProvider>
      <div>
        <ProductList />
        <ProductDetails />
      </div>
    </ProductProvider>
  );
}

export default Home;
