import React from "react";
import json from "../../database/db.json";
import "../home/ProductList.css";
import "../home/ProductList.css";
import { FiShoppingCart } from "react-icons/fi";

const ProductList = () => {
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const camerasProducts = json.products.filter(
    (product) => product.category === "Spiele"
  );

  return (
    <div>
      <h2 className="product-name">Spiele</h2>
      <div className="product-container">
        {camerasProducts.map((product) => (
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
            <p className="product-category">Category: {product.category}</p>
            <div className="flex">
              <button
                className="product__button"
                onClick={() => showProductDetails(product)}
              >
                View Details
              </button>
              <button className=" product__button-korb">
                <FiShoppingCart className="cart-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
