import React from "react";
import Header from "../Header/Header"; // Импортируем Header
import Footer from "../Footer/Footer"; // Импортируем Footer
import { Helmet } from "react-helmet"; // Импортируем Helmet для добавления метатегов

const SEO = () => {
  return (
    <Helmet>
      <title>Privacy Policy | MP Plus Locksmith</title> {/* Заголовок страницы */}
      <meta
        name="description"
        content="Read MP Plus Locksmith's privacy policy, including information on data collection, usage, protection, and your rights regarding personal data."
      /> {/* Описание страницы */}
      <meta
        name="keywords"
        content="privacy policy, personal data, locksmith services, data protection, rights, MP Plus Locksmith"
      /> {/* Ключевые слова */}
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

const PrivacyPolicy = () => {
  return (
    <div>
      <SEO /> {/* Вставляем SEO метатеги */}
      <Header /> {/* Вставляем Header */}
      <div style={styles.container}>
        <h1 style={styles.header}>Privacy Policy</h1>
        <p style={styles.text}>
          Welcome to MP PLUS Locksmith! Your privacy is critically important to us. 
          This Privacy Policy outlines how we collect, use, and protect your personal information.
        </p>
        <p style={styles.text}>
          By using our website or services, you agree to the practices described in this policy. If you have any questions, feel free to contact us.
        </p>
        
        <h2 style={styles.subHeader}>Information We Collect</h2>
        <ul style={styles.list}>
          <li>Personal information: Name, phone number, and email address when you book a service or contact us.</li>
          <li>Location data: Address details for providing locksmith services on-site.</li>
          <li>Technical information: IP address, browser type, and device information for improving website functionality.</li>
        </ul>

        <h2 style={styles.subHeader}>How We Use Your Information</h2>
        <ul style={styles.list}>
          <li>To schedule and provide locksmith services at your location.</li>
          <li>To communicate updates, confirmations, or follow-ups about your bookings.</li>
          <li>To improve our website and service offerings based on user feedback.</li>
          <li>To comply with legal obligations or resolve disputes.</li>
        </ul>

        <h2 style={styles.subHeader}>Data Protection</h2>
        <p style={styles.text}>
          We implement strict security measures to safeguard your personal information. 
          Your data is only accessible to authorized personnel and is never shared with third parties without your consent, except as required by law.
        </p>

        <h2 style={styles.subHeader}>Your Rights</h2>
        <p style={styles.text}>
          You have the right to:
        </p>
        <ul style={styles.list}>
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections to inaccurate or incomplete data.</li>
          <li>Request deletion of your personal data, where applicable.</li>
        </ul>
        <p style={styles.text}>
          To exercise these rights or for any privacy-related inquiries, please contact us at mpplus1995@gmail.com.
        </p>

        <h2 style={styles.subHeader}>Updates to This Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. 
          Please review this page periodically to stay informed about how we protect your information.
        </p>
      </div>
      <Footer /> {/* Вставляем Footer */}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2em",
    color: "#333",
  },
  subHeader: {
    fontSize: "1.5em",
    color: "#444",
    marginTop: "20px",
  },
  text: {
    fontSize: "1em",
    color: "#555",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
};

export default PrivacyPolicy;
