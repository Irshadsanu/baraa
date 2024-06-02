import React from "react";
import "./Choose.css";
import { assets } from "../../Assets/Assets";

function Choose() {
  return (
    <div className="main">
      <div className="choose">
        <div className="choose-image">
          <img src={assets.Choose} alt="" />
        </div>
        <img src={assets.Choose_content} alt="" className="img-cont-choos" />
        <div className="choose-content">
          <h4>Why Choose us</h4>
          <h3>Choose Us to Grow Your Business</h3>
          <p>
            Baraa has a three-century legacy and has proven to be resilient and
            adaptable when faced with difficulties.
          </p>
          <ul className="advantege">
            <li>
              <img src={assets.Activity} alt="" />
              <h6>Results-Driven Approach</h6>
            </li>
            <li>
              <img src={assets.Activity} alt="" />
              <h6>Expertise in Multiple Platforms</h6>
            </li>
            <li>
              <img src={assets.Activity} alt="" />
              <h6>Continuous Optimization</h6>
            </li>
          </ul>
        </div>
      </div>
      <ul className="brands">
        <li>
          <img src={assets.Ar_group} alt="" />
        </li>
        <li>
          <img src={assets.Semaka} alt="" />
        </li>
        <li>
          <img src={assets.Dsi} alt="" />
        </li>
        <li>
          <img src={assets.Sc} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Choose;
