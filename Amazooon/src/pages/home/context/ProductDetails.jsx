import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import ReactImageZoom from "react-image-zoom";
import { useCart } from "./CartContext";

function ProductDetails() {
  const [cartItems, setCartItems] = useState([]);
  const { json } = useProductContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const selectedProduct = json.products.find(
    (product) => product.id.toString() === id
  );
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };
  const getRandomProducts = () => {
    const allProducts = json.products.filter(
      (product) => product.category === selectedProduct.category
    );
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

  React.useEffect(() => {
    if (!selectedProduct) {
      navigate("/");
    }
  }, [selectedProduct, navigate]);

  if (!selectedProduct) {
    return (
      <div className="text-white text-center p-5">
        <p>Produkt nicht gefunden.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-5 py-2 px-4 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Zurück zur Startseite
        </button>
      </div>
    );
  }
  return (
    <div className="h-full mt-12">
      <div className="flex flex-wrap justify-center items-start gap-5">
        <div className="max-w-sm ">
          <ReactImageZoom
            width={150}
            zoomWidth={500}
            imgWidth={400}
            imgHeight={400}
            scale={1}
            zoomStyle={"background-color: rgba(0,0,0,0.5)"}
            zoomLensStyle={"background-color: rgba(0,0,0,0.1)"}
            img={selectedProduct.images[0]}
            alt={selectedProduct.title}
          />
        </div>
        <div className="max-w-xl flex-1 border-l-4 border-gray-900 px-3">
          <h2 className="text-2xl mb-7">{selectedProduct.title}</h2>
          <p>
            <span className="font-bold">Kategorie:</span>{" "}
            <Link
              to={`/${selectedProduct.category}`}
              className="underline underline-offset-1"
            >
              {selectedProduct.category}
            </Link>
          </p>
          <p>
            <span className="font-bold">Marke:</span> {selectedProduct.brand}
          </p>
          <p>
            <span className="font-bold">Bewertung:</span>{" "}
            {renderRatingStars(selectedProduct.rating.value)}
            {selectedProduct.rating.value} ({selectedProduct.rating.count})
          </p>
          <hr className="mt-5" />
          <p className="text-xl text-amber-600">
            {selectedProduct.price.value} {selectedProduct.price.currency}
          </p>

          <p className="font-bold mt-5">About this item</p>
          <ul className="mt-4">
            {selectedProduct.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="max-w-sm border border-gray-800 rounded p-5">
          <p className="font-bold">Buy new:</p>
          <p className="text-xl text-amber-600">
            <span style={{ textDecoration: "line-through" }}>
              {selectedProduct.price.value} {selectedProduct.price.currency}
            </span>
            {" / "}
            <span>
              {(selectedProduct.price.value * 0.5).toFixed(2)}{" "}
              {selectedProduct.price.currency}
            </span>
          </p>
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
          <p></p>
          <hr />
          <p className="text-lg mt-2">{selectedProduct.title}</p>
          <p className="text-sm mt-2">
            {renderRatingStars(selectedProduct.rating.value)}
            {selectedProduct.rating.value} ({selectedProduct.rating.count})
          </p>
          <p className="text-sm mt-2">Verfügbarkeit: Auf Lager</p>
          <p className="text-sm mt-2">Lieferung: 3-5 Tage</p>
          <p className="text-sm mt-2">Verkauft von: {selectedProduct.brand}</p>
          <p className="text-sm mt-2">
            <span className="font-bold">In Stock:</span>
            <select
              className="inline-block border border-gray-300 rounded-md px-2 py-1 ml-2"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </p>

          <button className="bg-amber-600 mt-5 py-2 px-4 text-white rounded hover:bg-blue-700 transition duration-300">
            In den Einkaufswagen
          </button>
        </div>
      </div>
      ;
      <div className="mx-3">
        <h2 className="text-2xl mt-10 mb-5 ml-3">Ähnliche Produkte</h2>
        <div className="flex flex-wrap justify-evenly gap-5">
          {getRandomProducts().map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-rating">
                {renderRatingStars(product.rating.value)}
                {product.rating.value} ({product.rating.count})
              </p>
              <p className="product-price">
                {product.price.value} {product.price.currency}
              </p>
              <button
                className="product__button"
                onClick={() => navigate(`/${product.category}/${product.id}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-3">
        <h2 className="text-2xl mt-10 mb-5 ml-3">Bewertungen und Kommentare</h2>
        <div className="flex flex-col m-2 ">
          <input
            type="text"
            className="bg-slate-200 p-2 rounded mb-2"
            placeholder="Name eingeben..."
          />
          <textarea
            placeholder="kommentar schreiben..."
            className="bg-slate-200 p-2 rounded"
            rows="5"
            cols="50"
          />
          <button className="mt-5 py-2 px-4 text-black rounded-full bg-amber-600 hover:bg-[#f0c14b] transition duration-300">
            Senden
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-10 mb-5 ml-3">Kommentare</h2>
        <div className="flex flex-col m-2">
          <div className="flex flex-col m-2">
            <p className="text-lg">Max Mustermann</p>
            <p className="text-sm">vor 3 Tagen</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis, justo auctor ultricies.
            </p>
          </div>
          <div className="flex flex-col m-2">
            <p className="text-lg">Max Mustermann</p>
            <p className="text-sm">vor 3 Tagen</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis, justo auctor ultricies.
            </p>
          </div>
          <div className="flex flex-col m-2">
            <p className="text-lg">Max Mustermann</p>
            <p className="text-sm">vor 3 Tagen</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis, justo auctor ultricies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
