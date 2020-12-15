import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Banner.css";
import "./Button.css";

export default function Banner() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="four columns">
            <div className="mini-cta ">
              <h5>Take what you need + leave what you can.</h5>

              {Button && (
                <Button buttonStyle="btn--outline" to="/donate">
                  Get Involved
                </Button>
              )}

              {Button && (
                <Button buttonStyle="btn--outline" to="/donate">
                  Donate
                </Button>
              )}
            </div>
          </div>

          <div className="eight columns">
            <img
              id="woman-img"
              src={require("../images/people-gradient.png")}
              alt="LVTF Women"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
