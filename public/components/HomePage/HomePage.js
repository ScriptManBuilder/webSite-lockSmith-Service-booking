import React from "react";
import Header from "../Header/Header"; // Импортируем Header
import AboutUs from "../AboutUs/AboutUs"; 
import GoogleMaps from "../GoogleMaps/GoogleMap"; // Путь к GoogleMaps
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet"; // Импортируем Helmet для добавления метатегов

const SEO = () => {
  return (
    <Helmet>
      <title>Home | MP Plus Locksmith</title> {/* Заголовок страницы */}
      <meta
        name="description"
        content="MP Plus Locksmith provides professional locksmith services including lock repair, key duplication, car unlocking, and emergency locksmith services."
      /> {/* Описание страницы */}
      <meta
        name="keywords"
        content="locksmith, home locksmith services, lock repair, car unlock, key duplication, emergency locksmith, MP Plus Locksmith"
      /> {/* Ключевые слова */}
      <meta name="robots" content="index, follow" /> {/* Инструкция для поисковых систем */}
    </Helmet>
  );
};

function HomePage() {
  return (
    <div>
      <SEO /> {/* Вставляем SEO метатеги */}
      <Header />
      <AboutUs />
      <GoogleMaps />
      <Footer />
    </div>
  );
}

export default HomePage;
