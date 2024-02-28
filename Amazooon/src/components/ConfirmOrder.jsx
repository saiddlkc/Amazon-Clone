import React, { useEffect, useState } from 'react';
import amzn from "../images/darkLogo.png";
import { useCart } from '../pages/home/context/CartContext';
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ConfirmOrder = () => {
    const [cartItems, setCartItems] = useState([]);
    const { cartCount } = useCart();  
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const N=localStorage.getItem("CartN")
    const [discountCode, setDiscountCode] = useState("");

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems); 
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
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
        localStorage.setItem('cartN', cartItems.length.toString());
      }, [cartItems]);
      useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
          const parsedCartItems = JSON.parse(storedCartItems);
          setCartItems(parsedCartItems.reverse());
        }
      }, []); 
    return (
        <div className='m-auto container'>
            <nav className='flex justify-evenly items-center  bg-gray-100 h-20 border-b-2 border-gray-300'>
                <img className='w-32' src={amzn} alt="" />
                <h1 className='text-2xl font-semibold'>Deine Bestellung. (<span className='text-[#427185]'>{cartItems.length} Artikel </span>) </h1>
                <FaLock  className='text-gray-500 text-2xl '/>
            </nav>
            <div className='flex flex-col justify-between mx-4  '>
                <h3 className='py-2 font-bold '>1 Versandadresse </h3>
                <div className='flex flex-col w-72 '>
                <input className='border-2 border-black rounded-md m-1 p-1' type="text"placeholder='Name' />
                <input className='border-2 border-black rounded-md m-1 p-1'  type="text"placeholder='Addresse...' />
                <input className='border-2 border-black rounded-md m-1 p-1' type="text"placeholder='Stadt PLZ' />
                </div>
                <p className='border-t-2 border-gray-400 mt-6'></p>
                <h3 className='py-2 font-bold '>2 Zahlungsart</h3>
                <div className='flex flex-col w-72'>
                    <select className='border-2 border-black rounded-md m-1 p-1' name="" id="">
                    <option value="">Bezahlen mit...
                    </option>
                    <option value="">Paypal
                    </option>
                    <option value="">Klarna 
                    </option>
                    <option value="">Rechnung
                    </option>
                    <option value="">Sofortüberweisung
                    </option>
                    <option value="">Paysafecard
                    </option>
                    </select>
                    <input className='border-2 border-black rounded-md m-1 p-1' type="email"placeholder='Email für Zahlungsvorgang' />
                </div>
                <p className='border-t-2 border-gray-400 pb-3 mt-6'></p>
                <h3 className='py-2 font-bold '>3 Artikel und Versand überprüfen</h3>
                <div className='mr-4 flex flex-row flex-wrap '>
                    {cartItems.map((item, index) => (
                        <div key={index} className="m-5 ">
                        <div className="w-52 h-80 flex flex-wrap justify-between border p-2">
                            <div>
                            <img className="w-20" src={item.images} alt="" />
                            </div>
                            <div className="ml-9 border-l-2 border-amber-700 pl-5 overflow-hidden">
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
          <div className="w-72 border p-4 bg-amber-100 ">
            <h2 className="mb-4 border-b-4 p-2">Ihre Bestellung abschliessen</h2>
            {/* <p className="m-1">Der Empfänger:</p> */}
            <div className="border rounded-xl p-3 bg-amber-300 my-5">
              <p>RabattCode:</p>
              <input
                type="text"
                className="border border-2"
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
            {/* <p className="mt-7">Die Zahlungsmethode:</p>
            <select className="w-full border border-2">
              <option value="paypal">Paypal</option>
              <option value="creditcard">Kreditkarte</option>
              <option value="banktransfer">Überweisung</option>
            </select>
            <hr /> */}

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
            <button className="bg-[#ffa41b] hover:bg-[#FFD815] text-black font-bold p-3 rounded m-2">
            Zahlungspflichtig bestellen
            </button>
          </div>
        )}
                
            </div>
        </div>
    );
}

export default ConfirmOrder;
