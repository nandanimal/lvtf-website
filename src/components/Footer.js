import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      {/* <Cta /> */}
      <section className="footer-container-2">
        <div className="row">
          <div className="one-third column">
            <center className="footer-item">
              <Link to="/" className="main-logo">
                {' '}
                <img id="main-logo-img" src={require('../images/logo-circle.png')} alt="LVTF Logo"></img>
              </Link>
            </center>
          </div>
          <div className="one-third column">
            <center className="footer-item">
              <p style={{fontFamily: 'Fami'}}>
                {' '}
                Contact: <br />
              </p>
              lvtownfridge@gmail.com <br />
            </center>
          </div>

          <div className="one-third column">
            <center className="footer-item">
              <a
                className="social-icon-link instagram"
                href="https://www.instagram.com/lvtownfridge/?hl=en"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
                style={{textDecoration: 'none', color: 'white'}}>
                <p style={{fontFamily: 'Fami'}}>Instagram</p>
                @lvtownfridge
              </a>
            </center>
          </div>
        </div>
      </section>

      {/* <br /> */}

      <center>
        <small className="website-rights">
          © 2021 Las Vegas Town Fridge
          <br />
          All rights reserved.
        </small>
      </center>
    </div>
  );
}

export default Footer;
