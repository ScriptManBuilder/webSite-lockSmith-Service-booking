import React, { useState,useEffect } from "react";
import './BookNow.css';

import NewHeader from "../NewHeader/NewHeader";
import Footer from '../Footer/Footer';
import sendTelegramMessage from './TelegramBotJsMessage'; // Импорт функции Telegram
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet'; // Импортируем 
import GoogleAnalytics from '../../utilites/GoogleAnalytics'; //  GoogleAnalytics(); 




function BookNow() {
  
 
  const [service, setService] = useState("");
  const [customService, setCustomService] = useState("");
  const [loading, setLoading] = useState(false); // Статус загрузки
  const [errorMessage, setErrorMessage] = useState(null); // Ошибка, если возникнет

  const handleSelectChange = (e) => {
    setService(e.target.value);
  };

  const handleCustomServiceChange = (e) => {
    setCustomService(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    setLoading(true); // Начинаем загрузку
    setErrorMessage(null); // Сбрасываем ошибку

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      gmail: e.target.gmail.value,
      subject: e.target.subject.value,
      service: e.target.service.value,
      customService: service === 'other' ? customService : '',
    };

    const telegramMessage = `
    📩 *New Booking Request*:
    - 👤 *Name*: ${formData.name}
    - 📞 *Phone*: ${formData.phone}
    - 📧 *Email*: ${formData.gmail}
    - 📝 *Subject*: ${formData.subject}
    - 🔧 *Service*: ${formData.service}
    ${formData.customService ? `- ✏️ *Custom Service*: ${formData.customService}` : ""}
    `;

    try {
      // Отправляем сообщение в Telegram
      await sendTelegramMessage(telegramMessage);
      console.log('Telegram message sent successfully.');

      // Отправляем email с использованием emailjs
      await emailjs.send(
        'service_4rq53d9', // Ваш service ID
        'template_s4gddaw', // Ваш template ID
        formData, // Передаем данные формы
        'xcR5qctjokj8_L4GU' // Ваш user ID
      );
      console.log('Email sent successfully.');
      alert('Order successfully submitted!');
    } catch (error) {
      console.error('Error sending data:', error);
      setErrorMessage('Failed to submit order. Please try again later.');
    } finally {
      setLoading(false); // Завершаем загрузку
    }
  };

  return (
    <div className="book-now-page">
      {/* SEO Optimization: Meta Tags */}
      <Helmet>
  <title>Book Locksmith Services - MP PLUS Locksmith</title>
  <meta name="description" content="Book professional locksmith services in Boise, Meridian, Nampa, Caldwell, Kuna, Star, Middleton. Fast, reliable, 24/7 lock opening, key duplication, and more." />
  <meta name="keywords" content="locksmith services, lock opening, key duplication, emergency locksmith, Boise locksmith, Meridian locksmith, Nampa locksmith, Caldwell locksmith, Kuna locksmith, Star locksmith, Middleton locksmith" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Book Locksmith Services - MP PLUS Locksmith" />
  <meta property="og:description" content="Get fast and reliable locksmith services in Boise and surrounding areas. Book now for lock opening, key duplication, emergency locksmith services, and more." />


  <meta name="twitter:title" content="Book Locksmith Services - MP PLUS Locksmith" />
  <meta name="twitter:description" content="Book fast and reliable locksmith services online. Serving Boise, Meridian, Nampa, Caldwell, Kuna, Star, Middleton. 24/7 availability." />
  

</Helmet>

      <NewHeader /> {/* Вставляем Header */}

    
      <h2>Fill out the form below to book our locksmith services:</h2>
      
      {/* Если есть ошибка, показываем сообщение */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          required
          pattern="^[1-9]\d{1,14}$" 
          title="Phone number must start with a digit from 1 to 9 and contain 1-15 digits."
        />

        <label htmlFor="gmail">Email address</label>
        <input
          type="email"
          id="gmail"
          name="gmail"
          placeholder="Enter your email address"
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter your subject"
          required
        />

        <label htmlFor="service">Select Service (optionally):</label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={handleSelectChange}
        >
          <option value="lock-opening">Lock Opening</option>
          <option value="key-duplication">Key Duplication</option>
          <option value="maintenance">Lock Maintenance</option>
          <option value="other">Other</option>
        </select>

        {service === "other" && (
          <div>
            <label htmlFor="custom-service">Specify your service:</label>
            <input
              type="text"
              id="custom-service"
              name="custom-service"
              placeholder="Enter your custom service"
              value={customService}
              onChange={handleCustomServiceChange}
              required
            />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <Footer /> {/* Вставляем Footer */}
    </div>
  );
}

export default BookNow;
