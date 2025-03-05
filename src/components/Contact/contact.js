import React, { useState,useEffect } from 'react';
import Header from "../Header/Header"; // Импортируем Header
import Footer from "../Footer/Footer"; // Импортируем Footer
import './contact.css'; // Стили для Contact
import avaterOperatort from "../../assets/avaterOperatort.jpg";  // Adjust path if necessary
import { Helmet } from 'react-helmet';  // Импортируем Helmet для добавления метатегов
//import GoogleAnalytics from '../../utilites/GoogleAnalytics'; //  GoogleAnalytics(); 

const SEO = () => {
  return (
    <Helmet>
      <title>Contact Us | MP Plus Locksmith</title> {/* Заголовок страницы */}
      <meta name="description" content="Have questions? Contact MP Plus Locksmith via email, phone, or live chat for quick responses." /> {/* Описание страницы */}
      <meta name="keywords" content="locksmith, contact us, emergency services, key duplication, car unlock, lock repair, locksmith service" /> {/* Ключевые слова */}
      <meta name="robots" content="index, follow" /> {/* Инструкция для поисковых систем */}

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
  );
};

const Contact = () => {
  useEffect(() => {
    //GoogleAnalytics(); // Вызов функции при монтировании компонента
  }, []);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Состояние для отображения анимации "печатает..."
  const [hasFollowUpMessageSent, setHasFollowUpMessageSent] = useState(false); // Флаг для отслеживания отправки сообщения

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!userMessage) return;
  
    setChatMessages([...chatMessages, { user: 'user', text: userMessage }]);
    setUserMessage('');
  
    // Имитация печати сообщения ботом
    setIsTyping(true);
  
    setTimeout(() => {
      setIsTyping(false); // Убираем "печатает..." через 1.5 секунды
  
      let responseText = '';
      const message = userMessage.toLowerCase();
  
      // Логика для ответов на вопросы
      if (
        message.includes('working hours') ||
        message.includes('available') ||
        message.includes('open') ||
        message.includes('time') ||
        message.includes('close') ||
        message.includes('24/7') ||
        message.includes('weekends') ||
        message.includes('emergency services') ||
        message.includes('reach')
      ) {
        responseText = 'We’re always available and ready to help with all your locksmith needs!';
      } else if (
        message.includes('cost') ||
        message.includes('prices') ||
        message.includes('quote') ||
        message.includes('lock repair') ||
        message.includes('key duplication') ||
        message.includes('unlocking a car') ||
        message.includes('discounts') ||
        message.includes('emergency call-out') ||
        message.includes('free estimate')
      ) {
        responseText = 'For detailed pricing information, please contact us via phone or through our website.';
      } else if (message.includes('lock') || message.includes('locked')) {
        responseText = 'We provide services for unlocking and repairing all types of locks.';
      } else if (message.includes('keys') || message.includes('car keys')) {
        responseText = 'We can create car keys on-site for most vehicle models.';
      } else if (message.includes('safe') || message.includes('safes')) {
        responseText = 'We also provide safe unlocking and servicing.';
      } else {
        const defaultResponses = [
          'Hello! How can I assist you today?',
          'Hi there! How may I help you?',
          'Greetings! What can I do for you?',
          'Hello! Feel free to ask any questions.',
          'Hi! What can I assist you with today?'
        ];
      
        // Выбираем случайный ответ из массива
        const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      
        responseText = randomResponse; // Ответ по умолчанию
      }
      
  
      // Добавляем первый ответ
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: 'operator', text: responseText },
      ]);
      
    }, 1500);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !phone || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Здесь будет код отправки формы (например, с использованием fetch или axios)
    setError('');
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-page">
      <Header /> {/* Вставляем Header */}

      <div className="contact-container">
        <h2 className="contact-title">Have questions? Chat with us!</h2> {/* Заголовок чата */}

        {/* Чат с оператором */}
        <div className="chat-container">
        <div className="chat-window">
  {chatMessages.map((msg, index) => (
    <div
      key={index}
      className={`chat-message ${msg.user === 'user' ? 'user-message' : 'operator-message'}`}
    >
      {msg.user === 'operator' && (
        <img
        src={avaterOperatort}
        alt="Operator Avatar"
        className="operator-avatar"
      />
      
      
      )}
      <span>{msg.text}</span>
    </div>
  ))}
</div>


          {/* Анимация "Печатает..." */}
          {isTyping && (
            <div className="typing-indicator">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          )}

          {/* Форма для ввода сообщения */}
          <form className="chat-form" onSubmit={handleChatSubmit}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your question..."
              className="chat-input"
            />
            <button type="submit" className="chat-send-button">
              Send
            </button>
          </form>
        </div>

        {/* Контактная информация mpplus1995@gmail.com*/}
        <div className="contact-info">
          <a href="mailto:mpplus1995@gmail.com" className="contact-button email-button">
            <span>Email: mpplus1995@gmail.com</span>
          </a>
          <a href="tel:+2085717073" className="contact-button phone-button">
            <span>Phone: +208-571-7073</span>
          </a>
        </div>
      </div>

      <Footer /> {/* Вставляем Footer */}
    </div>
  );
};

export default Contact;
