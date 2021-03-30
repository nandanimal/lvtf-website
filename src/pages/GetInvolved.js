import React from 'react';

import '../styles/GetInvolved.css';

const textStyles = {fontSize: '20px', marginBottom: '.8em'};

const GetInvolved = () => {
  return (
    <>
      <div className="getInvolvedContainer">
        <div className="columnContainer">
          <div className="volunteerWithUsContainer">
            <div className="imgContainer">
              <img
                className="multiplePeopleImage"
                src={require('../images/multiple-people.jpeg')}
                alt="multiple cartoon people"
              />
            </div>

            <div className="volunteerTextContainer">
              <div style={{flexDirection: 'column'}}>
                <p style={{fontSize: '50px', marginBottom: '.2em', fontFamily: 'Fami'}}>Volunteer with us</p>
                <p style={textStyles}>
                  Our community is special because of people like you. None of this could have happened
                  without y'all, and none of this can continue happening without y'all. So however you are
                  thinking of helping &mdash; be it graphic Design, social Media, outreach, cleaning,
                  stocking, transportation, beautifying, fundraising, or something else we've never even heard
                  of or considered yet &mdash; we encourage you to get in touch with us and share your ideas.
                  We will do what we can to help you actualize those ideas in your own community.
                </p>
                <p style={textStyles}>
                  If you'd like to be added to our volunteer list, please fill out the form below!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columnContainer">
          <div className="hostAFridgeContainer">
            <div className="imgContainer">
              <img
                className="fridgeImage"
                src={require('../images/host-a-fridge.jpeg')}
                alt="Fridge with LVTF Logo"
              />
            </div>

            <div className="hostTextContainer">
              <p style={{fontSize: '50px', marginBottom: '.2em', fontFamily: 'Fami'}}>Host a fridge</p>
              <p style={textStyles}>
                Are you interested in providing a home for a community refrigerator? All a fridge really needs
                is
              </p>
              <p style={textStyles}>1) Access to an eletrical outlet </p>
              <p style={textStyles}>2) An accessible location easily accessible to the public</p>
              <p style={textStyles}>
                Details of operation can are entirely up you &mdash; be made at your own discretion (i.e. like
                operating times, fridge contents, etc). Hosts are protected from liability by the Bill Emerson
                Good Samaritan Food Donation Act.
              </p>
              <p style={textStyles}>
                If you're interested in hosting a community fridge, send us an email at lvtownfridge@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
