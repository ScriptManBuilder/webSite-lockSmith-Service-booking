/* global google */
import React, { useEffect, useRef, useState } from 'react';
import './GoogleMap.css';

const GoogleMap = ({ mapId = "b0001f24c20a9242", apiKey = 'AIzaSyA0Tg_ijiZKCwF2WmYfTtWODiSYPwh9DzE', center = { lat: 43.578845850893636, lng: -116.55980947935905 }, zoom = 12 }) => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Загружаем API Google Maps, если оно еще не загружено
  useEffect(() => {
    if (typeof google !== 'undefined') {
      setIsMapLoaded(true); // API уже загружено
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=maps,marker&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = () => setIsMapLoaded(true); // Инициализация карты
      document.body.appendChild(script);
    }
  }, [apiKey]);

  useEffect(() => {
    if (!isMapLoaded) return;

    // Инициализация карты
    async function initMap() {
      try {
        const { Map } = await google.maps.importLibrary('maps');
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

        const map = new Map(mapRef.current, {
          zoom: zoom,
          center: center,
          mapId: mapId,
        });

        new AdvancedMarkerElement({
          map: map,
          position: center,
          title: 'Custom Location',
        });
      } catch (error) {
        console.error('Error loading the map:', error);
      }
    }

    initMap();
  }, [isMapLoaded, mapId, apiKey, center, zoom]);

  return (
    <div className="google-map-container">
      <h2 className="map-heading">Our Location on the Map</h2>
      <div ref={mapRef} className="map-container"></div>
    </div>
  );
};

export default GoogleMap;
