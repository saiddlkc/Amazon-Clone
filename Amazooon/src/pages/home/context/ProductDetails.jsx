import React from "react";
import { useProductContext } from "./ProductContext";
import "../ProductDetails.css";
function ProductDetails() {
  const { selectedProduct } = useProductContext();

  return (
    <div className="bg-slate-600">
      {selectedProduct && (
        <div className="product-details-container">
          <div className="product-image">
            <img src={selectedProduct.images[0]} alt={selectedProduct.title} />
          </div>
          <div className="product-info">
            <h2>{selectedProduct.title}</h2>
            <p>Category: {selectedProduct.category}</p>
            <p>Brand: {selectedProduct.brand}</p>
            <p>
              Price: {selectedProduct.price.value}{" "}
              {selectedProduct.price.currency}
            </p>
            <p>Rating: {selectedProduct.rating.value}</p>
            <p>Rating count: {selectedProduct.rating.count}</p>
            <ul>
              {selectedProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
