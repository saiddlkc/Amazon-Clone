import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../pages/home/context/CartContext";

const Warenkorb = () => {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const { decreaseCartCount } = useCart();

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartN", updatedCartItems.length.toString());
    decreaseCartCount();
  };

  useEffect(() => {
    localStorage.setItem("cartN", cartItems.length.toString());
  }, [cartItems]);

  const calculateShippingCost = () => {
    let shippingCost = 0;
    if (discountCode !== "#DCI-2024") {
      shippingCost = 10;
    }
    return shippingCost;
  };

  const calculateTotalPrice = () => {
    let totalPrice = cartItems.reduce(
      (total, item) => total + item.price.value,
      0
    );

    let discountedPrice = totalPrice;
    if (discountCode === "#DCI-2024") {
      discountedPrice *= 0.85;
    }
    return {
      original: totalPrice.toFixed(2),
      discounted: discountedPrice.toFixed(2),
    };
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems.reverse());
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-7 mt-4 pl-5">Warenkorb</h2>
      <div className="w-full flex flex-wrap justify-evenly">
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="m-5 w-full">
              <div className="w-full flex flex-wrap justify-between item-center border p-2">
                <div>
                  <img className="w-20" src={item.images} alt="" />
                </div>
                <div className="ml-9 border-l-2 border-amber-700 pl-5">
                  <p className=" w-30 text-2xl mb-2">{item.title}</p>
                </div>
                <div className="pl-8 pt-6">
                  <p className="text-2xl text-amber-600">
                    {item.price.value} {item.price.currency}
                  </p>
                  <hr />
                </div>
                <div className="pt-3 pl-4">
                  <button
                    className="bg-red-700 hover:bg-[#FFA41B] text-white font-bold py-2 px-4 rounded m-3"
                    onClick={() => removeFromCart(index)}
                  >
                    Entfernen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="w-72 border p-4 bg-amber-100 flex flex-col justify-end items-center">
            <h2 className="mb-4 border-b-4 p-2">Ihre Bestellung aufgeben</h2>
            <p>
              Versandkosten:{" "}
              <span className="text-amber-600 text-lg">
                {calculateShippingCost()} €
              </span>
            </p>
            <hr />
            <p className="mt-3">Lieferdatum: 3-5 Tage</p>
            <hr />
            <p className="px-2 mt-5 font-bold">Zwischensumme:</p>
            <p className="px-5 mt-2 font-bold">
              <span className="text-amber-600 text-2xl">
                {(
                  parseFloat(calculateTotalPrice().discounted) +
                  calculateShippingCost()
                ).toFixed(2)}{" "}
                €
              </span>
            </p>
            <button className="bg-[#ffa41b] hover:bg-[#FFD815] text-black font-bold py-2 px-3 rounded mx-4 my-9">
              <Link to="/Order">Weiter zur Kasse</Link>
            </button>
          </div>
        )}
      </div>
      <div>
        {cartItems.length === 0 && (
          <div className="m-60  flex justify-center items-center flex-col">
            <p className="text-2xl m-5">Der Warenkorb ist leer!</p>
            <button className="bg-[#ffa41b] hover:bg-[#FFD815] text-black font-bold py-2 px-4 rounded m-3">
              <Link to="/">Zurück zum Shop</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Warenkorb;
