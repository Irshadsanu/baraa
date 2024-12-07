import React from "react";
import { assets } from "../../Assets/Assets";
import "./BlogMore.css";
import { useNavigate } from "react-router-dom";

const BlogMore = ({ data, handleClick }) => {
  return (
    <div className="more_read">
      <h4>More for you to read</h4>
      <div className="more_list">
        {data?.map(({ id, title, content, small_thumb ,seeMore}) => (
          <div className="more_item" onClick={() => handleClick(id)}>
            <img src={small_thumb} alt="" />
            <div className="more_subcontent">
              <h6>{title}</h6>
              <p>{seeMore}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogMore;
