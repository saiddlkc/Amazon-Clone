import React from "react";
import json from "../../database/data.json";
import "./ProductList.css";

const Angebot = () => {
  const categories = Object.keys(json);

  const getRandomProducts = (category, count) => {
    const products = json[category];
    const randomProducts = [];
    while (
      randomProducts.length < count &&
      randomProducts.length < products.length
    ) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];
      if (!randomProducts.some((product) => product.id === randomProduct.id)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="product-name">
            Unsere Bestseller-Angebote für dich - {category}
          </h2>
          <div className="product-container rabatt">
            {getRandomProducts(category, 4).map((product) => (
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
                <button
                  className="product__button"
                  onClick={() => showProductDetails(product)}
                >
                  Add to basket
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Angebot;
