import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage'; // Импортируем HomePage
import BookNow from "./components/BookNow/BookNow";
import Services from "./components/Services/services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/BookNow" element={<BookNow />} />
          <Route path="/Services" element={<Services/>} />
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
