import React from "react";
import "./ContactDetails.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function ContactDetails() {
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
            <p>+966 553542255, +966 542719195,<br/>+966 506886525, +966 558511498</p>
          </div>
          <div className="item">
            <div className="top">
              <CiMail />
              <span>E-Mail</span>
            </div>
            <p>info@baraaservice.com, visa@baraaservice.com, translation@baraaservice.com </p>
          </div>
          <div className="item">
            <div className="top">
              <CiLocationOn />
              <span>Locate Us</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.7199225895854!2d50.09650034885181!3d26.42749715549677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd133f702ca1%3A0xda6889b69db994d4!2zQmFyYWEgVmlzYSBhbmQgVHJhbnNsYXRpb24g2LTYsdmD2Kkg2KjYsdin2LnYqSDZhNiu2K_Zhdin2Kog2KfZhNiq2LHYrNmF2Kkg2YjYp9mE2KrYo9i02YrYsdin2Ko!5e0!3m2!1sen!2sin!4v1714552124299!5m2!1sen!2sin"
              width="565"
              height="300"
              style={{ border: "0", borderRadius: "20" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            >
                     
            </iframe>
            <p>BRANCH 1 : Dammam town (Seiko), Wadi dawasir District</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.7199225895854!2d50.09650034885181!3d26.42749715549677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd133f702ca1%3A0xda6889b69db994d4!2zQmFyYWEgVmlzYSBhbmQgVHJhbnNsYXRpb24g2LTYsdmD2Kkg2KjYsdin2LnYqSDZhNiu2K_Zhdin2Kog2KfZhNiq2LHYrNmF2Kkg2YjYp9mE2KrYo9i02YrYsdin2Ko!5e0!3m2!1sen!2sin!4v1714552124299!5m2!1sen!2sin"
              width="565"
              height="300"
              style={{ border: "0", borderRadius: "20" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            >
                     
            </iframe>
            <p>BRANCH 2 : 18th St. Al Badiya, Opp. Lulu Mall (Previously shira mall)</p>
          </div>
          
        </div>
        <form action="">
          <div className="top">
            <div className="box">
              <label htmlFor="">First Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="nameee"
              />
            </div>
            <div className="box">
              <label htmlFor="">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="namee"
              />
            </div>
          </div>
          <div className="box">
            <label htmlFor="">Email:</label>
            <input type="mail" placeholder="Enter Your Mail" className="msg" />
          </div>
          <label htmlFor="">Phone Number:</label>
          <input
            type="number"
            placeholder="Enter Your Number"
            className="msg"
          />
          <label htmlFor="">Message</label>
          <input type="text" placeholder="Type Your Message" className="msg" />
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
