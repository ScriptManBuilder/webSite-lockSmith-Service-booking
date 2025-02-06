import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NewHeader from "../NewHeader/NewHeader";
import Footer from "../Footer/Footer";
import GoogleAnalytics from "../../utilites/GoogleAnalytics";
import "./AirDuctCleaning.css"; // Подключаем стили
import airductCleaningImage from "../../assets/airduct-cleaning.png";

const AirDuctCleaning = () => {
  useEffect(() => {
    GoogleAnalytics(); // Вызов функции при монтировании компонента
  }, []);

  return (
    <div className="airduct-cleaning-container">
      <Helmet>
        <title>Professional Air Duct Cleaning Services in Boise - MP PLUS</title>
        <meta
          name="description"
          content="MP PLUS offers expert air duct cleaning services in Boise and nearby areas. Improve air quality and HVAC efficiency today!"
        />
        <meta
          name="keywords"
          content="Air duct cleaning Boise, Duct cleaning service Boise, HVAC duct cleaning Boise, Professional air duct cleaning, Residential air duct cleaning, Commercial air duct cleaning, Dryer vent cleaning Boise, Vent cleaning service Boise, Air duct sanitizing Boise, HVAC system maintenance Boise, Air duct cleaning Meridian, Air duct cleaning Nampa, Air duct cleaning Caldwell, Air duct cleaning Kuna, Air duct cleaning Eagle, Air duct cleaning Star, Air duct cleaning Middleton, Air duct cleaning Garden City, Air duct cleaning Emmett, Air duct cleaning Hidden Springs, Air duct cleaning Horseshoe Bend, Air duct cleaning Parma, Air duct cleaning Greenleaf, Improve indoor air quality, Remove dust and allergens, Reduce HVAC energy costs, Best air duct cleaners Boise, Affordable duct cleaning Boise, Local air duct cleaning company, Air duct mold removal Boise, HVAC vent cleaning experts, Airflow improvement services"
        />
      </Helmet>
      <NewHeader />
      <main className="content">
        <section
          className="hero"
          style={{
            backgroundImage: `url(${airductCleaningImage})`,
            backgroundPosition: "center",
            backgroundSize: "contain", // Используем contain для сохранения пропорций
            backgroundRepeat: "no-repeat",
            padding: "100px 20px",
            color: "#fff",
          }}
        >
          <h1>
            Professional Air Duct Cleaning Services in Boise and Nearby Cities
            – MP PLUS
          </h1>
          <p>
            Keeping your air ducts clean is essential for maintaining a healthy
            indoor environment. MP PLUS Air Duct Cleaning offers professional
            and efficient air duct cleaning services in Boise and surrounding
            areas, ensuring better air quality and improved HVAC system
            efficiency.
          </p>
          <button className="cta-button">Book a Service</button>
        </section>
        <section className="benefits">
          <h2>Why Choose MP PLUS?</h2>
          <ul>
            <li>
              <strong>Expert Technicians</strong> – We use advanced equipment to
              remove dust, debris, and allergens from your air ducts.
            </li>
            <li>
              <strong>Healthier Air</strong> – Clean ducts reduce allergens and
              airborne contaminants, improving indoor air quality.
            </li>
            <li>
              <strong>Energy Efficiency</strong> – A properly maintained
              ventilation system helps lower energy costs.
            </li>
            <li>
              <strong>Comprehensive Service</strong> – We clean, inspect, and
              sanitize your ducts for optimal air circulation.
            </li>
          </ul>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>✔ Air duct cleaning</li>
            <li>✔ Dryer vent cleaning</li>
            <li>✔ HVAC system maintenance</li>
            <li>✔ Mold and dust removal</li>
          </ul>
        </section>
        <section className="service-areas">
          <h2>Service Areas</h2>
          <p>We proudly serve Boise and the surrounding cities, including:</p>
          <p>
            Meridian, Nampa, Caldwell, Kuna, Eagle, Star, Middleton, Garden
            City, Emmett, Hidden Springs, Horseshoe Bend, Parma, Greenleaf, and
            other nearby communities.
          </p>
          <p>
            Whether you need a one-time deep cleaning or regular maintenance, MP
            PLUS is here to help!
          </p>
        </section>
        <section className="contact">
          <h2>Get in Touch</h2>
          <p>
            Call us today at <strong>208-571-7073</strong> to schedule an
            appointment!
          </p>
          <button className="contact-button">Contact Us</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AirDuctCleaning;
