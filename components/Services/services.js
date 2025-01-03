import React from "react";
import "./services.css"; // Подключаем стили для страницы услуг
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Для иконок
import { faLock, faKey, faCar, faShieldAlt, faWrench, faDoorOpen, faStar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Список услуг
const servicesList = [
  {
    title: "Emergency Lockout",
    description: "Fast and reliable lockout assistance for cars, homes, and offices.",
    icon: faDoorOpen,
  },
  {
    title: "Key Duplication",
    description: "High-quality key duplication services for any type of lock.",
    icon: faKey,
  },
  {
    title: "Rekeying Locks",
    description: "Enhance your security by rekeying your existing locks.",
    icon: faLock,
  },
  {
    title: "Lock Repair",
    description: "Professional lock repair for damaged or malfunctioning locks.",
    icon: faWrench,
  },
  {
    title: "Automotive Locksmith",
    description: "Car key replacement, key extraction, and ignition repair.",
    icon: faCar,
  },
  {
    title: "High-Security Locks",
    description: "Installation of advanced security locks for your property.",
    icon: faShieldAlt,
  },
];

// Список преимуществ
const advantagesList = [
  {
    title: "24/7 Availability",
    description: "We're always here when you need us, day or night.",
    icon: faCheckCircle,
  },
  {
    title: "Experienced Specialists",
    description: "Our team is composed of highly skilled and certified professionals.",
    icon: faStar,
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive rates with no hidden fees.",
    icon: faWrench,
  },
  {
    title: "High-Quality Tools",
    description: "We use the latest tools and techniques for efficient service.",
    icon: faKey,
  },
  {
    title: "Customer Satisfaction",
    description: "Our clients trust us for reliable and excellent service.",
    icon: faShieldAlt,
  },
];

function Services() {
  return (
    <div>
      <Header /> {/* Вставляем Header */}
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <div className="services-list">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        {/* Секция Why Choose Us */}
        <div className="why-choose-us">
          <h2 className="why-title">Why Choose Us?</h2>
          <ul className="why-list">
            <li>
              <FontAwesomeIcon icon={faShieldAlt} className="why-icon" />
              <p>Certified Specialists with years of experience in the field.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faKey} className="why-icon" />
              <p>State-of-the-art tools and techniques to ensure top-quality service.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faLock} className="why-icon" />
              <p>Available 24/7 for all your emergency locksmith needs.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faWrench} className="why-icon" />
              <p>Transparent pricing with no hidden fees.</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCar} className="why-icon" />
              <p>Trusted by hundreds of satisfied customers.</p>
            </li>
          </ul>
        </div>
        {/* Новая секция Our Advantages */}
        <div className="advantages-container">
          <h2 className="advantages-title">Our Advantages</h2>
          <div className="advantages-list">
            {advantagesList.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <FontAwesomeIcon icon={advantage.icon} className="advantage-icon" />
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Вставляем Footer */}
    </div>
  );
}

export default Services;
