import React, { useState } from "react";
import "./BookNow.css";

import NewHeader from "../NewHeader/NewHeader";
import Footer from "../Footer/Footer";
import sendTelegramMessage from "./TelegramBotJsMessage"; // Функция Telegram
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet"; // SEO
//import GoogleAnalytics from "../../utilites/GoogleAnalytics"; // Google Analytics

function BookNow() {
 // GoogleAnalytics(); // Вызов Google Analytics

  const [service, setService] = useState("");
  const [customService, setCustomService] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSelectChange = (e) => {
    setService(e.target.value);
  };

  const handleCustomServiceChange = (e) => {
    setCustomService(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      comment: e.target.comment.value || "-",
      service: e.target.service.value,
      customService: service === "other" ? customService : "",
    };

    const telegramMessage = `
    📩 *New Booking Request*:
    - 👤 *Name*: ${formData.name}
    - 📞 *Phone*: ${formData.phone}
    - 📍 *Address*: ${formData.address}
    - 💬 *Comment*: ${formData.comment}
    - 🔧 *Service*: ${formData.service}
    ${formData.customService ? `- ✏️ *Custom Service*: ${formData.customService}` : ""}
    `;

    try {
      await sendTelegramMessage(telegramMessage);
      console.log("Telegram message sent successfully.");

      await emailjs.send(
        "service_4rq53d9",
        "template_s4gddaw",
        formData,
        "xcR5qctjokj8_L4GU"
      );
      console.log("Email sent successfully.");
      alert("Order successfully submitted!");
    } catch (error) {
      console.error("Error sending data:", error);
      setErrorMessage("Failed to submit order. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-now-page">
      <Helmet>
        <title>Book Locksmith Services - MP PLUS Locksmith</title>
        <meta name="description" content="Book professional locksmith services in Boise, Meridian, Nampa, Caldwell, Kuna, Star, Middleton. Fast, reliable, 24/7 lock opening, key duplication, and more." />
        <meta name="keywords" content="locksmith services, lock opening, key duplication, emergency locksmith, Boise locksmith, Meridian locksmith, Nampa locksmith, Caldwell locksmith, Kuna locksmith, Star locksmith, Middleton locksmith" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Book Locksmith Services - MP PLUS Locksmith" />
        <meta property="og:description" content="Get fast and reliable locksmith services in Boise and surrounding areas. Book now for lock opening, key duplication, emergency locksmith services, and more." />
        <meta property="og:url" content="https://www.facebook.com/mppluslocksmith?mibextid=ZbWKwL" />
        <meta property="og:type" content="website" />
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

      <NewHeader />

      <h2>Fill out the form below to book our locksmith services:</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required pattern="^[1-9]\d{1,14}$" title="Phone number must start with a digit from 1 to 9 and contain 1-15 digits." />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" placeholder="Enter your address" required />

        <label htmlFor="comment">Comment (optionally):</label>
        <textarea id="comment" name="comment" placeholder="Enter additional details"></textarea>

        <label htmlFor="service">Select Service (optionally):</label>
        <select id="service" name="service" value={service} onChange={handleSelectChange}>
          <option value="lock-opening">Lock Opening</option>
          <option value="key-duplication">Key Duplication</option>
          <option value="maintenance">Lock Maintenance</option>
          <option value="other">Other</option>
        </select>

        {service === "other" && (
          <div>
            <label htmlFor="custom-service">Specify your service:</label>
            <input type="text" id="custom-service" name="custom-service" placeholder="Enter your custom service" value={customService} onChange={handleCustomServiceChange} required />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <Footer />
    </div>
  );
}

export default BookNow;
