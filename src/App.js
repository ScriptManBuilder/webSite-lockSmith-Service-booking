import React, { useEffect } from "react";  // Импортируем useEffect
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage'; // Импортируем HomePage
import BookNow from "./components/BookNow/BookNow";
import Services from "./components/Services/services";
import PrivacyPolice from "./components/PrivacyPolice/privacy";
import Contact from "./components/Contact/contact";
import GoogleAnalytics from './utilites/GoogleAnalytics';
import AirDuctCleaning from "./components/AirDuctCleaning/AirDuctCleaning";

function App() {
  useEffect(() => {
    GoogleAnalytics();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/BookNow" element={<BookNow />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/PrivacyPolice" element={<PrivacyPolice />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AirDuctCleaning" element={<AirDuctCleaning/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
