import React from "react";
import "./Footer.css";
import { assets } from "../../Assets/Assets";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";

function Footer() {
  const navigator = useNavigate();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function navComponent() {

  }

  return (
    <footer>
      <div className="top-footer">
        <div className="logoside">
          <img src={assets.Logo} alt="" />
          <ul className="social">
            <li>
              <a
                href="https://www.instagram.com/baraaglobal?igsh=MXhibDN6bzB4d3Jycg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/2wj8yW8QSP47UjSJ/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
        <ul className="service-footer">
          <h3>Services</h3>
          <Link to="/service/visa" >
          <li>Visa Assistance</li>
          </Link>
          <Link to={"/service/translations"} onClick={scrollToTop}>
          <li>Translation</li>
          </Link>
          <Link to={"/service/business"} onClick={scrollToTop}>
          <li>New Business Setup</li>
          </Link>
          <Link to={"/service/corporate"} onClick={scrollToTop}>
          <li>Legal Support</li>
          </Link>
        </ul>
        <ul className="company">
          <h3>Company</h3>
          <Link to={"/about"} onClick={scrollToTop}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact"} onClick={scrollToTop}>
            <li>Contact Info</li>
          </Link>
          <Link to={"/service"} onClick={scrollToTop}>
            <li>Our Service</li>
          </Link>
          <Link to={"/blog"} onClick={scrollToTop}>
            <li>Blog</li>
          </Link>
        </ul>
        <form action="">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="bottom-footer">
        <ul className="copyright">
          <li>Copyright © 2024 BARAA GLOBAL</li>
          <li>Design by ADALINE</li>
        </ul>
        <ul className="terms">
          <li>Term of use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
