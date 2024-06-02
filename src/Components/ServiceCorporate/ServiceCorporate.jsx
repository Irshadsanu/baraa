import React from "react";
import "./ServiceCorporate.css";
import { assets } from "../../Assets/Assets";

function ServiceCorporate() {
  return (
    <div className="service-corporate">
      <h6>LICENSING SERVICES</h6>
      <h3>Corporate Services</h3>
      <div className="service-list">
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>ZATCA Registration</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>VAT Certificate Issuance</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>GOSI Registration</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>QIWA Registration</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>Labour Office File Opening</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>GM/Directors Visa</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>Register in the Chamber of Commerce</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>SPL Registration</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>Muqeem/Absher Business Subscription</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>Register in the Chamber of Commerce</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCorporate;
