import React, { useState, useEffect } from "react";
import "./ProductList.css";

const Category = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const allProducts = Object.values(data).flat();
        const shuffledProducts = shuffleArray(allProducts);
        const randomProducts = shuffledProducts.slice(0, 4);
        setRandomProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

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
            <button className="product__button">Add to basket</button>
          </div>
        ))}
      </div>
    </>
  );
};

// Diziyi karıştırmak için kullanılacak yardımcı fonksiyon
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Category;
