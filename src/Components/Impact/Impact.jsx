import React from "react";
import "./Impact.css";
import { Link } from "react-router-dom";

function Impact() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="impact">
      <h4>We Take Pride in Positive Impact Our Solutions Have</h4>
      <p>
        We at Baraa live up to our moniker, "expertise," in every facet of the
        services we provide. Our unwavering dedication to achieving excellence
        and our customer-centric approach is aimed at enabling businesses to
        prosper in Saudi Arabia's ever-changing business environment and beyond.
        Join us, and let’s pursue success together.
      </p>
      <Link to="/contact" onClick={scrollToTop}>
        <button>Connect With Us</button>
      </Link>
    </div>
  );
}

export default Impact;
