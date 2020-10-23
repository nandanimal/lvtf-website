import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="newsletter-container">
          <center>
            <h1>sign up for our newsletter</h1>
            <p>
              for all news and updates
              <br />
              &#10084;
            </p>

            <br />

            <form>
              <input type="text" name="name" placeholder="Name" />
              <br />
              <input type="text" name="email" placeholder="Email" />
              <br />
              <input type="submit" value="Submit" className="btns" />
            </form>
          </center>
        </div>
      </div>

      <div className="info-container">
        <div className="info-image"></div>
        <div className="info-text">
          <h1>
            "It's easier than ever for
            <span style={{ color: '#FFB741' }}> small nonprofits </span>
            to build <span style={{ color: '#FFB741' }}> fast, effective </span>
            websites."
          </h1>
          <br />
          <Link to="/about" className="learn-more-link">
            Learn more -->
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
