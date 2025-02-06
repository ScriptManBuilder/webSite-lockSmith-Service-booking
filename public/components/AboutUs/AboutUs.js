import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";  // Импортируем Helmet
import "./AboutUs.css";
import GoogleAnalytics from '../../utilites/GoogleAnalytics'; //  GoogleAnalytics(); 





function AboutUs() {
  useEffect(() => {
    GoogleAnalytics(); // Вызов функции при монтировании компонента
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

  
</Helmet>


    {/* Welcome Section */}
{/* <section id="welcome">
  <div className="welcome-banner">
    <h1>
      <span className="word" id="word1">WELCOME</span>
      <span className="word" id="word2">TO</span>
      <span className="word" id="word3">MP PLUS</span>
      <span className="word" id="word4">LOCKSMITH</span>
    </h1>
    <p>
      <strong>{displayedText}</strong> 
    </p>
    <p>
      Do you need to unlock your car? Have you got locked out of your house? 
      Still can’t open your safe? You can hire a professional locksmith near you 
      and get all your problems resolved quickly and effectively.
    </p>
    <p>
      MP PLUS LOCKSMITH is the best company offering emergency locksmith services. 
      Our locksmiths always arrive on time and work professionally! We’ll unlock your house, 
      car, office, or safe and install a new lock for you.
    </p>
  </div>
</section> */}

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
            <span className="city">Middleton</span> & All Surrounding Areas
          </p>

            </div>
            <a href="tel:2085717073" className="call-now-button">
              Call Now: (208) 571-7073
            </a>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section id="cards">
        <h2>Our Services</h2>
        <div className="services-cards">
          {/* Card 1 */}
          <div className="card">
            <i className="fas fa-lock"></i>
            <h3>Lock Installation</h3>
            <p>High-quality lock installation for your home, office, or vehicle.</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <i className="fas fa-key"></i>
            <h3>Key Duplication</h3>
            <p>Get duplicate keys made quickly and accurately at affordable prices.</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <i className="fas fa-car"></i>
            <h3>Automotive Locksmith</h3>
            <p>Car key replacement, lockouts, and more for your vehicle’s security.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
