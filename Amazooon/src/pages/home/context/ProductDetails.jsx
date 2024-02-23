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
  const { increaseCartCount } = useCart();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
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
      quantity: selectedQuantity // Hier wird die ausgewählte Menge hinzugefügt
    };
  
    const storedCartItems = localStorage.getItem('cartItems');
    let updatedCartItems = [];
    if (storedCartItems) {
      updatedCartItems = JSON.parse(storedCartItems);
    }
    increaseCartCount();
    updatedCartItems.push(cartItem); 
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); 

    // Hier wird die Anzahl der Artikel im Warenkorb aktualisiert
    localStorage.setItem('cartN', updatedCartItems.length.toString());
  };

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
        <div className="max-w-sm">
          <ReactImageZoom
            width={200}
            height={200}
            zoomWidth={500}
            zoomHeight={500}
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
            <span className="font-bold">Preis:</span>{" "}
            {selectedProduct.price.value} {selectedProduct.price.currency}
          </p>
          <p>
            <span className="font-bold">Bewertung:</span>{" "}
            {renderRatingStars(selectedProduct.rating.value)}
            {selectedProduct.rating.value} ({selectedProduct.rating.count})
          </p>
          <hr className="mt-5" />
          <p className="font-bold mt-10">About this item</p>
          <ul className="mt-4">
            {selectedProduct.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="max-w-sm border border-gray-800 rounded p-5">
          <p className="text-xl">
            {selectedProduct.price.value} {selectedProduct.price.currency}
          </p>
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

          <button onClick={addtoStorage} className="bg-amber-600 mt-5 py-2 px-4 text-white rounded hover:bg-blue-700 transition duration-300">
            In den Einkaufswagen
          </button>
        </div>
      </div>
      ;
      <div>
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
      <div className="bg-slate-500 mx-5 my-5 p-5 rounded-lg">
        <div className="flex flex-col m-2 ">
          <textarea
            placeholder="kommentar schreiben..."
            className="bg-slate-200 p-2 rounded"
            rows="5"
            cols="50"
          />
          <button className="mt-5 py-2 px-4 text-white rounded bg-amber-600 hover:bg-blue-700 transition duration-300">
            Senden
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
