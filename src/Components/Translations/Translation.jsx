import React from "react";
import "./Translation.css";
import { assets } from "../../Assets/Assets";

function Translations() {
  return (
    <div className="translation">
      <h4>Certified Translation Serices</h4>
      <p>
        We offer translation in 300+ languages, specializing in legal,
        technical, and medical translations, and live translation services for
        court sittings.
      </p>
      <div className="service-list">
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>Arabic</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>English</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>French</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>Hindi</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>Japanese</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>Turkish</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>Chinese</h5>
          </div>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>German</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translations;
