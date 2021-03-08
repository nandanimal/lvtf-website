import React from 'react';

import Map from '../components/Map';
import {Button} from '../components/Button';

import '../styles/Home.css';

const fridgeLocations = [
  {
    title: 'UMOK',
    address: '1010 N Main St',
  },
  {
    title: 'Project4Humanity',
    address: '912 E Sahara Ave',
  },
  {
    title: 'Sweeney',
    address: '1041 Sweeney Ave',
  },
];

const headerTextStyle = {fontSize: '35px', fontWeight: 800, fontFamily: 'Fami'};

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="bannerContainer">
        <img
          className="wavyBackgroundImage"
          src={require('../images/background-wavy.png')}
          alt="wavy background"
        />
        <div className="takeWhatYouNeedContainer">
          <p style={headerTextStyle}>Take what you need, + leave what you can.</p>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* @TODO where link to */}
            <Button buttonStyle="btn--outline" to="/get-involved">
              Get Involved
            </Button>

            <a href="#mapAndText" className="findAFridgeButton">
              {' '}
              Find a Fridge
            </a>
          </div>
        </div>
        <img id="lvtfwoman-img" src={require('../images/lvtf-shirt-cropped.png')} alt="LVTF Woman" />
      </div>

      <div className="missionContainer">
        <img id="lvtf-logo" src={require('../images/logo-circle.png')} alt="lvtf-logo" />
        <div className="missionText">
          <p style={headerTextStyle}>Our Mission</p>
          <p style={{fontSize: '25px', paddingBottom: '1em'}}>
            The Las Vegas Town Fridge Project is a collective looking to nourish our communities. We are your
            neighbors with a mission to combat food security and waste. Our volunteers work within their own
            communities to collaborate with local, like-minded partners to place community refrigerators
            across the city.
          </p>
          <Button buttonStyle="btn--outline" to="/about">
            Read more
          </Button>
        </div>
      </div>

      <div className="mapContainer">
        <p style={{fontSize: '35px', fontWeight: 800, marginBottom: '.8rem', fontFamily: 'Fami'}}>
          {' '}
          Find a Fridge
        </p>
        <div className="mapAndText" id="mapAndText">
          <Map />
          <div className="fridgeTextLocations">
            {fridgeLocations.map((fridge) => {
              return (
                <span>
                  <p style={{fontFamily: 'Fami'}}>{fridge.title}</p>
                  <p style={{fontSize: '25px', color: '#888888'}}>{fridge.address}</p>
                </span>
              );
            })}

            <div className="interestedContainer">
              <p style={{fontSize: '25px'}}>Interested in hosting a fridge?</p>
              <Button buttonStyle="btn--outline" to="/get-involved">
                Click here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
