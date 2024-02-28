import React, { useState } from "react";
import json from "../../database/db.json";
import "./ProductList.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const ProductList = () => {
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const [visibleProducts, setVisibleProducts] = useState({});

  const productsByCategory = {};
  json.products.forEach((product) => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  });

  const handleShowMore = (category) => {
    const currentCount = visibleProducts[category] || 4;
    setVisibleProducts({
      ...visibleProducts,
      [category]: currentCount + 4,
    });
  };

  return (
    <div>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h2 className="product-name">
            {category}
            <Link
              to={`/${category}`}
              className="text-lg p-2 underline text-amber-600 flex justify-center item-end"
            >
              Alle anzeigen
            </Link>
          </h2>
          <div className="product-container">
            {productsByCategory[category]
              .slice(0, visibleProducts[category] || 4)
              .map((product) => (
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
                  <div className="flex">
                    <button
                      className="product__button"
                      onClick={() => showProductDetails(product)}
                    >
                      <Link to={`/${product.category}/${product.id}`}>
                        {" "}
                        View Details
                      </Link>
                    </button>
                    <button className="product__button-korb">
                      <FiShoppingCart className="cart-icon" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center item-center">
            {productsByCategory[category].length >
              (visibleProducts[category] || 4) && (
              <button
                className="product__button"
                onClick={() => handleShowMore(category)}
              >
                Mehr Produkte anzeigen
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
