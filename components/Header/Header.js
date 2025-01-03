import React from "react";
import "./Header.css"; // Стили для Header
import logo from "../../assets/logo2.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="MP PLUS LOCKSMITH Logo" className="logo" />
      <h1>MP PLUS LOCKSMITH</h1>
      <nav>
        <a href="/HomePage">About us</a>
        <a href="/Services">Services</a>
        <a href="/BookNow">Book Now</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
 