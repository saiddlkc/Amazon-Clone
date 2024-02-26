import React, { useState, useEffect } from "react";

const Warenkorb = () => {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState("");

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
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
      <h2 className="text-2xl mb-7 mt-4">Warenkorb</h2>
      <div className="flex flex-wrap justify-evenly">
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="m-5 w-full">
              <div className="flex flex-wrap justify-between item-center border p-2">
                <div>
                  <img className="w-20" src={item.images} alt="" />
                </div>
                <div className="ml-9 border-l-2 border-amber-700 pl-5">
                  <p className=" w-32 text-2xl mb-2">{item.title}</p>
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
        <div className="border p-4 bg-amber-100 ">
          <h2 className="mb-4">Ihre Bestellung aufgeben</h2>
          <p>
            Versandkosten:{" "}
            <span className="text-amber-600 text-amber-600 text-2xl">
              {calculateShippingCost()} €
            </span>
          </p>
          <div className="border rounded-xl p-4 bg-amber-300 my-5">
            <p className="">RabattCode:</p>
            <input
              type="text"
              className="border-black border-2"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            {discountCode === "#DCI-2024" && (
              <div>
                <p className="bg-[#CC0C39] text-white inline-block p-2 mt-2">
                  Bis zu 15% Rabatt
                </p>
                <p className="mt-2 font-bold">
                  Rabattierter Preis:{" "}
                  <span className="text-amber-600 text-2xl">
                    {calculateTotalPrice().discounted} €
                  </span>
                </p>
              </div>
            )}
          </div>
          <p className="p-4 mt-7 font-bold">
            Gesamtsumme:{" "}
            <span className="text-amber-600 text-2xl">
              {(
                parseFloat(calculateTotalPrice().discounted) +
                calculateShippingCost()
              ).toFixed(2)}{" "}
              €
            </span>
          </p>
          <button className="bg-[#ffa41b] hover:bg-[#FFD815] text-black font-bold py-2 px-4 rounded m-3">
            Bestellen
          </button>
        </div>
      </div>
      <div>{cartItems.length === 0 && <p>Der Warenkorb ist leer.</p>}</div>
    </div>
  );
};

export default Warenkorb;
