import React from "react";
import "./Collaboration.css";
import { assets } from "../../Assets/Assets";

function Collaboration() {
  return (
    <div className="collaboration">
      <h6>OUR PROJECT COLLABORATIONS</h6>
      <h3>Our Major Corporate Customers</h3>
      <p>
        Distinguished companies including Semaka Trading Company, Intercon Co.,
        Ltd., Desert Sides Co. Ltd., and Alruqee Group are among Baraa's
        clientele. With relationships in Qatar, the United Arab Emirates, and
        India, our collaboration goes beyond Saudi Arabia, so broadening our
        scope and proficiency.
      </p>
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

export default Collaboration;
