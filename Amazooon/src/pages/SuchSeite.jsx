import React, { useState } from "react";
import jsonData from "../database/db.json";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="w-1/4 mb-4 px-4">
      <div className="border border-gray-300 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-center py-4 border-b border-gray-300">
          {product.title}
        </h2>
        <p className="text-sm text-gray-600 px-4 py-2">
          Category: {product.category}
        </p>
        <p className="text-sm text-gray-600 px-4 py-2">
          Price: {product.price.currency} {product.price.value}
        </p>
        <img
          className="w-full h-48 object-contain cursor-pointer"
          src={product.images[0]}
          alt={product.title}
        />
        <p className="text-sm text-gray-600 px-4 py-2">
          Rating: {product.rating.value} ({product.rating.count} reviews)
        </p>
        <div className="flex justify-evenly mb-3">
          <button
            className="product__button"
            onClick={() => showProductDetails(product)}
          >
            <Link to={`/${product.category}/${product.id}`}>View Details</Link>
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
    </div>
  );
}

function Suchen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = jsonData.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div class="flex justify-center m-5">
        <div class="w-96 flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            class="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleSearch}
            class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-r-md"
          >
            Search
          </button>
        </div>
      </div>

      <div>
        {searchResults.length > 0 ? (
          <div className="flex flex-wrap">
            {searchResults.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Suchen;
