import React from "react";
import { Link } from "react-router-dom"; // Link ekledik
import json from "../../database/data.json";
import "./ProductList.css";

const Cameras = () => {
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  // Ürün detaylarını göstermek için ayrı bir bileşen
  const ProductDetails = ({ product }) => {
    return (
      <div>
        <h2>{product.title}</h2>
        <p>Price: {product.price.value} {product.price.currency}</p>
        <p>Rating: {renderRatingStars(product.rating.value)}</p>
        {/* Diğer ürün detaylarını buraya ekleyebilirsiniz */}
      </div>
    );
  };

  return (
    <div>
      {Object.keys(json).map((category, index) => (
        <div key={index} className="category-container">
          <h2 className="category-title">{category}</h2>
          <div className="product-container">
            {json[category].map((product) => (
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
                {/* Ürün detaylarına Link ekledik */}
                <Link to={`/products/${product.id}`} className="product__button">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cameras;
