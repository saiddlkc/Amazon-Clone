import React, { useEffect, useState } from "react";
import amzn from "../images/darkLogo.png";
import { useCart } from "../pages/home/context/CartContext";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
  const [cartItems, setCartItems] = useState([]);
  const { cartCount } = useCart();
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const N = localStorage.getItem("CartN");
  const [discountCode, setDiscountCode] = useState("");

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartN", updatedCartItems.length.toString());
  };
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
    localStorage.setItem("cartN", cartItems.length.toString());
  }, [cartItems]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems.reverse());
    }
  }, []);
  return (
    <div className="m-auto container">
      <nav className="flex justify-evenly items-center  bg-gray-100 h-20 border-b-2 border-gray-300">
        <Link to={"/"}>
          <img className="w-32" src={amzn} alt="" />
        </Link>
        <h1 className="text-2xl font-semibold">
          Deine Bestellung. (
          <span className="text-[#427185]">{cartItems.length} Artikel </span>){" "}
        </h1>
        <FaLock className="text-gray-500 text-2xl " />
      </nav>
      <div className="flex gap-20 mx-28  ">
        <div>
          <div className="flex gap-20 border-b-4 border-gray-400 pb-5 ">
            <div>
              <h3 className="py-2 font-bold ">1. Versandadresse </h3>
              <div className="flex justify-between">
                <div className="flex flex-col w-72 ">
                  <input
                    className="border-2 border-black rounded-md m-1 p-1"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="border-2 border-black rounded-md m-1 p-1"
                    type="text"
                    placeholder="Addresse..."
                  />
                  <input
                    className="border-2 border-black rounded-md m-1 p-1"
                    type="text"
                    placeholder="Stadt PLZ"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="py-2 font-bold ">2. Zahlungsart</h3>
              <div className="flex flex-col w-72">
                <select
                  className="border-2 border-black rounded-md m-1 p-1"
                  name=""
                  id=""
                >
                  <option value="">Bezahlen mit...</option>
                  <option value="">Paypal</option>
                  <option value="">Klarna</option>
                  <option value="">Rechnung</option>
                  <option value="">Sofortüberweisung</option>
                  <option value="">Paysafecard</option>
                </select>
                <input
                  className="border-2 border-black rounded-md m-1 p-1"
                  type="email"
                  placeholder="Email für Zahlungsvorgang"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="py-2 font-bold ">
              3. Artikel und Versand überprüfen
            </h3>
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="m-5 w-full">
                  <div className="w-full flex flex-wrap justify-between item-center border p-2">
                    <div>
                      <img className="w-10" src={item.images} alt="" />
                    </div>
                    <div className="ml-9 pl-5">
                      <p className=" w-28 text-xl mb-2">{item.title}</p>
                    </div>
                    <div className="pl-8 pt-1 ">
                      <p className="text-lg text-amber-600">
                        {item.price.value} {item.price.currency}
                      </p>
                      <hr />
                    </div>
                    <div className="pt-1 pl-4">
                      <button
                        className="bg-red-700 hover:bg-[#FFA41B] text-white font-bold py-1 px-2 rounded m-1"
                        onClick={() => removeFromCart(index)}
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {cartItems.length > 0 && (
            <div className="w-72 h- border p-4 bg-amber-100 ">
              <h2 className="mb-4 border-b-4 p-2">
                Ihre Bestellung abschliessen
              </h2>
              <div className="border rounded-xl p-3 bg-amber-300 my-5">
                <p>RabattCode:</p>
                <input
                  type="text"
                  className="border-2"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                {discountCode === "#DCI-2024" && (
                  <div>
                    <p className="bg-[#CC0C39] text-white inline-block p-1 mt-2">
                      Bis zu 15% Rabatt
                    </p>
                    <p className="mt-2 font-bold">Rabattierter Preis: </p>
                    <p className="font-bold">
                      <span className="text-amber-600 text-xl">
                        {calculateTotalPrice().discounted} €
                      </span>
                    </p>
                    <p className="mt-2 underline underline-offset-4">
                      <span className=" text-amber-600">Sie sparen: </span>
                      {(
                        calculateTotalPrice().original -
                        calculateTotalPrice().discounted
                      ).toFixed(2)}{" "}
                      €
                    </p>
                  </div>
                )}
              </div>
              <p>
                Versandkosten:{" "}
                <span className="text-amber-600 text-lg">
                  {calculateShippingCost()} €
                </span>
              </p>
              <hr />
              <p className="mt-3">Lieferdatum: 3-5 Tage</p>
              <hr />

              <p className="px-2 mt-5 font-bold">Gesamtsumme:</p>
              <p className="px-5 mt-2 font-bold">
                <span className="text-amber-600 text-2xl">
                  {(
                    parseFloat(calculateTotalPrice().discounted) +
                    calculateShippingCost()
                  ).toFixed(2)}{" "}
                  €
                </span>
              </p>
              <button className="bg-[#ffa41b] hover:bg-green-500 text-black font-bold p-3 rounded m-2">
                <Link to="/succes">Zahlungspflichtig bestellen</Link>
              </button>
              <button className="bg-[#ffa41b] hover:bg-red-600 text-black font-bold p-3 rounded m-2">
                <Link to="/">Zurück zum Shop</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
