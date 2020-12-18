import React from "react";

import Banner from "../components/Banner";

import '../styles/Home.css';

function Home() {
  return (
    <div className="homeContainer">
      <Banner />
      <div className="missionContainer">
        <h3>Mission</h3>
        <p style={{lineHeight: 1.6, fontSize: '1.2rem'}}>The Las Vegas Town Fridge Project is a collective looking to nourish our communities. We are your neighbors with a mission to combat food security and waste.

Our volunteers work within their own communities to collaborate with local, like-minded partners to place community refrigerators across the city.

These fridges provide people with access to donate and/or take food with a goal of providing access 24/7.</p>

      </div>
      <h4></h4>
    </div>
  );
}

export default Home;
