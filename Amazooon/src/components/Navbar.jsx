import React, { useState, useEffect,Link } from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Img from "../images/logo-transparent-png.png";
import { FiNavigation } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Navigate, useLocation, useNavigate,  } from "react-router-dom";
import { RingLoader } from "react-spinners";
import "./logout.css"
import { useCart } from "../pages/home/context/CartContext";

const Navbar = () => {
  const cartLength = localStorage.getItem('cartN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false)
  
  const { cartCount } = useCart();
  useEffect(() => {
    const usernameFromlocalStorage = localStorage.getItem("username");
    setUsername(usernameFromlocalStorage);
    
  }, []);
  const handleSignInClick = () => {
    navigate("/login");
  };
  const logoutClick = () => {
    setLoading(true)
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
      navigate("/");
    }, 3000); 
  };

  const dropdownItems = [
    { name: "Elektronik", url: "/Elektronik" },
    { name: "Bekleidung", url: "/Bekleidung" },
    { name: "Haushalt", url: "/Haushalt" },
    { name: "HAllo", url: "/Haushalt" },
    // Weitere Dropdown-Elemente können hier hinzugefügt werden
  ];
  const nav = [
    { name: "Prime", to: "/" },
    { name: "Verkaufen", to: "/verkaufen" },
    { name: "Kundenservice", to: "/kundenservice" },
    { name: "Heute's Deals", to: "/heutes-deals" },
    { name: "Elektronik", to: "/elektronik" },
    { name: "Kundenkonto", to: "/kundenkonto" },
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
    <nav className="bg-gray-900 ">
      <div className=" mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-lg font-bold">
            <img className="w-24 text-white" src={Img} alt="" />
          </a>
          {/* Andere Navigationslinks */}
        </div>

        <div className=" text-white">
          <p>Lieferung an {username}</p>
          <p className="flex justify-center items-center text-white">
            <FiNavigation /> 12163 Berlin
          </p>
        </div>

        {/* Suchleiste */}
        <div className="flex items-center mt-4 md:mt-0 w-full md:w-auto">
          {/* Dropdown */}
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
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
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
            className="p-2  bg-gray-700 text-white focus:outline-none w-full md:w-96"
          />
          <button className="bg-yellow-500 p-3 rounded-r-md hover:bg-yellow-400">
            <FiSearch />
          </button>
          {/* Dropdown */}
          {/* <div className="relative mt-4 mx-2 md:mt-0 flex">
            <button className="text-white  items-center">
              <p>Hallo, {username}</p>
              <p>Konto und Liste</p> */}

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 7.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg> */}
            {/* </button>
          </div> */}

          <div className="text-white text-center">
            <p>
              <b>Bestellungen</b>
            </p>
          </div>
          {/* Warenkorb */}
          <div className="ml-4 text-white mr-4">
            {username ? (
              <button
                className="flex items-center bg-slate-600 p-2 rounded-md hover:bg-slate-500"
                onClick={()=>navigate("/wk")}
                target="_blank" 
              >
                <FiShoppingCart className="m-1" /> Warenkorb ({cartLength})
              </button>
            ) : (
              <button className="flex items-center text-black p-2 rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput" onClick={handleSignInClick}>
                Sign In
              </button>
            )}
          </div>
          {username && (
            <div>
              <button className="bg-red-600 rounded-md text-white pt-3 p-2 m-5" onClick={logoutClick}>
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
        </div>
      
    </nav>
  );
};

export default Navbar;
