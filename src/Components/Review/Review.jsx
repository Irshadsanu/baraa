import React, { useState } from "react";
import "./Review.css";
import { assets } from "../../Assets/Assets";

function Review() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviews = [
    {
      img: assets.Ibrahim,
      name: "Mhd. Ibrahim",
      title: "CHIEF EXECUTIVE OFFICER",
      company: "AL RUQEE GROUP",
      text: "I've had the pleasure of working with Baraa Global for the past year, and their exceptional service has been a game-changer for our business. Their professional approach and insightful strategies have significantly improved our operations. Highly recommend!",
    },
    {
      img: assets.Jameel,
      name: "Abdullah Jameel",
      title: "Business Owner",
      company: "SAUDI CABIN",
      text: "Baraa Global has been instrumental in our business growth. Their team is knowledgeable, responsive, and truly cares about our success. We've seen a noticeable improvement in our efficiency and profitability since partnering with them.",
    },
    {
      img: assets.Khalid,
      name: "Khalid Waleed",
      title: "E-commerce Manager",
      company: "SEMAKA GROUP",
      text: "The expertise and dedication of Baraa Global have exceeded our expectations. They provided tailored solutions that addressed our specific needs and helped us achieve our business goals. Their support has been invaluable.",
    },
  ];

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="review">
      <div className="top-review">
        <div className="left-review">
          <h4>Testimonial</h4>
          <h5>Customers Review</h5>
          <div className="valuation">
            {/* Optional: Add additional content here */}
          </div>
        </div>
        {/* Optional: Add image here */}
      </div>

      <div className="bottom-review">
        <div className="item">
          <div className="info">
            <div className="info-details">
              <div className="in-img">
                <img src={currentReview.img} alt={currentReview.name} />
              </div>
              
              <div className="info-name">
                <h4>{currentReview.name}</h4>
                <h5>{currentReview.title}</h5>
                <span>{currentReview.company}</span>
              </div>
            </div>
          </div>
          <div className="details">
            <p>{`${currentReview.text}`}</p>
          </div>

          <div className="navigation-buttons">
          
         <img onClick={handleNextReview}
          src={assets.leftRR}
          alt="Scroll to top"
          // style={styles.image}
        />
           <img onClick={handleNextReview}
          src={assets.rightRR}
          alt="Scroll to top"
          // style={styles.image}
        />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
