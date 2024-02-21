import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown-Elemente
  const dropdownItems = [
    { label: "Todays Deals", url: "/deals" },
    { label: "Elektronik", url: "/elektronik" },
    { label: "Bücher", url: "/bücher" },
    { label: "Spiele", url: "/spiele" },
    { label: "Baby", url: "/baby" },
    { label: "Lebensmittel", url: "/lebensmittel" },
    { label: "Beauty", url: "/beauty" },
    { label: "Kameras", url: "/kameras" },
    { label: "Apotheke", url: "/apotheke" },
    { label: "Musik", url: "/musik" },
    { label: "Sport & Fitness", url: "/sport" },
    { label: "Hygiene", url: "/hygiene" },

    // Weitere Dropdown-Elemente können hier hinzugefügt werden
  ];

  const nav = [
    { name: "Todays Deals", to: "/deals" },
    { name: "Elektronik", to: "/elektronik" },
    { name: "Bücher", to: "/bücher" },
    { name: "Spiele", to: "/spiele" },
    { name: "Baby", to: "/baby" },
    { name: "Lebensmittel", to: "/lebensmittel" },
    { name: "Beauty", to: "/beauty" },
    { name: "Kameras", to: "/kameras" },
    { name: "Apotheke", to: "/apotheke" },
    { name: "Musik", to: "/musik" },
    { name: "Sport & Fitness", to: "/sport" },
    { name: "Hygiene", to: "/hygiene" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          {/* Dropdown */}
          <div className="relative mt-4 md:mt-0">
            <button
              onClick={toggleDropdown}
              className="text-white flex items-center"
            >
              Kategorien
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
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.map((navb) => (
            <Link
              key={navb.name}
              to={navb.to}
              className="text-gray-300 ml-4 hover:text-white hidden md:block cursor-pointer"
            >
              {navb.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
