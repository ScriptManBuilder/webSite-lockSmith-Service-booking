import React from "react";
import "./NewHeader.css"; // Стили для Header
import logo from "../../assets/logo2.png";
import { Helmet } from "react-helmet"; // Импортируем Helmet для добавления метатегов и скриптов

function NewHeader() {
  return (
    <>
      {/* SEO и Google Tag Manager */}
      <Helmet>
       
      </Helmet>

      {/* Header */}
      <header>
        <img src={logo} alt="MP PLUS LOCKSMITH Logo" className="logo" />
        <h1>MP PLUS </h1>
        <nav>
          <a href="/HomePage">About us</a>
          <a href="/Services">Services</a>
          <a href="/AirDuctCleaning">AirDuctCleaning</a>
          <a href="/BookNow">Book Now</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default NewHeader;
