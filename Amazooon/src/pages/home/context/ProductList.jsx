import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import { FiShoppingCart } from "react-icons/fi";
import "../ProductList.css";

const ProductList = () => {
  const { json, showProductDetails } = useProductContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);
    }
  }, []);

  const addtoStorage = () => {
    const cartItem = {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      images: selectedProduct.images,
      quantity: selectedQuantity, // Hier wird die ausgewählte Menge hinzugefügt
    };

    const storedCartItems = localStorage.getItem("cartItems");
    let updatedCartItems = [];
    if (storedCartItems) {
      updatedCartItems = JSON.parse(storedCartItems);
    }
    increaseCartCount();
    updatedCartItems.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Hier wird die Anzahl der Artikel im Warenkorb aktualisiert
    localStorage.setItem("cartN", updatedCartItems.length.toString());
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const getRandomProducts = () => {
    const allProducts = json.products;
    const randomProducts = [];
    while (
      randomProducts.length < 4 &&
      randomProducts.length < allProducts.length
    ) {
      const randomIndex = Math.floor(Math.random() * allProducts.length);
      const randomProduct = allProducts[randomIndex];
      if (!randomProducts.some((product) => product.id === randomProduct.id)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  return (
    <div className="product-container">
      {getRandomProducts().map((product) => (
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
            <p>
              <Link to={`/${product.category}`}>View Category</Link>
            </p>
          </div>
          <div className="flex">
            <button
              className="product__button"
              onClick={() => showProductDetails(product)}
            >
              <Link to={`/${product.category}/${product.id}`}>
                View Details
              </Link>
            </button>
            <button onClick={addtoStorage} className=" product__button-korb">
              <FiShoppingCart className="cart-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
