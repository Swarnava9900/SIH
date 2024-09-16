/* eslint-disable react/prop-types */
import React, { useState, useCallback } from "react";
import "../styles/Navbar.css";

// Memoized Navbar component
const Navbar = React.memo(({ setSelectedState, selectedState }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Debounced scroll handler to minimize frequent re-renders
  const handleScroll = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Toggle dropdown open/close
  const handleClick = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  // Handle dropdown item selection
  const handleSelection = useCallback(
    (state) => () => {
      setSelectedState(state);
      setIsOpen(false); // Close dropdown when an item is selected
    },
    [setSelectedState]
  );

  // Close the dropdown when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".navbar")) {
      setIsOpen(false);
    }
  }, []);

  // Add event listener for clicks outside of the navbar
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav>
      <div className="navbar">
        <a href="#">
          <div className="nav-logo"></div>
        </a>
        <div className="navlist">
          <ul>
            {/* Conditionally render Home item if selectedState is not null */}
            {selectedState && (
              <li>
                <a onClick={() => setSelectedState(null)}>Home</a>
              </li>
            )}
            <li>
              <a onClick={handleClick}>Explore</a>
              {/* Show dropdown menu when isOpen is true */}
              {isOpen && (
                <ul className="dropdown-menu">
                  <li onClick={handleSelection("delhi")}>Delhi</li>
                  <li onClick={handleSelection("kolkata")}>Kolkata</li>
                  <li onClick={handleSelection("shimla")}>Shimla</li>
                </ul>
              )}
            </li>
            <li>
              <a>Spot-Bot</a>
            </li>
            <li>
              <a onClick={() => handleScroll("footer")}>About Us</a>
            </li>
            <li>
              <i className="fa-regular fa-circle-user"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

// Set displayName for better debugging
Navbar.displayName = "Navbar";

export default Navbar;
