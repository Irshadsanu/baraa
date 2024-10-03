import React, { useState } from "react";
import "./ContactDetails.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import emailjs from 'emailjs-com';

function ContactDetails() {
  const [selectedBranch, setSelectedBranch] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    emailjs
    .send(
      'service_dh5usdl',        // Replace with your EmailJS service ID
      'template_2yx7pvb',       // Replace with your EmailJS template ID
      formData,
      'OdZDElwE5s7pmNxjI'            // Replace with your EmailJS public key (user ID)
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      },
      (err) => {
        console.log('FAILED...', err);
        alert('Email sending failed.');
      }
    );
  };

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  

  const maps = {
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.9266524712701!2d50.101620827881376!3d26.444399010765007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb94fb56aea5%3A0x3c028888b72ef6cc!2zQmFyYWEgRSAtIFNlcnZpY2VzINio2LHYp9i52Kkg2YTZhNiu2K_Zhdin2Ko!5e0!3m2!1sen!2sin!4v1725653743846!5m2!1sen!2sin",
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
            <p>+966 553542255, +966 542719195</p>
          </div>
          <div className="item">
            <div className="top">
              <CiMail />
              <span>E-Mail</span>
            </div>
            <p>
              <a href="mailto:hello@baraaglobal.com" style={{ color: 'inherit', textDecoration: 'none' }}>
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
            <p onClick={() => handleBranchClick(1)} style={selectedBranch === 1 ? { fontWeight: 'bold' } : {}}>
              BRANCH 1 : Dammam town (Seiko), Wadi dawasir District
            </p>
            <p onClick={() => handleBranchClick(2)} style={selectedBranch === 2 ? { fontWeight: 'bold' } : {}}>
              BRANCH 2 : 18th St. Al Badiya, Opp. Lulu Mall (Previously shira mall)
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="touch">
            <h3>Get in Touch</h3>
            <p>Have Questions? We're here for you. Drop us a line, write us an email, or send us a text.</p>
          </div>
          <div className="top">
            <div className="box">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Your First Name"
                className="nameee"
                id="firstName"
                required
              />
            </div>
            <div className="box">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Your Last Name"
                className="namee"
                id="lastName"
                required
              />
            </div>
          </div>
          <div className="box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Mail"
              className="msg"
              id="email"
              required
            />
          </div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Number"
            className="msg"
            id="phone"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type Your Message"
            className="msg"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* <p>{status}</p> */}
      </div>
    </div>
  );
}

export default ContactDetails;
