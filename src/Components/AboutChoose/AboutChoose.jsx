import React from "react";
import "./AboutChoose.css";
import { assets } from "../../Assets/Assets";

function AboutChoose() {
  return (
    <div className="about-choose">
      <h6>WHY CHOOSE US?</h6>
      <h3>Choose Us to Grow Your Business</h3>
      <div className="container-choose">
        <div className="choose-text">
          <p>
            With well devoted professionals on staff, Baraa is motivated by a
            common dedication to quality work and client satisfaction. Our staff
            is prepared to provide individualized solutions catered to the
            particular requirements of each client, and we have two branches
            that are positioned for ease of accessibility.
          </p>
          <ul className="advantege">
            <li>
              <img src={assets.Activity} alt="" />
              <h5>Results-Driven Approach</h5>
            </li>
            <li>
              <img src={assets.Activity} alt="" />
              <h5>Expertise in Multiple Platforms</h5>
            </li>
            <li>
              <img src={assets.Activity} alt="" />
              <h5>Continuous Optimization</h5>
            </li>
          </ul>
        </div>
        <div className="choose-imgg">
          <img src={assets.Choose} alt="" />
        </div>
        <img src={assets.Choose_content} alt="" className="about-ch-img" />
      </div>
    </div>
  );
}

export default AboutChoose;
