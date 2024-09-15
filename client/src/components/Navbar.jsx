/* eslint-disable react/prop-types */
import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar({ setSelectedState, selectedState }) {
  // useState hook to manage the dropdown state
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleSelection = (state) => () => setSelectedState(state);

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
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a>Explore</a>
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
}
