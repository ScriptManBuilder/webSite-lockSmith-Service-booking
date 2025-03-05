import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из React Router
import './Footer.css'; // Импорт стилей для футера
import { Helmet } from 'react-helmet'; // Импортируем Helmet для добавления метатегов и скриптов

const Footer = () => {
  return (
    <>
      {/* SEO и Google Tag Manager */}
      <Helmet>
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

      {/* Footer */}
      <footer id="footer">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li><Link to="/HomePage">About us</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/AirDuctCleaning">AirDuctCleaning</Link></li>
              <li><Link to="/BookNow">Book Now</Link></li>
              <li><Link to="/PrivacyPolice">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Contacts: <a href="tel:+1234567890">+208-571-7073 </a></p>
            <p>E-mail: <a href="mailto:info@example.com">mpplus1995@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 MP Plus Locksmith. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
