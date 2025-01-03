import React, { useState, useEffect } from "react";
import "./AboutUs.css";

function AboutUs() {
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
      {/* Welcome Section */}
      <section id="welcome">
        <div className="welcome-banner">
          <h1>
            <span className="word" id="word1">WELCOME</span>
            <span className="word" id="word2">TO</span>
            <span className="word" id="word3">MP PLUS</span>
            <span className="word" id="word4">LOCKSMITH</span>
          </h1>
          <p>
            <strong>{displayedText}</strong> {/* Печатание текста по букве */}
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
      </section>

      {/* About MP Plus Locksmith Section */}
      <section id="about-us">
        <div className="container">
          <h2>About MP PLUS LOCKSMITH</h2>
          <p>
            Welcome to MP PLUS LOCKSMITH, your trusted locksmith service in Boise and surrounding areas. 
            We specialize in a wide range of services, from emergency locksmith services to residential, 
            automotive, and commercial locksmith services. Whether you need a locksmith for your car, 
            home, office, or safe, we're available 24/7 for fast and reliable service.
          </p>
          <p>
            Our experts provide key duplication, lock repair, rekeying services, and lock installation. 
            We also offer services like car key replacement, broken key extraction, and affordable locksmith solutions. 
            From door lock repair to high-security locks, we ensure your property stays secure.
          </p>
          <p>
            Our services include unlocking cars, homes, offices, and safes, as well as key making for cars on-site. 
            We handle all types of locks, ensuring you're never locked out of your property.
          </p>
        </div>
      </section>

      {/* Top-Rated Service Section */}
      <section id="top-rated-service">
        <div className="service-banner">
          <div className="text-content">
            <h1>
              <span className="highlight">24/7</span> Top-Rated Locksmith Service <br />
              Car. Home. Office.
            </h1>
            <div className="service-info">
              <p>
                <i className="fas fa-clock"></i> Serving Boise, Nampa, Meridian, Eagle, Middleton & All Surrounding Areas
              </p>
            </div>
            <a href="tel:7205001348" className="call-now-button">
              Call Now: (720) 500-1348
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
