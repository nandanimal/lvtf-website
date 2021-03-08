import React from 'react';

import '../styles/GetInvolved.css';

const textStyles = {fontSize: '20px', marginBottom: '.8em'};

const GetInvolved = () => {
  return (
    <>
      <div className="hostAFridgeContainer">
        <div className="hostTextContainer">
          <p style={{fontSize: '35px', marginBottom: '.8em'}}>Host a fridge</p>
          <p style={textStyles}>
            Are you interested in providing a home for a community refrigerator? All a fridge really needs is
          </p>
          <p style={textStyles}>1) Access to an eletrical outlet </p>
          <p style={textStyles}>2) An accessible location easily accessible to the public</p>
          <p style={textStyles}>
            Details of operation can are entirely up you - be made at your own discretion (i.e. like operating
            times, fridge contents, etc). Hosts are protected from liability by the Bill Emerson Good
            Samaritan Food Donation Act.
          </p>
          <p style={textStyles}>
            If you're interested in hosting a community fridge, send us an email at lvtownfridge@gmail.com
          </p>
        </div>
        <img
          className="fridgeImage"
          src={require('../images/host-a-fridge.jpeg')}
          alt="Fridge with LVTF Logo"
        />
      </div>
      <div className="volunteerWithUsContainer">
        <img
          className="multiplePeopleImage"
          src={require('../images/multiple-people.jpeg')}
          alt="multiple cartoon people"
        />
        <div style={{flexDirection: 'column'}}>
          <p style={{fontSize: '35px', marginBottom: '.8em'}}>Volunteer with us</p>
          <p style={textStyles}>
            Our community is special because of people like you. None of this could have happened without
            y'all, and none of this can continue happening without y'all. So however you are thinking of
            helping--be it graphic Design, social Media, outreach, cleaning, stocking, transportation,
            beautifying, fundraising, or something else we've never even heard of or considered yet--we
            encourage you to get in touch with us and share your ideas. We will do what we can to help you
            actualize those ideas in your own community.
          </p>
          <p style={textStyles}>
            If you want to be added to our volunteer list, please fill out the form below!
          </p>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
