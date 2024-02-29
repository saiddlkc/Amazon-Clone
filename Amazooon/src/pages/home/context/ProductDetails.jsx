import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import ReactImageZoom from "react-image-zoom";
import { useCart } from "./CartContext";
import { FaCircleUser } from "react-icons/fa6";

function ProductDetails() {
  const [cartItems, setCartItems] = useState([]);
  const { json } = useProductContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { increaseCartCount } = useCart();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrorMessage("");
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setErrorMessage("");
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setErrorMessage("Bitte füllen Sie alle Felder aus.");
      return;
    }
    const newComment = { name, comment, productId: id };
    try {
      const response = await fetch(`http://localhost:3004/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        console.log("ok");
      } else {
        console.error("Fehler beim Hinzufügen des Kommentars");
      }
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Kommentars", error);
    }
  };
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:3004/comments/?productId=${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error("Fehler beim Laden der Kommentare");
      }
    } catch (error) {
      console.error("Fehler beim Laden der Kommentare", error);
    }
  };

  useEffect(() => {
    fetchComments();
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
      quantity: selectedQuantity,
    };

    const storedCartItems = localStorage.getItem("cartItems");
    let updatedCartItems = [];
    if (storedCartItems) {
      updatedCartItems = JSON.parse(storedCartItems);
    }
    increaseCartCount();
    updatedCartItems.push(cartItem);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartN", updatedCartItems.length.toString());
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
    fetchComments();
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
            <span>
              {selectedProduct.price.value} {selectedProduct.price.currency}
            </span>
          </p>
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
          <button
            onClick={addtoStorage}
            className="block bg-[#FFA41B] mt-5 py-2 px-4 text-white rounded-full hover:bg-[#FFD815] transition duration-300"
          >
            <Link to={`/wk`}>Buy Now</Link>
          </button>
          <button
            onClick={addtoStorage}
            className="bg-[#FFD815] mt-5 py-2 px-4 text-black rounded-full hover:bg-[#FFA41B] transition duration-300"
          >
            In den Einkaufswagen
          </button>
        </div>
      </div>

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
                onClick={() => {
                  navigate(`/${product.category}/${product.id}`);
                }}
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
            value={name}
            onChange={handleNameChange}
          />
          <textarea
            placeholder="kommentar schreiben..."
            className="bg-slate-200 p-2 rounded"
            rows="5"
            cols="50"
            value={comment}
            onChange={handleCommentChange}
          />
          {errorMessage && (
            <p className="text-red-600  font-semibold tracking-wide flex items-center gap-2">
              {errorMessage}
            </p>
          )}
          <button
            onClick={addComment}
            className="mt-5 py-2 px-4 text-black rounded-full bg-amber-600 hover:bg-[#f0c14b] transition duration-300"
          >
            Senden
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl mt-10 mb-5 ml-5 bg-white">
          Kommentare von anderen Kunden
        </h2>
        <div className="flex flex-row m-2 flex-wrap">
          {comments.length === 0 ? (
            <p className="text-lg opacity-70 ml-5">Überraschend leer hier...</p>
          ) : (
            comments.reverse().map((comment, index) => (
              <div
                key={index}
                className="flex flex-col m-2 border-2 border-slate-500 p-2 ml-5 w-full bg-[#ebdaadcf]"
              >
                <button className="text-lg opacity-70 font-bold flex p-1">
                  <FaCircleUser className="m-1 text-black text-2xl" />{" "}
                  {comment.name}
                </button>
                <p className="text-sm">{comment.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
