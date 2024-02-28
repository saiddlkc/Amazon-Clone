import React from "react";
import json from "../../database/db.json";
import "../home/ProductList.css";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../home/context/CartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
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
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const camerasProducts = json.products.filter(
    (product) => product.category === "Cameras"
  );

  return (
    <div>
      <h2 className="product-name">Cameras</h2>
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
  );
};

export default ProductList;
