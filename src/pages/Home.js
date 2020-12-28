import React from 'react';

import Map from '../components/Map';
import {Button} from '../components/Button';

import '../styles/Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="bannerContainer">
        <div className="takeWhatYouNeedContainer">
          <p style={{fontSize: '35px', fontWeight: 800}}>Take what you need, + leave what you can.</p> 
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* @TODO where link to */}
            <Button buttonStyle="btn--outline" to="">
                  Get Involved
            </Button>

            <Button buttonStyle="btn--outline" to="">
                  Find a Fridge
            </Button>
          </div>
        </div>
        <img id="lvtfwoman-img" src={require('../images/lvtf-shirt-cropped.png')} alt="LVTF Woman"/>
      </div>

      <div className="missionContainer">
        <img id="lvtf-logo" src={require('../images/logo-circle.png')} alt="lvtf-logo"/>
        <div className="missionText">
          <p style={{fontSize: '35px', fontWeight: 800}}>Our Mission</p>
          <p style={{fontSize: '25px'}}>The Las Vegas Town Fridge Project is a collective looking to nourish our communities. We are your neighbors with a mission to combat food security and waste.

Our volunteers work within their own communities to collaborate with local, like-minded partners to place community refrigerators across the city.</p>
        </div>
      </div>

      <div className="mapContainer">
        <p style={{fontSize: '35px', fontWeight: 800, marginBottom: '.8rem'}}> Find a Fridge</p>
        <div className="mapAndText">
          <Map/>
          <div className="fridgeTextLocations">
          hello world
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
