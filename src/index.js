// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Подключаем стили
import App from './App'; // Импортируем главный компонент


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
