import React from "react";
import "./ServiceRegular.css";
import { assets } from "../../Assets/Assets";

function ServiceRegular() {
  return (
    <div className="service-regular" id="legal-support">
      <h3>Regular Support Services</h3>
      <div className="service-list">
        <div className="item">
          <div className="img-cont">
            <img src={assets.legal1} alt="Service_icon" />
            <h5>Government Platforms Management</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.legal1} alt="Service_icon" />
            <h5>Monitoring of Licenses and Certificates</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.legal1} alt="Service_icon" />
            <h5>Complete HR Solution</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.legal1} alt="Service_icon" />
            <h5>Work Visa Issuance/ Wakala Services</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceRegular;
