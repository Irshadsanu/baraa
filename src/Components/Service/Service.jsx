import React from "react";
import "./Service.css";
import { assets } from "../../Assets/Assets";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Service() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="service">
      <h6>Our Services</h6>
      <h4>Elevate Your Business Today</h4>
      <p>
        With well devoted professionals on staff, Baraa is motivated by a common
        dedication to quality work and client satisfaction. Our staff is
        prepared to provide individualized solutions catered to the particular
        requirements of each client.
      </p>
      <div className="service-list">
        <div className="item">
          <div className="img-cont">
            <img src={assets.buisiness} alt="Service_icon" />
            <h5>New Business Setup</h5>
          </div>
          <p>We take care of all procedures required accordingly</p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.document} alt="Service_icon" />
            <h5>Document Translations</h5>
          </div>
          <p>
            Baraa's multilingualism allows it to translate documents of any
            kind...
          </p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.legal1} alt="Service_icon" />
            <h5>Legal & Administrative Support</h5>
          </div>
          <p>We provide comprehensive legal and administrative services</p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.legal2} alt="Service_icon" />
            <h5>Legal Advice & Representation</h5>
          </div>
          <p>Our team of seasoned advocates provide thorough support,</p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.submission} alt="Service_icon" />
            <h5>Submission of VAT & Zakat</h5>
          </div>
          <p>Baraa helps businesses with VAT and Zakat filings,</p>
        </div>
        <div className="item">
          <div className="img-cont">
            <img src={assets.visa} alt="Service_icon" />
            <h5>Visa Assistance</h5>
          </div>
          <p>We streamline the application procedure, guaranteeing..</p>
        </div>
        <Link to="/service" onClick={scrollToTop}>
          <button>
            Services <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Service;
