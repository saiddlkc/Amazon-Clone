import React from "react";
import json from "../../database/db.json";
import "./ProductList.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Angebot = () => {
  const allProducts = json.products;

  const getRandomProducts = (products, count) => {
    const randomProducts = [];
    const totalProductCount = products.length;

    if (totalProductCount <= count) {
      return products;
    }

    while (randomProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * totalProductCount);
      const randomProduct = products[randomIndex];
      if (!randomProducts.some((product) => product.id === randomProduct.id)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  return (
    <>
      <div>
        <h2 className="product-name">Unsere Bestseller-Angebote für dich</h2>
        <div className="product-container rabatt">
          {getRandomProducts(allProducts, 4).map((product) => (
            <div key={product.id} className="product-item">
              <img
                className="product-image"
                src={product.images[0]}
                alt={product.title}
              />
              <h3 className="product-title">{product.title}</h3>
              <p
                style={{
                  backgroundColor: "#CC0C39",
                  color: "#fff",
                  display: "inline-block",
                  padding: "5px",
                  textAlign: "left",
                  margin: "0",
                }}
              >
                Bis zu 50% Rabatt
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
              <div className="flex">
                <button
                  className="product__button"
                  onClick={() => showProductDetails(product)}
                >
                  <Link to={`/${product.category}/${product.id}`}>
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
      </div>
    </>
  );
};

export default Angebot;
