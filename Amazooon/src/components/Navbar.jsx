import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Img from "../images/logo-transparent-png.png";
import amzn from "../images/amazooon.png";
import { LuMapPin } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import "./logout.css";
import { useCart } from "../pages/home/context/CartContext";
import Suchen from "../pages/SuchSeite";
import jsonData from "../database/db.json";

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
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const cartLength = localStorage.getItem("cartN");
  const { increaseCartCount } = useCart();
  const { cartCount } = useCart();
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

  useEffect(() => {
    const usernameFromlocalStorage = localStorage.getItem("username");
    setUsername(usernameFromlocalStorage);
  }, []);

  const handleSignInClick = () => {
    navigate("/login");
  };
  const logoutClick = () => {
    setLoading(true);
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
      navigate("/");
    }, 3000);
  };

  const dropdownItems = [
    { name: "All Products", to: "/allcategories" },
    { name: "Todays Deals", to: "/deals" },
    { name: "Bücher", to: "/bücher" },
    { name: "Spiele", to: "/spiele" },
    { name: "Baby", to: "/baby" },
    { name: "Lebensmittel", to: "/lebensmittel" },
    { name: "Kameras", to: "/cameras" },
    { name: "Fashion", to: "/fashion" },
    // Weitere Dropdown-Elemente können hier hinzugefügt werden
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <nav className="bg-gray-900 text-white">
      <div className="mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center mr-4">
          <Link to="/" className="text-white text-xl font-bold">
            <img className="w-24" src={amzn} alt="Amazon Logo" />
          </Link>
        </div>

        {/* Hauptmenü für größere Bildschirme */}
        <div className="hidden w-full lg:flex items-center px-0 justify-between">
          <div className=" ">
            <div className=" flex justify-center items-center flex-col w-48 ">
              <p>Lieferung an Berlin 12159</p>
              <p className="flex justify-center items-center font-bold">
                <LuMapPin />
                Standort Aktualisieren
              </p>
            </div>
          </div>

          {/* Suchleiste */}
          <div className="px-10 py-5 w-full  flex justify-stretch items-center">
            <div className="relative mt-4 md:mt-0">
              <button
                onClick={toggleDropdown}
                className="text-white flex items-center bg-slate-600   rounded-l-md p-2 "
              >
                Alle
                <svg
                  className={`h-5 w-5 ml-1 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 7.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 bg-gray-800 mt-2 md:mt-0 w-full md:w-40 rounded-lg shadow-lg">
                  <div className="py-1">
                    {dropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.url}
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Suche Amazooon.de"
              value={searchTerm}
              onChange={handleChange}
              className="px-2 py-2 w-full bg-white text-black focus:outline-none"
            />
            <Link to={`/search`}>
              <button
                onClick={handleSearch}
                className="bg-orange-300 px-4 py-3  rounded-r-md hover:bg-orange-400"
              >
                <FiSearch className="text-white" />
              </button>
            </Link>
          </div>

          {/* Konto und Liste */}
          <div className=" flex">
            <div className="flex flex-col justify-center  w-28">
              <p>Hallo, {username} </p>
              <span className="text-xs">Konto und Liste</span>
            </div>
          </div>

          {/* Warenkorb */}
          <div className="relative flex   justify-center  ">
            {username ? (
              <button
                className="flex items-center bg-slate-600 p-2 rounded-md hover:bg-slate-500"
                onClick={() => navigate("/wk")}
                target="_blank"
              >
                <FiShoppingCart className=" text-white w-12 text-3xl" /> (
                {cartLength})
              </button>
            ) : (
              <button
                className="flex items-center text-black  px-10 text-center  rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                onClick={handleSignInClick}
              >
                <p className="  w-20 py-2">Sign In</p>
              </button>
            )}
          </div>
          {username && (
            <div>
              <button
                className="bg-red-600 rounded-md text-white pt-3 p-2 m-5"
                onClick={logoutClick}
              >
                {loading ? (
                  <div className="overlay ">
                    <RingLoader size={100} color={"white"} loading={loading} />
                  </div>
                ) : (
                  "Logout"
                )}
              </button>
            </div>
          )}
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
          <div className="lg:hidden absolute top-16 right-0 w-full z-10  bg-gray-800">
            <div className="flex flex-col items-center py-4">
              <button
                className="flex items-center bg-amazon-dark px-4 py-2 rounded-md hover:bg-amazon-orange"
                onClick={() => navigate("/wk")}
              >
                <FiShoppingCart className="text-white" />
                <span className="text-white ml-1">
                  Warenkorb({cartItems.length})
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
                <Link
                  key={index}
                  to={item.url}
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex justify-center items-center flex-col">
                <div>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2 m-3">
                    <Link to={"/"} rel="noopener noreferrer">
                      {" "}
                      Top Angebot
                    </Link>
                  </button>
                  <button className="bg-red-400 rounded-sm hover:bg-red-500 px-5 py-2">
                    <Link to={"/"} rel="noopener noreferrer">
                      {" "}
                      Angebot der Woche
                    </Link>
                  </button>
                </div>

                <div>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2 m-3">
                    <Link to={"/"} rel="noopener noreferrer">
                      {" "}
                      Besteller in Bücher
                    </Link>
                  </button>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2">
                    <Link to={"/"} rel="noopener noreferrer">
                      {" "}
                      Bestseller in Elektronik
                    </Link>
                  </button>
                </div>
                <div>
                  <button className="bg-red-400 hover:bg-red-500 rounded-sm px-5 py-2">
                    <Link to={"/"} rel="noopener noreferrer">
                      Unsere Besteller-Angebote für dich
                    </Link>
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
