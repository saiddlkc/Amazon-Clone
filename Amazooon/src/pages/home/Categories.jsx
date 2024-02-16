import React from "react";
import { products } from "../../database/products";
import "./ProductList.css";

const Main = () => {
  const randomProducts = [];
  while (randomProducts.length < 4) {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];
    if (!randomProducts.some((product) => product.id === randomProduct.id)) {
      randomProducts.push(randomProduct);
    }
  }
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <>
      <h2 className="product-name">Category</h2>
      <div className="product-container">
        {randomProducts.map((product) => (
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
              <span style={{ textDecoration: "line-through" }}>
                {product.price.value} {product.price.currency}
              </span>{" "}
              <span>
                {(product.price.value * 0.5).toFixed(2)}{" "}
                {product.price.currency}
              </span>
            </p>
            <button
              className="product__button"
              onClick={() => showProductDetails(product)}
            >
              Add to basket
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
