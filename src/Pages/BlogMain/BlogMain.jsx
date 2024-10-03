import React from "react";
import Header from "../../Components/Header/Header";
import BlogSpotlight from "../../Components/BlogSpotlight/BlogSpotlight";
import Articles from "../../Components/Articles/Articles";

const BlogMain = () => {
  return (
    <div>
      <Header />
      <BlogSpotlight />
      {/* <RecentBlog /> */}
      <Articles />
    </div>
  );
};

export default BlogMain;
