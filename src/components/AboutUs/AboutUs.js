import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";  // Импортируем Helmet
import "./AboutUs.css";
//import GoogleAnalytics from '../../utilites/GoogleAnalytics'; //  GoogleAnalytics(); 
import { Link } from "react-router-dom";




function AboutUs() {
  useEffect(() => {
    //GoogleAnalytics(); // Вызов функции при монтировании компонента
  }, []);
  const phrases = [
    "Licensed, Bonded, and Insured",
    "Highest Rated Locksmith in Boise",
    "24/7 Locksmith Services",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    
    const typePhrase = () => {
      let i = 0;
      setDisplayedText(""); // очищаем текст перед началом печати

      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + phrases[currentPhraseIndex][i]);
        i += 1;
        if (i === phrases[currentPhraseIndex].length) {
          clearInterval(interval); // заканчиваем печатание фразы
        }
      }, 100); // задержка между буквами
    };

    typePhrase(); // начать печатать текущую фразу

    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // смена фразы
    }, 5000); // смена фразы каждые 5 секунд

    return () => {
      clearInterval(phraseInterval); // очищаем интервал при размонтировании компонента
    };
  }, [currentPhraseIndex]); // изменяется только текущий индекс фразы

  return (
    <>
    <Helmet>
  <title>MP PLUS LOCKSMITH SERVICE</title>
  <meta 
    name="description" 
    content="Reliable locksmith services in Boise, Nampa, Meridian, Caldwell, and surrounding areas. Available 24/7 for lockouts, key duplication, and more." 
  />
  <meta 
    name="keywords" 
    content="locksmith, Boise, Nampa, Meridian, lock repair, key duplication, car locksmith, emergency locksmith services, 24/7 locksmith" 
  />
  <meta name="robots" content="index, follow" />

  {/* JSON-LD structured data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Locksmith",
        "name": "MP PLUS LOCKSMITH",
        "url": "https://mppluslocksmith.com",
        "logo": "https://mppluslocksmith.com/logo.jpg",
        "sameAs": [
          "https://www.facebook.com/mppluslocksmith"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-208-571-7073",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main St",
          "addressLocality": "Nampa",
          "addressRegion": "ID",
          "postalCode": "83651",
          "addressCountry": "US"
        }
      }
    `}
  </script>

   {/* Google tag (gtag.js) */}
   <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16740926008"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16740926008');
    `}
  </script>
</Helmet>


    

<section id="about-us">
  <div className="container">
    <h2 style={{ fontSize: '3.5rem' }}>
      <span className="word" id="word1">WELCOME</span>
      <span className="word" id="word2">TO</span>
      <span className="word" id="word3">MP PLUS</span>
      <span className="word" id="word4">LOCKSMITH</span>
    </h2>
    <div class="custom-page">
  <strong>{displayedText}</strong>
    </div>

    <p style={{ fontSize: '1.35rem' }}>
      MP PLUS LOCKSMITH is your trusted locksmith service in Boise and surrounding areas, available 24/7. We specialize in emergency lockouts, key duplication, lock repair, rekeying, and lock installation for cars, homes, offices, and safes.
    </p>
    <p style={{ fontSize: '1.35rem' }}>
      Our services also include on-site car key making, broken key extraction, and high-security lock installations. Count on us for fast, reliable, and professional service every time you need it.
    </p>
  </div>
</section>



      {/* Top-Rated Service Section */}
      <section id="top-rated-service">
        <div className="service-banner">
          <div className="text-content">
            <h1>
              <span className="highlight">24/7</span> Top-Rated  Services <br />
              Car. Home. Office.
            </h1>
            <div className="service-info">
            <p>
            <i className="fas fa-clock"></i> Serving  
            <span className="city"> Boise</span>, 
            <span className="city">Nampa</span>, 
            <span className="city">Meridian</span>, 
            <span className="city">Caldwell</span>, 
            <span className="city">Kuna</span>, 
            <span className="city">Star</span>, 
            <span className="city">Eagle</span>, 
            <span className="city">Middleton</span> & All Surrounding Areas 
            <span className="city"> State of Idaho</span>
          </p>

          <Link to="/BookNow" className="call-now-button">
          Book a Service!
          </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="services-overview">
      <h2>Wide Range of Services for You</h2>
      <p>We offer locksmith services, air duct cleaning, key duplication, and much more.</p>
      <Link to="/services" className="services-button">Learn More →</Link>
    </section>
    </>
  );
}

export default AboutUs;
