import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import AboutSpotlight from "../../Components/AboutSpotlight/AboutSpotlight";
import AboutDetails from "../../Components/AboutDetails/AboutDetails";
import History from "../../Components/History/History";
import AboutChoose from "../../Components/AboutChoose/AboutChoose";
import Collaboration from "../../Components/Collaboration/Collaboration";
import Impact from "../../Components/Impact/Impact";
import ScrollToTopButton from "../../Components/ScrollToTop/ScrollToTopButton";

function AboutPage() {
  return (
    <div>
      <Header />
      <AboutSpotlight />
      <AboutDetails />
      <History />
      <AboutChoose />
      <Collaboration />
      <Impact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default AboutPage;
