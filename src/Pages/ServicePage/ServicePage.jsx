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
import { useLocation } from "react-router-dom";

function ServicePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Header />
      <ServiceSpotlight />
      <ServiceBusiness />
      <GlobalVisa />
      <ServiceCorporate />
      <ServiceRegular />
      <Eservice />
      <Translations />
      {/* <ServiceVisa /> */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default ServicePage;
