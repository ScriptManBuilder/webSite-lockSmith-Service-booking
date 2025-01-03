import React, { useState } from "react";
import './BookNow.css'; // Подключаем стили для страницы
import Header from "../Header/Header"; // Импортируем Header
import Footer from '../Footer/Footer'; // Импортируем Footer

function BookNow() {
  const [service, setService] = useState(""); // Состояние для выбранной услуги
  const [customService, setCustomService] = useState(""); // Состояние для пользовательского ввода

  const handleSelectChange = (e) => {
    setService(e.target.value);
  };

  const handleCustomServiceChange = (e) => {
    setCustomService(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    alert("Order submitted"); // Выводим сообщение
  };

  return (
    <div className="book-now-page">
      <Header /> {/* Вставляем Header */}

      <h1>Book Now</h1>
      <p>Fill out the form below to book our services:</p>
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

        <label htmlFor="service">Select Service:</label>
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

        {/* Отображаем текстовое поле, если выбран "Other" */}
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

        <button type="submit">Submit</button>
      </form>

      <Footer /> {/* Вставляем Footer */}
    </div>
  );
}

export default BookNow;
