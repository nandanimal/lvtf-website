import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoSmall from '../images/logo-small.png';

import Button from './Button';

import './Navbar.css';

const Navbar = () => {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={LogoSmall} alt="LV Town Fridge"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Find A Fridge
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Our Mission
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Get Involved
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" to="/donate">
              DONATE
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
