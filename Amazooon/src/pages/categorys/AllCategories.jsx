import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import json from "../../database/db.json";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../home/context/CartContext";

const AllCategories = () => {
  const [filterBy, setFilterBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState("default");
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(json.products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const filterProducts = (products) => {
    let filteredProducts = products;

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    switch (filterBy) {
      case "priceLowToHigh":
        return filteredProducts
          .slice()
          .sort((a, b) => a.price.value - b.price.value);
      case "priceHighToLow":
        return filteredProducts
          .slice()
          .sort((a, b) => b.price.value - a.price.value);
      default:
        return filteredProducts;
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  const sortByRatingHighToLow = (products) => {
    return products.slice().sort((a, b) => b.rating.value - a.rating.value);
  };

  const sortByRatingLowToHigh = (products) => {
    return products.slice().sort((a, b) => a.rating.value - b.rating.value);
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };

  const handlePriceSortChange = (e) => {
    const { value } = e.target;
    setFilterBy(value);
  };

  const handleRatingSortChange = (e) => {
    const { value } = e.target;
    setSelectedRating(value);
  };

  return (
    <div>
      <div className="m-5 border p-1 flex justify-evenly items-center bg-amber-600">
        <div className="flex">
          <p className="text-center text-lg mr-3">Category:</p>
          <select
            className="border px-3"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <p className="text-center text-lg mr-3">Price:</p>
          <select
            className="border px-3"
            value={filterBy}
            onChange={handlePriceSortChange}
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Low to High</option>
            <option value="priceHighToLow">High to Low</option>
          </select>
        </div>
        <div className="flex">
          <p className="text-center text-lg mr-3">Rating:</p>
          <select
            className="border px-3"
            value={selectedRating}
            onChange={handleRatingSortChange}
          >
            <option value="default">Default</option>
            <option value="ratingHighToLow">High to Low</option>
            <option value="ratingLowToHigh">Low to High</option>
          </select>
        </div>
      </div>

      <div className="product-container">
        {selectedRating === "ratingHighToLow"
          ? sortByRatingHighToLow(filterProducts(json.products)).map(
              (product) => (
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
                  <p className="product-category border p-1 text-right">
                    Category:{" "}
                    <Link
                      className="underline text-amber-700"
                      to={`/${product.category}`}
                    >
                      {product.category}
                    </Link>
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
                    <button
                      onClick={() => {
                        addtoStorage(product);
                        localStorage.setItem(
                          "cartN",
                          cartItems.length.toString()
                        );
                      }}
                      className="product__button-korb"
                    >
                      <FiShoppingCart className="cart-icon" />
                    </button>
                  </div>
                </div>
              )
            )
          : sortByRatingLowToHigh(filterProducts(json.products)).map(
              (product) => (
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
                  <p className="product-category border p-1 text-right">
                    Category:{" "}
                    <Link
                      className="underline text-amber-700"
                      to={`/${product.category}`}
                    >
                      {product.category}
                    </Link>
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
                    <button
                      onClick={() => {
                        addtoStorage(product);
                        localStorage.setItem(
                          "cartN",
                          cartItems.length.toString()
                        );
                      }}
                      className="product__button-korb"
                    >
                      <FiShoppingCart className="cart-icon" />
                    </button>
                  </div>
                </div>
              )
            )}
      </div>
    </div>
  );
};

export default AllCategories;
