import React from "react";
import { useProductContext } from "./ProductContext";

function ProductDetails() {
  const { selectedProduct } = useProductContext();

  return (
    <div>
      {selectedProduct && (
        <div>
          <h2>{selectedProduct.title}</h2>
          <p>Fiyat: {selectedProduct.price} €</p>
          <p>Derecelendirme: {selectedProduct.rating}</p>
          <p>Yorum Sayısı: {selectedProduct.reviews}</p>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
