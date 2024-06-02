import React from "react";
import "./Vision.css";
import { assets } from "../../Assets/Assets";

function Vision() {
  return (
    <div className="vision">
      <div className="vision-img">
        <img src={assets.Vision_img} alt="Vision_img" />
      </div>
      <div className="vision-middle">
        <h6>Vision</h6>
        <p>
          With Saudi Arabia taking the lead in the world economy, we want to be
          the go-to service provider and grow along with our clients.
        </p>
      </div>
      <p className="vision-para">
        Our goal is to expand with Saudi Arabia by 2030 and build mutually
        beneficial relationships with our clients and affiliated agencies.
      </p>
    </div>
  );
}

export default Vision;
