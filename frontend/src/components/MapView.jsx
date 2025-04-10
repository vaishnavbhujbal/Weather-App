
import React from 'react';

const MapView = ({ location }) => {
  if (!location) return null;

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location}`;

  return (
    <div className="my-6">
      <iframe
        title="Map"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapSrc}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapView;
