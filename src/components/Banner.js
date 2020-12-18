import React from "react";

import { Button } from "./Button";

import "../styles/Banner.css";

export default function Banner() {
  return (
      <div className="bannerContainer">
          <div className="four columns">
            <div className="mini-cta ">
              <h5>Take what you need + leave what you can.</h5>

                <Button buttonStyle="btn--outline" to="/donate">
                  Get Involved
                </Button>

                <Button buttonStyle="btn--outline" to="/donate">
                  Donate
                 </Button>
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
  );
}
