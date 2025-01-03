import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из React Router
import './Footer.css'; // Импорт стилей для футера

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <ul>
            <li><Link to="/HomePage">About us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/BookNow">Contacts</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contacts: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>E-mail: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MP Plus Locksmith. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
