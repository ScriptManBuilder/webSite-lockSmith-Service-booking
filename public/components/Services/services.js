import React, { useState,useEffect } from "react";
import { Helmet } from "react-helmet"; // Для работы с мета-тегами
import "./services.css"; // Подключаем стили для страницы услуг
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Для иконок
import { faLock, faKey, faCar, faShieldAlt, faWrench, faDoorOpen, faStar, faCheckCircle, faFan, faHammer ,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import GoogleAnalytics from '../../utilites/GoogleAnalytics'; //  GoogleAnalytics(); 
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';

// В компоненте
<img src={avatar1} alt="Customer Avatar" className="review-avatar" />



const servicesList = [
  {
    title: "Air Duct Cleaning",
    description: "Comprehensive cleaning of air ducts to improve air quality and system efficiency.",
    extraDescription: (
      <>
        Our air duct cleaning service removes dust and allergens, improving indoor air quality and <span className="city">HVAC efficiency</span>.
      </>
    ),
    icon: faFan,
  },
  {
    title: "Key Duplication",
    description: "High-quality key duplication services for any type of lock.",
    extraDescription: (
      <>
        We guarantee precise <span className="city">key duplication</span> with optimal functionality and durability for all types of <span className="city">locks</span>.
      </>
    ),
    icon: faKey,
  },
  {
    title: "Rekeying Locks",
    description: "Enhance your security by rekeying your existing locks.",
    extraDescription: (
      <>
        A cost-effective solution to secure your property, making old <span className="city">keys</span> obsolete while maintaining existing <span className="city">locks</span>.
      </>
    ),
    icon: faLock,
  },
  {
    title: "Lock Repair",
    description: "Professional lock repair for damaged or malfunctioning locks.",
    extraDescription: (
      <>
        We repair all types of <span className="city">locks</span> quickly, ensuring their safe and reliable function for home or office <span className="city">security</span>.
      </>
    ),
    icon: faWrench,
  },
  {
    title: "Automotive Locksmith",
    description: "Car key replacement, key extraction, and ignition repair.",
    extraDescription: (
      <>
        Our mobile service provides car key <span className="city">replacements</span>, key <span className="city">extraction</span>, and ignition repairs on-site for your convenience.
      </>
    ),
    icon: faCar,
  },
  {
    title: "High-Security Locks",
    description: "Installation of advanced security locks for your property.",
    extraDescription: (
      <>
        Install high-security <span className="city">locks</span> for protection in residential and commercial <span className="city">properties</span>.
      </>
    ),
    icon: faShieldAlt,
  },
  {
    title: "Emergency Lockout",
    description: "Fast and reliable lockout assistance for cars, homes, and offices.",
    extraDescription: (
      <>
        Our expert team ensures fast, damage-free lockout solutions, available 24/7 for{" "}
        <span className="city">homes</span>, <span className="city">offices</span>, and <span className="city">vehicles</span>.
      </>
    ),
    icon: faDoorOpen,
  },
  
  {
    title: "General Locksmith Services",
    description: "Reliable and professional locksmith services for all types of locks and security systems.",
    extraDescription: (
      <>
        From <span className="city">homes</span> to <span className="city">businesses</span>, we offer fast, reliable, and secure locksmith solutions.
      </>
    ),
    icon: faHammer,
  }
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
  useEffect(() => {
    GoogleAnalytics(); // Вызов функции при монтировании компонента
  }, []);
  return (
    <div>
      <Helmet>
        <title>Our Services - MP PLUS Locksmith</title>
        <meta
          name="description"
          content="Explore the range of locksmith services offered by MP PLUS Locksmith, including emergency lockouts, key duplication, lock repair, and more. Available 24/7."
        />
        <meta name="keywords" content="locksmith, emergency lockout, key duplication, automotive locksmith, high-security locks, 24/7 locksmith services" />
        <meta property="og:title" content="Our Services - MP PLUS Locksmith" />
        <meta property="og:description" content="Explore our professional locksmith services for residential, commercial, and automotive needs, available 24/7." />
        <meta property="og:image" content="https://mppluslocksmith.com/logo.jpg" />
        <meta property="og:url" content="https://mppluslocksmith.com/services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Locksmith Services",
              "serviceType": "Emergency Lockouts, Key Duplication, Lock Repair, Automotive Locksmith",
              "provider": {
                "@type": "Organization",
                "name": "MP PLUS Locksmith",
                "url": "https://mppluslocksmith.com",
                "logo": "https://mppluslocksmith.com/logo.jpg",
                "sameAs": "https://facebook.com/mppluslocksmith"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Nampa"
              },
              "telephone": "+208-571-7073",
              "description": "We offer a range of locksmith services including emergency lockouts, key duplication, automotive locksmithing, and lock repair."
            }
          `}
        </script>

         {/* Google Analytics Tag */}
         
        
      </Helmet>
      <Header /> {/* Вставляем Header */}
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <div className="services-list">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <p className="extra-description">{service.extraDescription}</p> {/* Added extra description */}
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

  {/* Секция Отзывы */}
  <h2 className="reviews-title">What Our Customers Say</h2>
  <div className="reviews">
    <div className="review">
      <div className="review-header">
      <img src={avatar1} alt="Customer Avatar" className="review-avatar" />
        <div className="review-name-rating">
          <p className="review-name">John Doe</p>
          <div className="review-stars">
            {/* Звезды рейтинга */}
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStarHalfAlt} className="star" />
          </div>
        </div>
      </div>
      <p className="review-text">
        "The service was amazing! Quick, professional, and friendly. Highly recommend!"
      </p>
    </div>

    <div className="review">
      <div className="review-header">
      <img src={avatar2} alt="Customer Avatar" className="review-avatar" />
        <div className="review-name-rating">
          <p className="review-name">Jane Smith</p>
          <div className="review-stars">
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
        </div>
      </div>
      <p className="review-text">
        "Fantastic service! The technician arrived on time and fixed the issue in no time!"
      </p>
    </div>

    {/* Добавьте еще несколько отзывов по аналогии */}
  </div>
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
