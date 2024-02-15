import React from "react";
import { useProductContext } from "./ProductContext";
import "./ProductList.css";
function ProductList() {
  const { products, showProductDetails } = useProductContext();

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div
          key={index}
          className="product-item"
          onClick={() => showProductDetails(product)}
        >
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-rating">
              {renderRatingStars(product.rating)} ({product.reviews})
            </p>
            <p className="product-price">{product.price} €</p>
          </div>
          <button className="product__button">Add to basket</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
