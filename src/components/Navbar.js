import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";

import { Button } from "./Button";
import "../styles/Navbar.css";

const ScrollLink = Scroll.ScrollLink;

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={require("../images/logo-small.png")}
              alt="LVTF Logo"
            ></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Fridges"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Find A Fridge
              </Link>
            </li>
             {/*
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Our Mission
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Get Involved
              </Link>
            </li>
          </ul>
            <Button buttonStyle="btn--outline" to="/donate">
              DONATE
            </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
