import React from "react";
import "./AboutDetails.css";
import { assets } from "../../Assets/Assets";

function AboutDetails() {
  return (
    <div className="aboutdetails">
      <h6>ABOUT US</h6>
      <div className="details">
        <div className="content-details">
          <p>
            Baraa has a three decades legacy and has proven to be resilient and
            adaptable when faced with difficulties. Our path has been
            characterized by constant learning and development, leading to a
            thorough comprehension of the prospects given by Saudi Arabia's
            forward-thinking vision. We are ready and able to take advantage of
            these opportunities in order to help our clients succeed now.
          </p>
          <h6 className="vis-hed">VISION</h6>
          <p>
            With Saudi Arabia taking the lead in the world economy, we want to
            be the go-to service provider and grow along with our clients. Our
            goal is to expand with Saudi Arabia by 2030 and build mutually
            beneficial relationships with our clients and affiliated agencies.
          </p>
        </div>
        <div className="content-image">
          <img src={assets.About} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
