import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import ServiceSpotlight from "../../Components/ServiceSpotlight/ServiceSpotlight";
import ServiceBusiness from "../../Components/ServiceBusiness/ServiceBusiness";
import Footer from "../../Components/Footer/Footer";
import ServiceCorporate from "../../Components/ServiceCorporate/ServiceCorporate";
import ServiceRegular from "../../Components/ServiceRegular/ServiceRegular";
import Eservice from "../../Components/Eservice/Eservice";
import Translations from "../../Components/Translations/Translation";
import ServiceVisa from "../../Components/ServiceVisa/ServiceVisa";
import ScrollToTopButton from "../../Components/ScrollToTop/ScrollToTopButton";
import GlobalVisa from "../../Components/GlobalVisa/GlobalVisa";
import { useLocation, useParams } from "react-router-dom";
import { scroller } from "react-scroll";




function ServicePage() {
  const { sectionId } = useParams();
  const location = useLocation();


  console.log(location.pathname);
  console.log(sectionId);

  useEffect(() => {
    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 800,  
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [sectionId]);

  return (
    <div>
      <Header />
      <section id="spotlight">
        <ServiceSpotlight  />
      </section>
      <section id="business">
        <ServiceBusiness />
      </section>
      <section id="visa">
        <GlobalVisa />
      </section>
      <section id="corporate">
        <ServiceCorporate />
      </section>
      <section id="regular">
        <ServiceRegular />
      </section>
      <section id="eservice">
        <Eservice />
      </section>
      <section id="translations">
        <Translations />
      </section>
      {/* <section id="visa">
        <ServiceVisa />
      </section> */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default ServicePage;
