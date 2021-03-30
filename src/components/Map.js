import React from 'react';

import '../styles/Map.css';

export default function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1eIuTrvFLeSivQW6enS-J1-2PazCpHM88"
      frameBorder="0"
      id="embedded-map"
      style={{border: '0'}}
      allowFullScreen=""
      aria-hidden="false"
      title="Fridge Locations"
      tabIndex="0"></iframe>
  );
}
