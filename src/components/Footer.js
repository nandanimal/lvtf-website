import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <Link to="/" className="social-logo">
            {' '}
            <img
              src={require('../images/logo-small.png')}
              alt="LVTF Logo"
            ></img>
          </Link>

          <div className="contact-wrap">
            <h2>Contact us</h2>
            <p> lvtownfridge@gmail.com</p>
          </div>

          <div className="instagram-icon">
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/lvtownfridge/?hl=en"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      <center>
        <small className="website-rights">
          © 2020 Las Vegas Town Fridge
          <br />
          All rights reserved.
        </small>
      </center>
    </div>
  );
};

export default Footer;
