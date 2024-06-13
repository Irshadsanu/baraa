import React from "react";
import "./ServiceBusiness.css";
import { assets } from "../../Assets/Assets";

function ServiceBusiness() {
  return (
    <div className="service-business" id="new-business-setup">
      <h6>LICENSING SERVICES</h6>
      <h3>New Business Setup</h3>
      <div className="service-list">
        <div className="item">
          <div className="img-cont">
            <img src={assets.buisiness} alt="Service_icon" />
            <h5>Company & Establishment Registration </h5>
          </div>
          {/* <p>Company & Establishment Registration</p> */}
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.buisiness} alt="Service_icon" />
            <h5>MISA License</h5>
          </div>
          <p>Issuance / Amendment</p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.buisiness} alt="Service_icon" />
            <h5>Articles of Association</h5>
          </div>
          <p>Issuance / Amendment </p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.buisiness} alt="Service_icon" />
            <h5>Commercial Registration</h5>
          </div>
          <p>Issuance / Amendment / Renewal</p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.buisiness} alt="Service_icon" />
            <h5>Baladiya License</h5>
          </div>
          <p>Issuance / Amendment / Renewal</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceBusiness;
