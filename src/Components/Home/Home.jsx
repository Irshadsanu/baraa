import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Spotlight from "../Spotlight/Spotlight";
import About from "../About/About";
import Vision from "../Vision/Vision";
import Service from "../Service/Service";
import Choose from "../Choose/Choose";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";

function Home() {
  return (
    <div>
      <Header />
      <Spotlight />
      <div className="home-canvas">
        <About />
        <Vision />
        <Service />
        <Choose />
        <Review />
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
