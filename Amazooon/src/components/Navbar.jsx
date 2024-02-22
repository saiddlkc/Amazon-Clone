import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Img from "../images/logo-transparent-png.png";
import { FiChevronDown } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const dropdownItems = [
    { label: "Amazon Basics", url: "/" },
    { label: "Neuheiten", url: "/" },
    { label: "Geschenkideen", url: "/" },
    { label: "Gutscheine", url: "/" },
    { label: "Prime", url: "/" },
    { label: "Kundenkonto", url: "/" },
    { label: "Bestseller", url: "/" },
    { label: "Küche", url: "/" },
    { label: "Beauty", url: "/" },
    { label: "Baby", url: "/" },
    { label: "Handmade", url: "/" },
    { label: "Amazon Basics", url: "/" },
    { label: "Neuheiten", url: "/" },
    { label: "Geschenkideen", url: "/" },
    { label: "Gutscheine", url: "/" },
  ];

  const menu = [
    { name: "Top Angebot", to: "/" },
    { name: "  Angebot der Woche", to: "/" },
    { name: "   Besteller in Bücher", to: "/" },
    { name: "Heute's Deals", to: "/" },
    { name: "   Bestseller in Elektronik", to: "/" },
    { name: "  Unsere Besteller-Angebote für dich", to: "/" },
  ];

  return (
    <nav className="bg-amazon-yellow">
      <div className="mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center">
          <a href="/" className="text-white text-xl font-bold">
            <img className="w-24" src={Img} alt="Amazon Logo" />
          </a>
        </div>

        {/* Hauptmenü für größere Bildschirme */}
        <div className="hidden w-full lg:flex items-center px-0 justify-between">
          <div className="flex justify-center items-center">
            <LuMapPin />
            <div className="p-4">
              <p>Lieferung an Mustermann</p>
              <h3>12463 Berlin</h3>
            </div>
          </div>
          {/* Suchleiste */}
          <div className="px-20 py-5 w-full   flex justify-stretch items-center">
            <button className="px-4 py-2 rounded-l-md bg-gray-200 text-black flex justify-center items-center">
              <p className="mr-2"> All</p>
              <FiChevronDown />
            </button>
            <input
              type="text"
              placeholder="Suche Amazooon.de"
              className="px-2 py-2 w-full bg-white text-black focus:outline-none"
            />
            <button className="bg-orange-300 px-5 py-3  rounded-r-md hover:bg-orange-400">
              <FiSearch className="text-white" />
            </button>
          </div>

          {/* Konto und Liste */}
          <div className=" flex">
            <div>
              <p>Hallo, ...</p>
              <span className="text-xs">Konto und Liste</span>
            </div>
          </div>
          {/* Warenkorb */}
          <div className="relative">
            <button
              className="flex items-center bg-amazon-dark px-2 py-2 rounded-md hover:bg-orange-400"
              onClick={() => addToCart({ label: "Artikel 1", price: 10 })}
            >
              <FiShoppingCart className="text-white" />
              <span className="text-white ml-1">
                Warenkorb ({cartItems.length})
              </span>
            </button>
          </div>
        </div>

        {/* Menüschalter für kleinere Bildschirme */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown-Menü für kleinere Bildschirme */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 right-0 w-full z-10  bg-gray-800">
            <div className="flex flex-col items-center py-4">
              <button
                className="flex items-center bg-amazon-dark px-4 py-2 rounded-md hover:bg-amazon-orange"
                onClick={() => addToCart({ label: "Artikel 1", price: 10 })}
              >
                <FiShoppingCart className="text-white" />
                <span className="text-white ml-1">
                  Warenkorb ({cartItems.length})
                </span>
              </button>
              <div className="px-5 py-5 flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Suche Amazon.de"
                  className="px-5 py-2 bg-white text-black rounded-l-md focus:outline-none"
                />
                <button className="bg-gray-500 px-5 py-3  rounded-r-md hover:bg-orange-400">
                  <FiSearch className="text-white" />
                </button>
              </div>

              {dropdownItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                  {item.label}
                </a>
              ))}
              {/* <div className="flex justify-center items-center flex-col">
                {menu.map((navb) => (
                  <div>
                    <button className="bg-red-400 rounded-sm px-5 py-2 m-3">
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="   hover:text-white"
                      >
                        {navb.name}
                      </a>
                    </button>
                  </div>
                ))}
              </div> */}

              <div className="flex justify-center items-center flex-col">
                <div>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2 m-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      {" "}
                      Top Angebot
                    </a>
                  </button>
                  <button className="bg-red-400 rounded-sm hover:bg-red-500 px-5 py-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      {" "}
                      Angebot der Woche
                    </a>
                  </button>
                </div>

                <div>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2 m-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      {" "}
                      Besteller in Bücher
                    </a>
                  </button>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      {" "}
                      Bestseller in Elektronik
                    </a>
                  </button>
                </div>
                <div>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Unsere Besteller-Angebote für dich
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
