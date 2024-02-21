import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import "../ProductDetails.css";

function ProductDetails() {
  const { json } = useProductContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProduct = json.products.find(
    (product) => product.id.toString() === id
  );

  React.useEffect(() => {
    if (!selectedProduct) {
      navigate("/");
    }
  }, [selectedProduct, navigate]);

  if (!selectedProduct) {
    return (
      <div className="bg-slate-600 text-white text-center p-5">
        <p>Produkt nicht gefunden.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Zur Startseite zurückkehren
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-600">
      <div className="product-details-container">
        <div className="product-image">
          <img src={selectedProduct.images[0]} alt={selectedProduct.title} />
        </div>
        <div className="product-info">
          <h2>{selectedProduct.title}</h2>
          <p>Category: {selectedProduct.category}</p>
          <p>Brand: {selectedProduct.brand}</p>
          <p>
            Price: {selectedProduct.price.value}{" "}
            {selectedProduct.price.currency}
          </p>
          <p>Rating: {selectedProduct.rating.value}</p>
          <p>Rating count: {selectedProduct.rating.count}</p>
          <ul>
            {selectedProduct.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
