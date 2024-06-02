import React from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";

function MobileMenu({ isMenuOpen, toggleMenu }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="mobile">
      <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={scrollToTop} className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={scrollToTop} className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/service" onClick={scrollToTop} className="link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={scrollToTop} className="link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={scrollToTop} className="link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default MobileMenu;
