import React from 'react';

import '../styles/Map.css';

export default function Map() {
  return (
    <iframe
      id="embedded-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8983.188869455616!2d-115.14639974905013!3d36.181807919997745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c307cdd8bec3%3A0xd2a001e22f6e40bf!2s1010%20N%20Main%20St%2C%20Las%20Vegas%2C%20NV%2089101!5e0!3m2!1sen!2sus!4v1608064614424!5m2!1sen!2sus"
      frameBorder="0"
      style={{ border: '0' }}
      allowFullScreen=""
      aria-hidden="false"
      title="Fridge Locations"
      tabIndex="0"
    ></iframe>
  );
}
