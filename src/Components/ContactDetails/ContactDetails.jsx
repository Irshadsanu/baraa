import React, { useState } from "react";
import "./ContactDetails.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function ContactDetails() {
  const [selectedBranch, setSelectedBranch] = useState(1);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  const maps = {
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.7199225895854!2d50.09650034885181!3d26.42749715549677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd133f702ca1%3A0xda6889b69db994d4!2zQmFyYWEgVmlzYSBhbmQgVHJhbnNsYXRpb24g2LTYsdmD2Kkg2KjYsdin2LnYqSDZhNiu2K_Zhdin2Kog2KfZhNiq2LHYrNmF2Kkg2YjYp9mE2KrYo9i02YrYsdin2Ko!5e0!3m2!1sen!2sin!4v1714552124299!5m2!1sen!2sin",
    2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.7196225895854!2d50.19650034885181!3d26.52749715549677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd133f702ca1%3A0xda6889b69db994d4!2zQmFyYWEgVmlzYSBhbmQgVHJhbnNsYXRpb24g2LTYsdmD2Kkg2KjYsdin2LnYqSDZhNiu2K_Zhdin2Kog2KfZhNiq2LHYrNmF2Kkg2YjYp9mE2KrYo9i02YrYsdin2Ko!5e0!3m2!1sen!2sin!4v1714552124299!5m2!1sen!2sin",
  };

  return (
    <div className="contactdetails">
      <h6>CONTACT US</h6>
      <div className="main-bx">
        <div className="details-left">
          <div className="item">
            <div className="top">
              <IoCallOutline />
              <span>Call Us</span>
            </div>
            <p>
              +966 553542255, +966 542719195,
              {/* <br />
              +966 506886525, +966 558511498 */}
            </p>
          </div>
          <div className="item">
            <div className="top">
              <CiMail />
              <span>E-Mail</span>
            </div>
            <p>
            <a   href="mailto:hello@baraaglobal.com"  style={{ color: 'inherit', textDecoration: 'none' }}  >
             hello@baraaglobal.com
            </a>
            </p>
          </div>
          <div className="item">
            <div className="top">
              <CiLocationOn />
              <span>Locate Us</span>
            </div>
            <iframe
              src={maps[selectedBranch]}
              width="565"
              height="300"
              style={{ border: "0", borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
            <p onClick={() => handleBranchClick(1)} style={selectedBranch===1?{ fontWeight: 'bold' }:{}} >
              BRANCH 1 : Dammam town (Seiko), Wadi dawasir District
            </p>
            <p onClick={() => handleBranchClick(2)} style={selectedBranch===2?{ fontWeight: 'bold' }:{}}>
              BRANCH 2 : 18th St. Al Badiya, Opp. Lulu Mall (Previously shira
              mall)
            </p>
          </div>
        </div>
        <form action="">
          <div className="touch">
            <h3>Get in Touch</h3>
            <p>
              Have Questions? We're here for you. Drop us a line, write us an
              email, or send us a text
            </p>
          </div>
          <div className="top">
            <div className="box">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="nameee"
                id="firstName"
              />
            </div>
            <div className="box">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="namee"
                id="lastName"
              />
            </div>
          </div>
          <div className="box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="msg"
              id="email"
            />
          </div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter Your Number"
            className="msg"
            id="phone"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Type Your Message"
            className="msg"
            rows="5"
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
