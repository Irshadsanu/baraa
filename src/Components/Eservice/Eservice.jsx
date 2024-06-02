import React from "react";
import "./Eservice.css";
import { assets } from "../../Assets/Assets";

function Eservice() {
  return (
    <div className="eservice">
      <h3>General E Services</h3>
      <div className="service-list">
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Legal Advisory Services</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Document Attestation</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Embassy Services</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Agreement Supports</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Court Documentation Service</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Ticketing Services</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Passport Renewal</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Medical Insurance</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eservice;
