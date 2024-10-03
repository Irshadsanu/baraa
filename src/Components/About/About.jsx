import React from "react";
import "./About.css";
import { assets } from "../../Assets/Assets";
import {  useNavigate } from "react-router-dom";

function About() {
const navigator = useNavigate();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleNavigate = () => {
    navigator("/about");
    scrollToTop();
  };

  return (
    <div className="about">
      <div className="about-content">
        <h6>About us</h6>
        <h2>Helping Business Grow Better </h2>
        <p>
          At Baraa, we are more than just a business consulting firm; we are
          your knowledgeable guides through the ever-changing business
          environment in Saudi Arabia. Baraa was founded in 2023 and possesses
          experience of three decades in closely collaborating with Saudi
          Arabia, comprehending its subtleties, and capitalizing on its
          prospects.
        </p>
        <button onClick={handleNavigate}>Learn More</button>
      </div>
      <div className="about-image">
        <img src={assets.About} alt="" />
      </div>
    </div>
  );
}

export default About;
