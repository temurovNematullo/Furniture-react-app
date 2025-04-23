import React from "react";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import FurnitureSection from "./components/OurFirnitureSection/OurFurnitureSection";
import ClientReviewsSection from "./components/ClientREviewsSection/ClientReviewsSection";
import Footer from "./components/Footer/Footer";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AboutUsSection />
      <ServiceSection />
      <FurnitureSection />
      <ClientReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
