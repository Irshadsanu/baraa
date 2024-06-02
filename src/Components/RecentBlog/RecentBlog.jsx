import React from "react";
import "./RecentBlog.css";
import { assets } from "../../Assets/Assets";

function RecentBlog() {
  return (
    <div className="recentblog">
      <h6>RECENT BLOG</h6>
      <div className="blog-list">
        <div className="blog-item">
          <img src={assets.Blog1} alt="" />
          <h5>Tips & Tricks to safeguard Your Messages and privacy</h5>
          <p>
            Delve into detailed guide on securing messages and protecting your
            privacy. From setting strong passwords to enabling two....
          </p>
        </div>
        <div className="blog-item">
          <img src={assets.Blog2} alt="" />
          <h5>Tips & Tricks to safeguard Your Messages and privacy</h5>
          <p>
            Delve into detailed guide on securing messages and protecting your
            privacy. From setting strong passwords to enabling two....
          </p>
        </div>
        <div className="blog-item">
          <img src={assets.Blog3} alt="" />
          <h5>Tips & Tricks to safeguard Your Messages and privacy</h5>
          <p>
            Delve into detailed guide on securing messages and protecting your
            privacy. From setting strong passwords to enabling two....
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
