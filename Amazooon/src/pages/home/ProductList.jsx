import React from "react";
import { useProductContext } from "./ProductContext";
import "./ProductList.css";

function ProductList() {
  const { json, showProductDetails } = useProductContext();

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <>
      <div className="product-container">
        {json.Cameras.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-rating">
                {renderRatingStars(product.rating.value)}
                {product.rating.value} ({product.rating.count})
              </p>
              <p className="product-price">
                {product.price.value} {product.price.currency}
              </p>
            </div>
            <button
              className="product__button"
              onClick={() => showProductDetails(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
