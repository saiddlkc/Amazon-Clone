import React from "react";
import json from "../../database/db.json";
import "./ProductList.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "./context/CartContext";
import { useState, useEffect } from "react";

const Angebot = () => {
  const allProducts = json.products;
  const [cartItems, setCartItems] = useState([]);
  const { increaseCartCount } = useCart();

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartN", cartItems.length.toString());
  }, [cartItems]);

  const addtoStorage = (product) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      images: product.images,
    };
    increaseCartCount();
    const storedCartItems = localStorage.getItem("cartItems");
    let updatedCartItems = [];
    if (storedCartItems) {
      updatedCartItems = JSON.parse(storedCartItems);
    }
    updatedCartItems.push(cartItem);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

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
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
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
              <div className="flex">
                <button
                  className="product__button"
                  onClick={() => showProductDetails(product)}
                >
                  <Link to={`/${product.category}/${product.id}`}>
                    View Details
                  </Link>
                </button>
                <button
                  onClick={() => {
                    addtoStorage(product);
                    localStorage.setItem("cartN", cartItems.length.toString());
                  }}
                  className="product__button-korb"
                >
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
