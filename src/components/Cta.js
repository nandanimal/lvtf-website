import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Cta.css";

function Cta() {
  return (
    <>
      <div className="cta-container">
        <h1>
          Helping nonprofits modernize their web presence and making it easier
          for their donors to help.
        </h1>
        <p>Get involved with Front End For All today.</p>
        <div className="btn-cta">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
            to="/donate"
          >
            Donate
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            to="/contact"
          >
            Contact
          </Button>
        </div>
      </div>

      <div className="info-container">
        <div className="info-image"></div>
        <div className="info-text">
          <h1>
            "It's easier than ever for
            <span style={{ color: "#FFB741" }}> small nonprofits </span>
            to build <span style={{ color: "#FFB741" }}> fast, effective </span>
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
}

export default Cta;
