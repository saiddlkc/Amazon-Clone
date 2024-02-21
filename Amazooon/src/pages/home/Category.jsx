import React from "react";
import json from "../../database/db.json";
import "./ProductList.css";

const ProductList = () => {
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const productsByCategory = {};
  json.products.forEach((product) => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  });

  return (
    <div>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h2 className="product-name">{category}</h2>
          <div className="product-container">
            {productsByCategory[category].map((product) => (
              <div key={product.id} className="product-item">
                <img
                  className="product-image"
                  src={product.images[0]}
                  alt={product.title}
                />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-rating">
                  {renderRatingStars(product.rating.value)}
                  {product.rating.value} ({product.rating.count})
                </p>
                <p className="product-price">
                  {product.price.value} {product.price.currency}
                </p>
                <button
                  className="product__button"
                  onClick={() => showProductDetails(product)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
