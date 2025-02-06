import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NewHeader from "../NewHeader/NewHeader";
import Footer from "../Footer/Footer";
import GoogleAnalytics from "../../utilites/GoogleAnalytics";
import "./AirDuctCleaning.css";
import airductCleaningImage from "../../assets/airduct-cleaning4.jpg";
import airductCleaningImage1 from "../../assets/airduct-cleaning3.jpg";
import { Link } from 'react-router-dom';

const AirDuctCleaning = () => {
  useEffect(() => {
    GoogleAnalytics();
  }, []);

  return (
    <div className="airduct-cleaning-container">
      <Helmet>
        <title>Professional Air Duct Cleaning Services in Boise - MP PLUS</title>
        <meta
          name="description"
          content="MP PLUS offers expert air duct cleaning services in Boise and nearby areas. Improve air quality and HVAC efficiency today!"
        />
      </Helmet>
      <NewHeader />

      {/* Секция с двумя изображениями */}
      <section className="images-container">
        <div className="image-with-text">
          <img src={airductCleaningImage} alt="Air Duct Cleaning" className="image" />
          <div className="text-overlay">
            <h2>Improve Your Air Quality with Our Expert Services</h2>
            <h3>Protect Your Family’s Health with Our Comprehensive Air Duct Sanitizing and Cleaning Services</h3>
          <p>Dirty air ducts can spread dust and allergens, affecting your family’s health. Our cleaning services reduce airborne contaminants, promoting better air quality and a healthier home.</p>

          </div>
        </div>

        <div className="image-with-text">
          <img src={airductCleaningImage1} alt="Air Duct Cleaning" className="image" />
          <div className="text-overlay">
            <h2>Efficient and Affordable Cleaning Solutions</h2>
            <h3>Affordable Air Duct Cleaning for a Healthier Home</h3>
            <p>Our expert cleaning services improve air quality and HVAC efficiency at a price you can trust. Keep your home safe from dust and allergens with our budget-friendly air duct cleaning solutions in Boise and surrounding areas.</p>

          </div>
        </div>
      </section>

      <main className="content">
        <h1>Professional Air Duct Cleaning Services in Boise and Nearby Cities – MP PLUS</h1>
        <p>
          Keeping your air ducts clean is essential for maintaining a healthy indoor environment. MP PLUS Air Duct Cleaning offers professional and efficient air duct cleaning services in Boise and surrounding areas, ensuring better air quality and improved HVAC system efficiency.
        </p>
        <h2>Why Choose MP PLUS?</h2>
        <ul>
          <li><strong>Expert Technicians</strong> – We use advanced equipment to remove dust, debris, and allergens from your air ducts.</li>
          <li><strong>Healthier Air</strong> – Clean ducts reduce allergens and airborne contaminants, improving indoor air quality.</li>
          <li><strong>Energy Efficiency</strong> – A properly maintained ventilation system helps lower energy costs.</li>
          <li><strong>Comprehensive Service</strong> – We clean, inspect, and sanitize your ducts for optimal air circulation.</li>
        </ul>
        <h2>Our Services</h2>
        <ul>
          <li>✔ Air duct cleaning</li>
          <li>✔ Dryer vent cleaning</li>
          <li>✔ HVAC system maintenance</li>
          <li>✔ Mold and dust removal</li>
        </ul>
        <h2>Service Areas</h2>
        <p>
          We proudly serve Boise and the surrounding cities, including:
          Meridian, Nampa, Caldwell, Kuna, Eagle, Star, Middleton, Garden City, Emmett, Hidden Springs, Horseshoe Bend, Parma, Greenleaf, and other nearby communities.
        </p>
        <p>Whether you need a one-time deep cleaning or regular maintenance, MP PLUS is here to help!</p>
        <p>Call us today at <strong>208-571-7073</strong> to schedule an appointment!</p>

        <button className="call-button">
          <Link to="/BookNow" style={{ textDecoration: 'none', color: 'white' }}>Book now</Link>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default AirDuctCleaning;
