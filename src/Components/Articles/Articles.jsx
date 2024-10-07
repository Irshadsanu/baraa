import React, { useState } from "react";
import "./Articles.css";
import blogData from "../../Data/blogs/blogsData";
import BlogMore from "../BlogMore/BlogMore";
function Articles() {
  const [currentBlog, setCurrentBlog] = useState(blogData[0]);
  const suggetionBlogs = blogData;

  const handleBlogChange = (id) => {
    setCurrentBlog(blogData[id - 1]);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const params = new URLSearchParams(window.location.search);
    params.set("title", currentBlog?.title);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  return (
    <>
      <div className="articles">
        <div className="article_boxey">
          <h4>{currentBlog.title}</h4>

          {currentBlog?.content?.map(
            ({ subheading, text, section_heading, places, img }) => (
              <>
                <div
                  className="article-home"
                  style={{
                    "--bg": `url(${img})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="content">
                    <h3>{subheading}</h3>
                    <p className="imgp">{text.slice(0, 80) + "..."}</p>
                  </div>
                </div>
                <div className="article-details"></div>
                <p>{text}</p>
                <h5>{section_heading}</h5>
                {places?.map(({ name, details }) => (
                  <p>
                    <b>{name} : </b> {details}
                  </p>
                ))}
              </>
            )
          )}
        </div>
      </div>
      <BlogMore data={suggetionBlogs} handleClick={handleBlogChange} />
    </>
  );
}

export default Articles;
