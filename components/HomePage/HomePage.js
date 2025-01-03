import React from "react";
import Header from "../Header/Header"; // Импортируем Header
import AboutUs from "../AboutUs/AboutUs"; 
import GoogleMaps from "../GoogleMaps/GoogleMap"; // Путь к GoogleMaps
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <GoogleMaps />
      <Footer />
    

    </div>
  );
}

export default HomePage;
