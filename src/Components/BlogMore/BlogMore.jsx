import React from "react";
import { assets } from "../../Assets/Assets";
import "./BlogMore.css";
import { useNavigate } from "react-router-dom";

const BlogMore = () => {
  const navigate = useNavigate();

  const handlCLick = () => {
    const blogTitle = "UNVEILING SAUDI ARABIA";
    const encodedTitle = encodeURIComponent(blogTitle);
    window.scrollTo(0, 0);
    navigate(`/blog?title=${encodedTitle}`);
  };
  const handSecond = () => {
    const blogTitle = "UNVEILING DUBAI";
    const encodedTitle = encodeURIComponent(blogTitle);
    window.scrollTo(0, 0);
    // Append the title as a query parameter to the same route
    navigate(`/come?title=${encodedTitle}`);
  };
  return (
    <div className="more_read">
      <h4>More for you to read</h4>
      <div className="more_list">
        <div className="more_item" onClick={handlCLick}>
          <img src={assets.Blog1} alt="" />
          <div className="more_subcontent">
            <h6>
              UNVEILING SAUDI ARABIA; TOP TRAVEL DESTINATIONS YOU CAN'T MISS!
            </h6>
            <p>
              From budgeting to outlining the itinerary, planning vacations are
              equally exhausting and overwhelming. A major part of the work goes
              into deciding the right destination, we can help you out here!
            </p>
          </div>
        </div>
        <div className="more_item" onClick={handSecond}>
          <img src={assets.Blog2} alt="" />
          <div className="more_subcontent">
            <h6>UNVEILING DUBAI; TOP TRAVEL DESTINATIONS YOU CAN'T MISS!</h6>
            <p>
              From budgeting to outlining the itinerary, planning vacations are
              equally exhausting and overwhelming. A major part of the work goes
              into deciding the right destination, we can help you out here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMore;
