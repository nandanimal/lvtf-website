import React from "react";

import "../styles/Cta.css";

function Cta() {
  return (
    <>
      <div className="cta-container">
        <div className="container">
          <div className="row">
            <center>
              <div className="newsletter-container">
                <p style={{ color: "black" }}>&#10084;</p>
                <h1 className="h1-newsletter">sign up for our newsletter!</h1>

                <form>
                  <input type="text" name="name" placeholder="Name" required />
                  <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <br />
                  <input type="submit" value="Submit" className="btn-cta" />
                </form>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
