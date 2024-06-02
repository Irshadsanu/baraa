import React from "react";
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

function ServicePage() {
  return (
    <div>
      <Header />
      <ServiceSpotlight />
      <ServiceBusiness />
      <ServiceCorporate />
      <ServiceRegular />
      <Eservice />
      <Translations />
      <ServiceVisa />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default ServicePage;
