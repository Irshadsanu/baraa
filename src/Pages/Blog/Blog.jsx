import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BlogSpotlight from "../../Components/BlogSpotlight/BlogSpotlight";
import RecentBlog from "../../Components/RecentBlog/RecentBlog";
import Articles from "../../Components/Articles/Articles";
import ScrollToTopButton from "../../Components/ScrollToTop/ScrollToTopButton";
import BlogMore from "../../Components/BlogMore/BlogMore";
import BlogMain from "../BlogMain/BlogMain";

function Blog() {
  return (
    <div className="blog">
      <BlogMain />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Blog;
