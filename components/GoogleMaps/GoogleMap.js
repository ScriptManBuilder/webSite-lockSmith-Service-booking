/* global google */
import React, { useEffect } from 'react';
import './GoogleMap.css'; // Подключаем файл стилей

const GoogleMap = () => {
  useEffect(() => {
    // Инициализация карты
    async function initMap() {
      const position = { lat: 43.58545741809973, lng: -116.3148703781988 }; // Ваши координаты

      // Импортируем библиотеки для карты и маркеров
      //@ts-ignore
      const { Map } = await google.maps.importLibrary('maps');
      //@ts-ignore
      const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

      // Замените на ваш Map ID
      const mapId = "your_map_id"; // Замените на ваш Map ID

      // Создаем карту
      const map = new Map(document.getElementById('map'), {
        zoom: 12, // Измените зум, если нужно
        center: position,
        apiKey: 'your_api_key', // Замените на ваш API-ключ
        mapId: mapId, // Применяем Map ID
      });

      // Добавляем маркер
      new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Custom Location',
      });
    }

    // Запускаем инициализацию
    initMap();
  }, []);

  return (
    <div className="google-map-container">
      <h2 className="map-heading">Our Location on the Map</h2> {/* Заголовок над картой */}
      <div
        id="map"
        className="map-container"
      ></div>
    </div>
  );
};

export default GoogleMap;
